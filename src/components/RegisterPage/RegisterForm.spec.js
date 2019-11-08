import React from 'react';
import { shallow, mount } from 'enzyme';
import EmailInput from '../EmailInput/EmailInput';
import RegisterForm from './RegisterForm';
import Consent from '../Consents';
import PasswordInput from '../PasswordInput/PasswordInput';

const mockInputValue = 'MOCK_INPUT_VALUE11';
const mockEmailValue = 'mockmail@mock.com';
const mockNotValidEmail = 'mock';
const mockConsentValue = [true];
const onSubmitMock = jest.fn().mockImplementation(
  () =>
    new Promise(resolve => {
      resolve(false);
    })
);
const mockConsentDefinitions = [
  {
    name: 'name',
    version: '1',
    required: true
  }
];
const jwtMock =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoiNjkwNjI0MjU1IiwicHVibGlzaGVySWQiOjEyMDM1NTU1OX0.EvaMwJ1ZtGR4TNujmROVxiXhiHxzTOp0vgCJPoScXW2bBSroAGsm8kLe-ivnqQ9xoiHJWtDRYZGLKSGASFVuo0bqJT2ZzVEohvCPRwMke0R87p_eaTztWvAUjhbUP0Dk9xo8_AeDvEIDmGln_NXJvTTn6EqU_Xk2Zq3W29_WtbEOjfPplCp49gerR_VpnWA36yTUhfF2sWA1ir0F2HymsDvoQ_6dc8t7nENdslJY08kW-_mSQgj4SbOf4uXgiKAlPU8x3LWzUbO9uFF-eAND7hrJGM-FIWcJreW92DRXmuUMBfe_ws9KXzv-F5gKVcuz7qOpyykkJtZSBvFQJtKMaw';

jest.spyOn(window.localStorage.__proto__, 'setItem'); // eslint-disable-line

