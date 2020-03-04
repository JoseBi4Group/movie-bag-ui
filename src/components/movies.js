import React, { Component } from 'react';
import { 
  Container,
  Card
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
                <Movie name={movie.name} />                  
                );
            })
        : <div>No movies available</div> }

      </Container>
    );
  }
}

class Movie extends Component {
  render () {
      return (
        <Card style={{marginBottom: '1rem'}}>
          <Card.Body>{this.props.name}</Card.Body>
        </Card>         
      );
  }
}

export default MovieList