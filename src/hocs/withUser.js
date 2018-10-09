import React from 'react';
import UserProvider from '../components/UserProvider';

const withUser = (WrappedComponent) => () => (
  <UserProvider WrappedComponent={WrappedComponent} />
);

export default withUser;
