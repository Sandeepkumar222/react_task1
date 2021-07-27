import React from 'react';
import {BrowserRouter,Route, Redirect,Switch} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Crud from './CrudAppFunc';
import AboutUser from './AboutUser';
import { Row,Col,Nav,Container,Navbar} from "react-bootstrap";


const Routing = () => {
    return (
        <>
<div className="header">
{/* <img className = "image"
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      /> */}
      {/* <Container>
  <Row>
    <Col>1 of 1</Col>
    <Col>1 of 1</Col>
    <Col>1 of 1</Col>
  </Row>
</Container> */}

<Navbar bg="primary" variant="dark" >
<Container>
<Navbar.Brand href="/home">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          width="45"
          height="35"
          className="align-top d-inline-block"
        />{' '}
      Crud App
      </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/posts">Posts</Nav.Link>
      <Nav.Link href="/aboutuser">About User</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      
    </Nav>
    </Container>
          {/* <Nav variant="tabs" className="topnav">
  
 </Nav> */}
 </Navbar>

      
 
  </div>

        <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/About">
            <About />
        </Route>
       
        <Route path="/home">
            <Redirect to = "/"></Redirect>
        </Route>
        <Route path="/posts">
            <Crud/>
        </Route>
        <Route path="/aboutuser/:Id">
            <AboutUser/>
        </Route>
        <Route path="/aboutuser">
            <AboutUser/>
        </Route>
        <Route path="/aboutme">
            <About/>
        </Route>
        <Route path="*">
            <h1>404 Error</h1>
        </Route>
        </Switch>
        </BrowserRouter>

        <div className="footer"></div>
        </>
    )
}
export default Routing