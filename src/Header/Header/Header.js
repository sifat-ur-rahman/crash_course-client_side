import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegMoon, FaSun } from "react-icons/fa"


const Header= () => {
  
  const [state, setState] = useState(false);

  const toggle = () =>{
    setState(!state)
  }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{width:35}} src="favicon.jpg" alt="" /> Crash Course</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Courses</Nav.Link>
            <button className='bg-light' onClick={toggle}>
              {state ? <FaRegMoon/>: <FaSun/>}
            </button>
           
          </Nav>
          <Nav>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;