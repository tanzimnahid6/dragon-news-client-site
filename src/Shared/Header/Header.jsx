import React from "react"
import logo from "../../assets/logo.png"
import moment from "moment"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"
import Marquee from "react-fast-marquee"

const Header = () => {
  return (
    <Container className="text-center">
      <img className="mt-4" src={logo} alt="" />
      <h5 className="my-2">Journalism Without Fear or Favour</h5>
      <span>{moment().format("dddd,MMMM D, YYYY")}</span>

      <div className="d-flex ">
        <Button variant="info">Latest</Button>
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text....... I can be a React component, multiple React components, or
          just some text.......
        </Marquee>
      </div>
    </Container>
  )
}

export default Header
