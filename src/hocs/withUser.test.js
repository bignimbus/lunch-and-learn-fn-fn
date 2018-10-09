import React from 'react';
import renderer from 'react-test-renderer';
import withUser from './withUser';
import UserProvider from '../components/UserProvider';

const TestComponent = () => <header id='my-hoc-test' />;

describe('withUser', () => {
  it('should return a composed component', () => {
    const TestComponentContainer = withUser(TestComponent);
    const component = renderer.create(<TestComponentContainer />);
    expect(component.root.findByType(UserProvider).instance).toBeInstanceOf(UserProvider);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
