import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';




const Login = () => {
    const [error, setError]= useState('')

    const {signIn, providerLogin,providerLoginGithub} = useContext(AuthContext)

    const navigate = useNavigate()

    const  location = useLocation()

    const googleProvider = new GoogleAuthProvider()

    const githubProvider = new GithubAuthProvider()

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password );

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
            setError('')
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }
    
    

const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error))
}

const handleGithubSignIn = () =>{
    providerLoginGithub(githubProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error))
}


    return (
        <Form style={{marginTop: 90}} onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button> <br></br>
        <Button onClick={handleGoogleSignIn} className='mb-2 mt-2' variant="outline-primary"> <FaGoogle></FaGoogle>  Login with Google</Button><br />
      <Button onClick={handleGithubSignIn} variant="outline-dark"> <FaGithub></FaGithub>  Login with GitHub</Button><br></br>
        <Form.Text className="text-warning">
            {error}
          </Form.Text>
      </Form>
    );
};

export default Login;