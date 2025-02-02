import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { getPaymentMethods, submitPayment, submitPayPalPayment } from 'api';
import Button from 'components/Button';
import Adyen from 'components/Adyen';
import Loader from 'components/Loader';
import SectionHeader from 'components/SectionHeader';
import { fetchFinalizeInitialPayment } from 'redux/finalizePaymentSlice';
import Auth from 'services/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  validatePaymentMethods,
  shouldShowGatewayComponent
} from 'util/paymentMethodHelper';
import { updatePaymentMethods } from 'redux/publisherConfigSlice';
import { fetchUpdateOrder } from 'redux/orderSlice';
import { setSelectedPaymentMethod } from 'redux/paymentMethodsSlice';
import { submitPaymentWithoutDetails } from 'redux/paymentSlice';
import {
  PaymentErrorStyled,
  PaymentStyled,
  PaymentWrapperStyled
} from './PaymentStyled';
import eventDispatcher, {
  MSSDK_PURCHASE_FAILED,
  MSSDK_PURCHASE_SUCCESSFUL
} from '../../util/eventDispatcher';
import LegalNote from './LegalNote/LegalNote';
import PayPal from './PayPal/PayPal';
import DropInSection from './DropInSection/DropInSection';
import { periodMapper } from '../../util';
import LegalCopy from './LegalCopy/LegalCopy';

