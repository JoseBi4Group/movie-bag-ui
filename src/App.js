import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { 
  Navbar,
  Nav
} from 'react-bootstrap';
import UserList from './components/users';
import Login from './components/login';
import Signup from './components/signup';
import { MovieList, MovieNew} from './components/movies';
import HomePage from './components/home';

class App extends Component {

  constructor() {
    super();
  }


  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Movies Bag</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        
          <Switch>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route exact path="/movies">
              <MovieList />
            </Route>
            <Route exact path="/movies/new">
              <MovieNew />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
