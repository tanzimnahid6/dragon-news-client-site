import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Shared/side-navbar/LeftNav";
import RightNav from "../Shared/side-navbar/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col md={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col md={6}>
            <Outlet></Outlet>
            </Col>
          <Col md={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
