import React, { useContext } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"

const NavigationBar = () => {
  const { user,logOut} = useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
    .then(() => {
      // Sign-out successful.
      alert('user logout successfully')
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });

  }
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto d-flex ">
                <Link to="/category/0">Home</Link>
                <Link className="mx-4" to="">About</Link>
                <Link to="">Profile</Link>
              </Nav>
              {
                user?<NavLink  onClick={handleLogOut} className='btn btn-secondary'>Logout</NavLink>:<NavLink to='/login'  className='btn btn-secondary'>Login</NavLink>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  )
}

export default NavigationBar
