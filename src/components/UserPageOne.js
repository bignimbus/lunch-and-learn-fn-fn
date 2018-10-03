import React, { Component } from 'react';
import UserService from '../services/UserService';

class UserPageOne extends Component {
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

    return (
      <div>
        {
          user ?
            <h1>{ user.username }'s Profile</h1> :
            <span>Loading...</span>
        }
      </div>
    );
  }
}

export default UserPageOne;
