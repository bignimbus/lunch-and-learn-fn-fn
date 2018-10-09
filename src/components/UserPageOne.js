import React from 'react';
import PropTypes from 'prop-types';
import withUser from '../hocs/withUser';

export const UserPageOne  = ({ user }) => (
  <h1>{ user.username }'s Profile</h1>
);

UserPageOne.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

const UserPageOneContainer = withUser(UserPageOne);

export default UserPageOneContainer;
