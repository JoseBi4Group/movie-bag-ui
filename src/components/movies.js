import React, { Component } from 'react';
import { 
  Container,
  Card,
  Button,
  Alert,
  Form
} from 'react-bootstrap';

// Get token from LocalStorage 
const token = localStorage.getItem('token');

export class MovieList extends Component {
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

export class MovieNew extends Component {

  constructor() {
    super();
    this.state={
      name: '',
      casts: [],
      genres: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Convert 'casts' and 'genres' strings to arrays
    let data = {
      name: this.state.name,
      casts: this.state.casts.split(','),
      genres: this.state.genres.split(',')
    };

    fetch('http://localhost:5000/movies', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
    });
  }

  render () {
      return (
        <Container>
          <center><h1>Create a new Movie</h1></center>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Movie name</Form.Label>
              <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="casts">
              <Form.Label>Casting</Form.Label>
              <Form.Control type="text" name="casts" value={this.state.casts} onChange={this.handleChange} placeholder="Type the actor's name sepparated by commas (for example: 'John, Mike, Emily')" />
            </Form.Group>
            <Form.Group controlId="casts">
              <Form.Label>Genres</Form.Label>
              <Form.Control type="text" name="genres" value={this.state.genres} onChange={this.handleChange} placeholder="Type the genres sepparated by commas (for example: 'Action, Comedy, Drama')" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>  
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
