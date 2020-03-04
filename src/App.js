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
import UserList from './components/users';
import { 
  Navbar,
  Nav
} from 'react-bootstrap';


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
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        
          <Switch>
            <Route path="/users">
              <UserList />
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
