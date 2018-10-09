import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserService from '../services/UserService';

class UserProvider extends Component {
  static propTypes = {
    WrappedComponent: PropTypes.func.isRequired,
  };

  state = {
    user: {},
  };

  componentDidMount () {
    this.getUser();
  }

  async getUser () {
    const user = await UserService.getUser();
    this.setState({ user });
  }

  render () {
    const { user } = this.state;
    const { WrappedComponent } = this.props;

    return (
      <div>
        {
          user ?
            <WrappedComponent user={user} /> :
            <span>Loading...</span>
        }
      </div>
    );
  }
}

export default UserProvider;
