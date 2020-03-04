import React, { Component } from 'react';
import { 
  Container,
  Card,
  Button,
  Alert
} from 'react-bootstrap';

// Get token from LocalStorage 
const token = localStorage.getItem('token');

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };  
  }

  componentDidMount() {
    fetch("http://localhost:5000/movies", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => {
        this.setState({ movies: data })
    })
    .catch(console.log)
  }

  render () {
    return (
      <Container>
        <center><h1>Movie List</h1></center>
        {typeof(this.state.movies) != 'undefined' && this.state.movies.length > 0 ?
            this.state.movies.map(movie => {
                return (                 
                <Movie data={movie} />                  
                );
            })
        : <Alert variant="info">No movies available</Alert>
        }

      </Container>
    );
  }
}

class Movie extends Component {
  render () {
      return (
        <Card style={{ marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{this.props.data.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.data.genres.join(',')}
            </Card.Subtitle>
            <Card.Text>
              <b>Casting:</b> {this.props.data.casts.join(',')}
            </Card.Text>
            <Button variant="outline-secondary" size="sm" href="#">Update</Button>{' '}
            <Button variant="outline-danger" size="sm" href="#">Delete</Button>
          </Card.Body>
        </Card>       
      );
  }
}

export default MovieList