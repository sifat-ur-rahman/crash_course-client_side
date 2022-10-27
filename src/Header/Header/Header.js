import React, { useContext } from 'react';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegMoon, FaSun, FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Header= () => {
  
  const [state, setState] = useState(false);

  const toggle = () =>{
    setState(!state)
  }

  
    const {user ,logOut}=useContext(AuthContext);
  
    const handleLogOut = () =>{
      logOut()
      .then(()=>{})
      .catch(error => console.error(error))
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
            {
                user?.uid ? 
                <>
                <span>{user?.displayName}</span>
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
            <Image style={{height: '30px'}} roundedCircle src={user?.photoURL}></Image>
            :
            <FaUser></FaUser>  
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