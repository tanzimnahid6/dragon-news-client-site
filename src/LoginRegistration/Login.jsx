import React, { useContext } from "react"
import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider"

const Login = () => {
  const {signInUser} = useContext(AuthContext)
  const navigate  = useNavigate()
  const location = useLocation()
  // console.log(location);
  const from = location.state?.from?.pathname || '/category/0'


   //login user with email and password
  const handleLogin=(event)=>{
    event.preventDefault();

    const form = event.target 
    const email = form.email.value 
    const password = form.password.value 
    // console.log(email,password);
 

    signInUser(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user);
      alert(`${user.email} sign in successfully`)

      //after login navigate home page or customs page
      navigate(from,{replace:true})

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


  }
  return (
    <Container>
    <h2>Login Here</h2>
      <Form onSubmit={handleLogin}>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="accept" label="Accept Term And Condition" />
        </Form.Group>
        <Button variant="primary" type="submit">
         Login
        </Button>

        <Form.Text className="text-info">
          Don't have an Account ? <Link to='/register'>Register</Link>
        </Form.Text>


        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Text className="text-success">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form>
    </Container>
  )
}

export default Login
