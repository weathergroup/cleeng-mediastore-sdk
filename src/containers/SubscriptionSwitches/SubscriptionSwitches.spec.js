/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { POPUP_TYPES } from 'redux/innerPopupReducer';

import UpdateSubscription from 'components/UpdateSubscription';
import SwitchPlanPopup from 'components/SwitchPlanPopup';

import { PureSubscriptionSwitches } from './SubscriptionSwitches.component';

jest.mock('api/Customer/getCustomerSubscriptions');
jest.mock('api/Customer/getAvailableSwitches');

jest.mock('containers/labeling', () => () => Component => props => (
  <Component t={k => k} {...props} />
));
jest.mock('react-i18next', () => ({
  withTranslation: () => Component => props => (
    <Component t={k => k} {...props} />
  ),
  useTranslation: () => ({
    t: key => key
  })
}));

const setCurrentPlanMock = jest.fn();
const showInnerPopupMock = jest.fn();
const hideInnerPopupMock = jest.fn();
const setOfferToSwitchMock = jest.fn();
const setSwitchSettingsMock = jest.fn();
const updateListMock = jest.fn();

const defaultProps = {
  setCurrentPlan: setCurrentPlanMock,
  showInnerPopup: showInnerPopupMock,
  hideInnerPopup: hideInnerPopupMock,
  setOfferToSwitch: setOfferToSwitchMock,
  setSwitchSettings: setSwitchSettingsMock,
  updateList: updateListMock
};
describe('<SubscriptionSwitches/>', () => {
  afterEach(() => jest.clearAllMocks());
  describe('@componentDidMount', () => {
    it('should hide survey on switch tabs', () => {
      mount(
        <PureSubscriptionSwitches
          {...defaultProps}
          planDetails={{ isSurveyShown: true, currentPlan: ['mock'] }}
          innerPopup={{ isOpen: true }}
        />
      );
      expect(hideInnerPopupMock).toHaveBeenCalled();
      expect(updateListMock).toHaveBeenCalled();
    });
  });
  describe('@actions', () => {
    it('should render updateSubscription popup', () => {
      const wrapper = shallow(
        <PureSubscriptionSwitches
          {...defaultProps}
          planDetails={{
            currentPlan: [1],
            switchSettings: { id: [{ mock: 'mock' }] },
            offerToSwitch: { offerId: 'id' },
            updateList: false
          }}
          innerPopup={{
            isOpen: true,
            type: POPUP_TYPES.updateSubscription,
            data: { action: 'resubscribe', offerData: { mock: 'mock' } }
          }}
        />
      );
      expect(wrapper.find(UpdateSubscription).exists()).toBe(true);
    });
    it('should render SwitchPlan popup', () => {
      const wrapper = shallow(
        <PureSubscriptionSwitches
          {...defaultProps}
          planDetails={{
            currentPlan: [1],
            switchSettings: { id: [{ mock: 'mock' }] },
            offerToSwitch: { offerId: 'id' },
            updateList: false
          }}
          innerPopup={{
            isOpen: true,
            type: POPUP_TYPES.switchPlan,
            data: { offerData: { mock: 'mock' } }
          }}
        />
      );
      expect(wrapper.find(SwitchPlanPopup).exists()).toBe(true);
    });
  });
});