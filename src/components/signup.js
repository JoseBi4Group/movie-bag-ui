import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
    Form,
    Button,
    Container
  } from 'react-bootstrap';


class Signup extends Component {
  constructor() {
    super();
    // this.state = {
    //   users: []
    // };  
  }

  // componentDidMount() {
  //   fetch('http://localhost:5000/users')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ users: data })
  //   })
  //   .catch(console.log)
  // }

  render () {
    return (
      <Container>
        <center><h1>Log in</h1></center>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" placeholder="Password again" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Link to="/login">Already have an account?</Link>
      </Container>      
    );
  }
}
  
export default Signup
