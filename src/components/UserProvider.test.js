import React from 'react';
import renderer from 'react-test-renderer';
import UserProvider from './UserProvider';
import UserService from '../services/UserService';
import { user } from './__fixtures__'

const TestComponent = () => <article id='my-test' />;

const renderComponent = () => renderer.create(
  <UserProvider WrappedComponent={TestComponent} />,
);

describe('UserProvider', () => {
  test('#getUser', async () => {
    UserService.getUser = jest.fn().mockResolvedValue(user);
    const component = renderComponent();
    const instance = component.getInstance();
    await instance.getUser();
    const { state } = instance;
    expect(state.user).toEqual(user);
  });

  describe('#render', () => {
    test('when user has not been fetched', async () => {
      UserService.getUser = jest.fn().mockResolvedValue(null);
      const component = renderComponent();
      await component.getInstance().getUser();
      expect(component.toJSON()).toMatchSnapshot();
    });

    test('when user has been fetched', async () => {
      UserService.getUser = jest.fn().mockResolvedValue(user);
      const component = renderComponent();
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