describe('RegisterForm', () => {
  describe('@events', () => {
    it('should update state on input change', () => {
      const wrapper = shallow(<RegisterForm />);
      const emailInput = wrapper.find(EmailInput);
      const passwordInput = wrapper.find(PasswordInput);
      expect(wrapper.find(Consent).exists()).toBe(true);

      emailInput.simulate('change', mockEmailValue);
      passwordInput.simulate('change', mockInputValue);

      expect(wrapper.state().email).toBe(mockEmailValue);
      expect(wrapper.state().password).toBe(mockInputValue);
    });
    it('should set error and not call onSubmit cb when email empty', () => {
      const submitWrapper = mount(<RegisterForm onSubmit={onSubmitMock} />);
      const instance = submitWrapper.instance();

      onSubmitMock.mockClear();
      instance.setState({
        email: '',
        password: mockInputValue,
        consents: mockConsentValue,
        consentDefinitions: mockConsentDefinitions
      });
      submitWrapper.simulate('submit');

      expect(onSubmitMock).not.toHaveBeenCalled();
      expect(submitWrapper.state().errors.email).not.toBe('');
      expect(submitWrapper.state().errors.password).toBe('');
      expect(submitWrapper.state().errors.consents).toBe('');
    });

    it('should set error and not call onSubmit cb when password empty', () => {
      const submitWrapper = mount(<RegisterForm onSubmit={onSubmitMock} />);
      const instance = submitWrapper.instance();

      onSubmitMock.mockClear();
      instance.setState({
        email: mockEmailValue,
        password: '',
        consents: mockConsentValue,
        consentDefinitions: mockConsentDefinitions
      });
      submitWrapper.simulate('submit');

      expect(onSubmitMock).not.toHaveBeenCalled();
      expect(submitWrapper.state().errors.password).not.toBe('');
      expect(submitWrapper.state().errors.consents).toBe('');
      expect(submitWrapper.state().errors.email).toBe('');
    });

    it('should set error and not call onSubmit cb when required consents not checked', () => {
      const submitWrapper = mount(<RegisterForm onSubmit={onSubmitMock} />);
      const instance = submitWrapper.instance();

      onSubmitMock.mockClear();
      instance.setState({
        email: mockEmailValue,
        password: mockInputValue,
        consents: [false],
        consentDefinitions: mockConsentDefinitions
      });
      submitWrapper.simulate('submit');

      expect(onSubmitMock).not.toHaveBeenCalled();
      expect(submitWrapper.state().errors.consents).not.toBe('');
      expect(submitWrapper.state().errors.password).toBe('');
      expect(submitWrapper.state().errors.email).toBe('');
    });

    it('should set field error if email not valid', () => {
      const submitWrapper = mount(<RegisterForm onSubmit={onSubmitMock} />);
      const instance = submitWrapper.instance();
      const preventDefaultMock = jest.fn();
      onSubmitMock.mockClear();
      instance.setState({
        email: mockNotValidEmail,
        password: mockNotValidEmail
      });
      submitWrapper.simulate('submit', { preventDefault: preventDefaultMock });

      expect(onSubmitMock).not.toHaveBeenCalled();
      expect(submitWrapper.state().errors.email).not.toBe('');
    });

    it('should validate fields on blur', () => {
      const wrapper = mount(<RegisterForm />);
      const instance = wrapper.instance();
      instance.setState({
        email: '',
        password: '',
        consents: [false],
        consentDefinitions: mockConsentDefinitions
      });
      instance.validateFields();

      expect(instance.state.errors.email).not.toBe('');
      expect(instance.state.errors.password).not.toBe('');
      expect(instance.state.errors.consents).not.toBe('');
    });

    it('should update state on show password icon', () => {
      const registerWrapper = mount(<RegisterForm />);
      const instance = registerWrapper.instance();

      instance.handleClickShowPassword({ preventDefault: jest.fn() });
      expect(instance.state.showPassword).toBe(true);
    });

    it('should call onSubmit callback', done => {
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: jest
            .fn()
            .mockImplementation(() => Promise.resolve({ jwt: jwtMock }))
        })
      );

      onSubmitMock.mockClear();
      const wrapper = shallow(
        <RegisterForm onRegistrationComplete={onSubmitMock} />
      );
      const instance = wrapper.instance();
      const preventDefaultMock = jest.fn();

      instance.setState({
        email: 'john@example.com',
        password: 'testtest123',
        offerId: 'S705970293_NL'
      });

      expect(onSubmitMock).not.toHaveBeenCalled();
      wrapper.simulate('submit', { preventDefault: preventDefaultMock });

      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
      setImmediate(() => {
        expect(instance.state.errors.email).toBe('');
        expect(instance.state.errors.password).toBe('');
        expect(instance.state.generalError).toBe('');
        expect(localStorage.setItem).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalledWith(
          '-checkout-auth-token',
          jwtMock
        );
        expect(onSubmitMock).toHaveBeenCalled();
        done();
      });
    });

    it('should set generalError when request faild', done => {
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 423
        })
      );
      const wrapper = shallow(
        <RegisterForm onRegistrationComplete={onSubmitMock} />
      );
      const instance = wrapper.instance();

      instance.setState({
        email: 'john@example.com',
        password: 'testtest123',
        offerId: 'S705970293_NL'
      });

      const preventDefaultMock = jest.fn();
      wrapper.simulate('submit', { preventDefault: preventDefaultMock });
      setImmediate(() => {
        expect(instance.state.generalError).toBe('An error occured.');
        done();
      });
    });

    it('should update state on show password icon', () => {
      const registerWrapper = mount(<RegisterForm />);
      const instance = registerWrapper.instance();

      instance.handleClickShowPassword({ preventDefault: jest.fn() });
      expect(instance.state.showPassword).toBe(true);
    });

    it('should call onSubmit callback', done => {
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: jest
            .fn()
            .mockImplementation(() => Promise.resolve({ jwt: jwtMock }))
        })
      );

      onSubmitMock.mockClear();
      const wrapper = shallow(
        <RegisterForm onRegistrationComplete={onSubmitMock} />
      );
      const instance = wrapper.instance();
      const preventDefaultMock = jest.fn();

      instance.setState({
        email: 'john@example.com',
        password: 'testtest123',
        offerId: 'S705970293_NL'
      });

      expect(onSubmitMock).not.toHaveBeenCalled();
      wrapper.simulate('submit', { preventDefault: preventDefaultMock });

      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
      setImmediate(() => {
        expect(instance.state.errors.email).toBe('');
        expect(instance.state.errors.password).toBe('');
        expect(instance.state.generalError).toBe('');
        expect(localStorage.setItem).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalledWith(
          '-checkout-auth-token',
          jwtMock
        );
        expect(onSubmitMock).toHaveBeenCalled();
        done();
      });
    });

    it('should set generalError when request faild', done => {
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 423
        })
      );
      const wrapper = shallow(
        <RegisterForm onRegistrationComplete={onSubmitMock} />
      );
      const instance = wrapper.instance();

      instance.setState({
        email: 'john@example.com',
        password: 'testtest123',
        offerId: 'S705970293_NL'
      });

      const preventDefaultMock = jest.fn();
      wrapper.simulate('submit', { preventDefault: preventDefaultMock });
      setImmediate(() => {
        expect(instance.state.generalError).toBe('An error occured.');
        done();
      });
    });
  });
});
