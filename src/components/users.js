import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);    
  }

  render () {
    return (
      <div>
        <center><h1>User List</h1></center>
        {this.props.users.map(u => {
          return (                 
            <User email={u.email} />                  
          );
        })}
      </div>
    );
  }
}

class User extends Component {
  render () {
      return (
        <div class="card">
          <div class="card-body">                  
            <h5 class="card-title">
              {this.props.email}
            </h5>                  
          </div>
        </div>         
      );
  }
}

export default UserList