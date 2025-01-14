import { combineReducers } from '@reduxjs/toolkit';
import paymentDetailsReducer from './planDetails';
import userProfileReducer from './userProfile';
import popupReducer from './popup';
import appConfigReducer from './appConfig';
import innerPopupReducer from './innerPopupReducer';
import offerReducer from './offerSlice';
import orderReducer from './orderSlice';
import paymentMethodsReducer from './paymentMethodsSlice';
import publisherConfigReducer from './publisherConfigSlice';
import paymentReducer from './paymentSlice';
import finalizeInitialPaymentReducer from './finalizePaymentSlice';
import finalizeAddPaymentDetailsReducer from './finalizeAddPaymentDetailsSlice';
import popupManagerReducer from './popupSlice';
import myaccountReducer from './myaccountSlice';
import planDetailsReducer from './planDetailsSlice';
import offersReducer from './offersSlice';
import paymentDetailsSliceReducer from './paymentDetailsSlice';
import transactionsReducer from './transactionsSlice';
import publisherConsentsReducer from './publisherConsentsSlice';

const rootReducer = combineReducers({
  planDetails: paymentDetailsReducer,
  userProfile: userProfileReducer,
  popup: popupReducer,
  appConfig: appConfigReducer,
  innerPopup: innerPopupReducer,
  offer: offerReducer,
  order: orderReducer,
  paymentMethods: paymentMethodsReducer,
  publisherConfig: publisherConfigReducer,
  payment: paymentReducer,
  finalizeAddPaymentDetails: finalizeAddPaymentDetailsReducer,
  popupManager: popupManagerReducer,
  myaccount: myaccountReducer,
  finalizeInitialPayment: finalizeInitialPaymentReducer,
  plan: planDetailsReducer,
  offers: offersReducer,
  paymentDetails: paymentDetailsSliceReducer,
  transactions: transactionsReducer,
  publisherConsents: publisherConsentsReducer
});

export default (state, action) =>
  rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);