const Payment = ({ t, onPaymentComplete }) => {
  const { paymentMethods } = useSelector(state => state.publisherConfig);

  const order = useSelector(state => state.order.order);
  const { requiredPaymentDetails: isPaymentDetailsRequired } = order;
  const { period: offerPeriod } = useSelector(state => state.offer.offer);
  const { loading: isPaymentFinalizationInProgress } = useSelector(
    state => state.finalizeInitialPayment
  );
  const period = offerPeriod
    ? periodMapper[offerPeriod].chargedForEveryText
    : null;
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [dropInInstance, setDropInInstance] = useState(null);
  const [adyenKey, setAdyenKey] = useState(false);
  const [isActionHandlingProcessing, setIsActionHandlingProcessing] = useState(
    false
  );
  const { selectedPaymentMethod } = useSelector(state => state.paymentMethods);

  const dispatch = useDispatch();

  // order updates
  const updateOrderWithPaymentMethodId = methodId => {
    setGeneralError('');
    const { id } = order;
    if (id && methodId) {
      // TODO: (nice to have) validate if order.paymentId !== methodId. Pay attention to redux store and async
      dispatch(
        fetchUpdateOrder({
          id,
          payload: { paymentMethodId: methodId }
        })
      )
        .unwrap()
        .catch(errors => {
          if (errors.includes('JWT')) {
            Auth.logout(); // TODO: support properly the logout function
          }
        });
    }
  };

  // payment methods
  const selectPaymentMethodHandler = paymentMethodName => {
    if (selectedPaymentMethod?.methodName === paymentMethodName) return;
    const paymentMethodObj = paymentMethods.find(
      ({ methodName }) => methodName === paymentMethodName
    );
    dispatch(setSelectedPaymentMethod(paymentMethodObj));
    updateOrderWithPaymentMethodId(paymentMethodObj.id);
  };

  const fetchPaymentMethods = async () => {
    const response = await getPaymentMethods();
    const { paymentMethods: paymentMethodsFromBackend } = response.responseData;
    const validMethodsFromResponse = validatePaymentMethods(
      paymentMethodsFromBackend,
      false
    );
    if (response.errors.length) {
      setGeneralError(t('Cannot fetch payment methods'));
      return;
    }

    dispatch(updatePaymentMethods(validMethodsFromResponse));
    if (!validMethodsFromResponse?.length) {
      setGeneralError(t('Payment methods are not defined'));
    }
  };

  useEffect(() => {
    if (paymentMethods.length === 1) {
      const [paymentMethod] = paymentMethods;
      selectPaymentMethodHandler(paymentMethod.methodName);
    }
  }, [paymentMethods]);

  const handlePayPalError = () => {
    const { search } = window.location;
    if (search?.includes('message')) {
      setGeneralError(t('Your payment was not processed. Please, try again'));
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
    handlePayPalError();
  }, []);

  // PayPal
  const submitPayPal = async () => {
    setIsLoading(true);
    const { responseData } = await submitPayPalPayment();
    if (responseData?.redirectUrl) {
      window.location.href = responseData.redirectUrl;
    } else {
      setIsLoading(false);
      setGeneralError(t('The payment failed. Please try again.'));
    }
  };

  // Adyen
  const onAdditionalDetails = async state => {
    const {
      data: { details }
    } = state;
    dispatch(fetchFinalizeInitialPayment({ orderId: order.id, details }));
  };

  const onAdyenSubmit = async (state, component) => {
    const {
      data: { paymentMethod, browserInfo, billingAddress }
    } = state;

    setGeneralError('');
    setIsLoading(true);
    const { errors, responseData } = await submitPayment(
      paymentMethod,
      browserInfo,
      billingAddress
    );

    if (errors.length) {
      eventDispatcher(MSSDK_PURCHASE_FAILED, {
        reason: errors[0]
      });
      const notSupportedMethod = errors[0].includes(
        'Payment details are not supported'
      );
      setGeneralError(
        notSupportedMethod
          ? t('Payment method not supported. Try different payment method')
          : t(
              'The payment has not been processed. Please, try again with a different payment method.'
            )
      );
      setIsLoading(false);
      // force Adyen remount
      setDropInInstance(null);
      setAdyenKey(key => !key);
      return;
    }

    const { action, payment } = responseData;
    if (action) {
      if (action.type !== 'redirect') {
        setIsActionHandlingProcessing(true);
      }
      component.handleAction(action);
      return;
    }
    eventDispatcher(MSSDK_PURCHASE_SUCCESSFUL, {
      payment
    });
    onPaymentComplete();
  };

  const getDropIn = drop => {
    setDropInInstance(drop);
  };

  // Payment without payment details
  const paymentWithoutDetails = async () => {
    setIsLoading(true);
    setGeneralError('');

    dispatch(submitPaymentWithoutDetails())
      .unwrap()
      .then(payment => {
        eventDispatcher(MSSDK_PURCHASE_SUCCESSFUL, {
          payment
        });
        onPaymentComplete();
      })
      .catch(() => {
        setIsLoading(false);
        setGeneralError(t('The payment failed. Please try again.'));
      });
  };

  const shouldShowAdyen = shouldShowGatewayComponent('adyen', paymentMethods);
  const shouldShowPayPal = shouldShowGatewayComponent('paypal', paymentMethods);

  const showPayPalWhenAdyenIsReady = () =>
    shouldShowAdyen ? !!dropInInstance : true;

  if (!paymentMethods.length) {
    return (
      <PaymentStyled>
        <SectionHeader marginTop="25px" center>
          {t('Purchase using')}
        </SectionHeader>
        {generalError && (
          <PaymentErrorStyled>{generalError}</PaymentErrorStyled>
        )}
      </PaymentStyled>
    );
  }

  if (!isPaymentDetailsRequired) {
    return (
      <PaymentStyled>
        {generalError && (
          <PaymentErrorStyled>{generalError}</PaymentErrorStyled>
        )}
        <Button
          onClickFn={paymentWithoutDetails}
          theme="confirm"
          width="250px"
          size="big"
          margin="20px auto 0 auto"
        >
          {isLoading ? (
            <Loader buttonLoader color="#ffffff" />
          ) : (
            t('Complete purchase')
          )}
        </Button>
      </PaymentStyled>
    );
  }

  return (
    <PaymentStyled>
      <SectionHeader marginTop="25px" paddingBottom="0" center>
        {t('Purchase using')}
      </SectionHeader>
      <LegalCopy />
      <PaymentWrapperStyled>
        {isPaymentFinalizationInProgress && <Loader />}
        {shouldShowAdyen && (
          <Adyen
            key={adyenKey}
            onSubmit={onAdyenSubmit}
            selectPaymentMethod={selectPaymentMethodHandler}
            isPayPalAvailable={shouldShowPayPal}
            getDropIn={getDropIn}
            onAdditionalDetails={onAdditionalDetails}
          />
        )}
        {shouldShowPayPal &&
          showPayPalWhenAdyenIsReady() &&
          !isActionHandlingProcessing && (
            <DropInSection
              isCardAvailable={shouldShowAdyen}
              selectPaymentMethod={selectPaymentMethodHandler}
              title="PayPal"
              logo="paypal"
              isLoading={isLoading}
            >
              <PayPal
                totalPrice={order.totalPrice}
                offerId={order.offerId}
                onSubmit={submitPayPal}
                isLoading={isLoading}
              />
            </DropInSection>
          )}
        {generalError && (
          <PaymentErrorStyled>{generalError}</PaymentErrorStyled>
        )}
      </PaymentWrapperStyled>
      {order?.offerId?.charAt(0) === 'S' && (
        <LegalNote order={order} period={period} />
      )}
    </PaymentStyled>
  );
};

Payment.propTypes = {
  onPaymentComplete: PropTypes.func.isRequired,
  t: PropTypes.func
};

Payment.defaultProps = {
  t: k => k
};

export { Payment as PurePayment };

export default withTranslation()(labeling()(Payment));
