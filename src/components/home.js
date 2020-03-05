import React, { Component } from 'react';
import { 
  Container,
  Alert,
  Button
} from 'react-bootstrap';

// Get token from LocalStorage 
const token = localStorage.getItem('token');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };  
  }

  render () {
    return (
      <Container>
        <center><h1>Welcome to Movies Bag</h1></center>
        {token == null || typeof(token) == 'undefined' ?
          <Alert variant="info">
            If you want access to movies you need to {' '}
            <Alert.Link href="/movies">log in</Alert.Link>.
          </Alert>
        :  
          <center>
            <Button variant="primary" size="lg" block href="/movies">
              List of movies
            </Button>
            <Button variant="secondary" size="lg" block href="/movies/new">
              Create a new movie
            </Button>            
          </center>      
        }
      </Container>
    );
  }
}


export default Home