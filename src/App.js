import React, { Component } from 'react';
import './App.css';
import UserList from './components/users';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <UserList users={this.state.users} />
    );
  }
}

export default App;
