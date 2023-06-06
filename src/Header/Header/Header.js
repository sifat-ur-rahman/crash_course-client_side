import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Header.css'


const Header= () => {
  
  

  
    const {user ,logOut}=useContext(AuthContext);
  
    const handleLogOut = () =>{
      logOut()
      .then(()=>{})
      .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar fixed="top" className="fixed-top" collapseOnSelect expand="lg" bg="black" variant="black">
      <Container className='nav-link fs-4 fw-bold'>
        <Link className='sideName' to='/'>
          <img style={{width:135}} src="https://i.ibb.co/xfBqsKN/Screenshot-41.png" alt="" /> </Link>
        <Navbar.Toggle className='bg-secondary' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/courses">Courses</Link>
            
           
          </Nav>
          <Nav>
            <Link to="/blog">Blog</Link>
            <Nav.Link eventKey={2} href="#memes">
            {
                user?.uid ? 
                <>
                
                <button onClick={handleLogOut} className='btn btn-outline-danger ms-2'>Log Out</button>
                </>
                
                :
                <>
                <Link className='btn btn-primary me-2' to='/login'>Login</Link>
                <Link className='btn btn-primary me-2' to='/register'>Register</Link>
                

                </>
              }
            </Nav.Link>
            <Nav.Link href="">
            {user?.photoURL ?
            <Image style={{height: '30px'}} title={user?.displayName} roundedCircle src={user?.photoURL}></Image>
            :
            <FaUser title='No User'></FaUser>  
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;