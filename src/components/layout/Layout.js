import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomeContent from "../home/HomeContent";
import NewsList from "../news/NewsList";
import LoginForm from "../login/LoginForm";

function Layout({children}) {
    return(
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">React MA3</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                    <NavLink to="/news" className="nav-link">News</NavLink>
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container>
          <Switch>
              <Route path="/" exact component={HomeContent} />
              <Route path="/news" component={NewsList} />
              <Route path="/login" component={LoginForm} />
          </Switch>
        </Container>
      </Router>   
    );
}

export default Layout;