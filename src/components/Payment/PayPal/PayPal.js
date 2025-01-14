import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as PaypalLogo } from 'assets/images/paymentMethods/PayPalColor.svg';
import Button from 'components/Button';
import { PayPalContentStyled } from './PayPalStyled';

const PayPal = ({ totalPrice, offerId, onSubmit, isLoading, t }) => {
  return (
    <PayPalContentStyled>
      <>
        {/* my account */}
        {!offerId && (
          <>
            {t("We'll redirect you to PayPal to update your payment details.")}
            <br />
            <br />
            {t(
              'Note, PayPal is subject to an additional 8% fee that will be added to your next payments.'
            )}
          </>
        )}
        {/* checkout */}
        {offerId &&
          totalPrice !== 0 &&
          t("We'll redirect you to PayPal to complete your purchase.")}
        {offerId?.charAt(0) === 'S' &&
          totalPrice === 0 &&
          t(
            "We'll redirect you to PayPal to complete your purchase. Note, PayPal is subject to an additional 8% fee that will be added to your next payments."
          )}
      </>
      <Button
        theme="paypal"
        onClickFn={onSubmit}
        disabled={isLoading}
        sieze="big"
        margin="20px auto auto auto"
        fontSize="15px"
        fontWeight="400"
      >
        <PaypalLogo />
      </Button>
    </PayPalContentStyled>
  );
};

PayPal.propTypes = {
  totalPrice: PropTypes.number,
  offerId: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  t: PropTypes.func
};

PayPal.defaultProps = {
  totalPrice: null,
  offerId: null,
  isLoading: false,
  t: k => k
};

export default PayPal;
