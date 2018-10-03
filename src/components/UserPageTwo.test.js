import React from 'react';
import renderer from 'react-test-renderer';
import UserPageTwo from './UserPageTwo';
import UserService from '../services/UserService';
import { user } from './__fixtures__'

const renderComponent = () => renderer.create(
  <UserPageTwo />,
);


describe('UserPageTwo', () => {
  test('#getUser', async () => {
    UserService.getUser = jest.fn().mockResolvedValue(user);
    const component = renderComponent();
    const instance = component.getInstance();
    await instance.getUser();
    const { state } = instance;
    expect(state.user).toEqual(user);
  });

  describe('#render', () => {
    test('before user is fetched', () => {
      UserService.getUser = jest.fn().mockResolvedValue({});
      const component = renderComponent();
      expect(component.toJSON()).toMatchSnapshot();
    });

    test('after user is fetched', async () => {
      UserService.getUser = jest.fn().mockResolvedValue({});
      const component = renderComponent();
      UserService.getUser = jest.fn().mockResolvedValue(user);
      await component.getInstance().getUser();
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
