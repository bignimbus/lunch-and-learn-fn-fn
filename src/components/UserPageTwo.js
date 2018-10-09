import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withUser from '../hocs/withUser';

export const UserPageTwo = ({ user }) => (
  <h1>{ user.username }'s Photos</h1>
);

UserPageTwo.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

const UserPageTwoContainer = withUser(UserPageTwo);

export default UserPageTwoContainer;
