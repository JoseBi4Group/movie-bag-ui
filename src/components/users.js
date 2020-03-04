import React, { Component } from 'react';
import { 
  Container,
  Card
} from 'react-bootstrap';

class UserList extends Component {
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

  render () {
    return (
      <Container>
        <center><h1>User List</h1></center>
        {this.state.users.map(u => {
          return (                 
            <User email={u.email} />                  
          );
        })}
      </Container>
    );
  }
}

class User extends Component {
  render () {
      return (
        <Card style={{marginBottom: '1rem'}}>
          <Card.Body>{this.props.email}</Card.Body>
        </Card>         
      );
  }
}

export default UserList