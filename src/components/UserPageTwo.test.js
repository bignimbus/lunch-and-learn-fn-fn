import React from 'react';
import renderer from 'react-test-renderer';
import { UserPageTwo } from './UserPageTwo';
import { user } from './__fixtures__';

const renderComponent = () => renderer.create(
  <UserPageTwo user={user} />,
);


describe('UserPageTwo', () => {
  test('#render', () => {
    const component = renderComponent();
    expect(component.toJSON()).toMatchSnapshot();
  });
});
