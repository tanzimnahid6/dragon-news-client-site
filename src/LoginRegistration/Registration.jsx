import React, { useContext, useState } from "react"
import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Link, Navigate } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider"

const Registration = () => {
  const { createUser } = useContext(AuthContext)
  const [accepted,setAccepted] = useState(false)

  const handleRegister=(event)=>{
    event.preventDefault();
    const form = event.target
    const name = form.name.value
    const email = form.email.value 
    const password = form.password.value
    // console.log(name,email,password);

    //create user with email and password
    createUser(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });

  }



  return (
    <div>
      <Container>
        <h2>Please Register!</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name Here" />
          </Form.Group>

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
            <Form.Check
              type="checkbox"
              name="accept"
              label={<>Accept <Link to='/terms'> Terms And Condition</Link> </>}
              onClick={()=>setAccepted(!accepted)}
            

            />
          </Form.Group>
          <Button   disabled={!accepted} variant="primary" type="submit">
            Register
          </Button>

          <Form.Text className="text-info">
            Already Have An Account ,go to <Link to="/login">Login</Link>
          </Form.Text>

          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Text className="text-success">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form>
      </Container>
    </div>
  )
}

export default Registration
