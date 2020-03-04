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
import MovieList from './components/movies';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODMzMTEwMTUsIm5iZiI6MTU4MzMxMTAxNSwianRpIjoiZWQ1NWFjMjctMGU1NC00MTU4LWI4NjgtZWE1ZjAyYzZhNzU3IiwiZXhwIjoxNTgzOTE1ODE1LCJpZGVudGl0eSI6IjVlMTg2YmU3NzhhNTgxNzhiZjhlM2EyOSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.241O3IdFeBUSwDJkTAWt3N3sQWApkTKAuIqAU4xwdRM"

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
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/">
              <h1>Home page</h1>
            </Route>            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
