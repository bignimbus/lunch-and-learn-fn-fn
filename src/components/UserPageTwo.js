import React, { Component } from 'react';
import UserService from '../services/UserService';

class UserPageTwo extends Component {
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
            <h1>{ user.username }'s Photos</h1> :
            <span>Loading...</span>
        }
      </div>
    );
  }
}

export default UserPageTwo;
