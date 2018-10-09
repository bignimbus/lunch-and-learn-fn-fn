import React from 'react';
import renderer from 'react-test-renderer';
import { UserPageOne } from './UserPageOne';
import { user } from './__fixtures__'

const renderComponent = () => renderer.create(
  <UserPageOne user={user} />,
);


describe('UserPageOne', () => {
  test('#render', () => {
    const component = renderComponent();
    expect(component.toJSON()).toMatchSnapshot();
  });
});
