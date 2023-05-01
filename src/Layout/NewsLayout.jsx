import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";

import RightNav from "../Shared/side-navbar/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div className="text-center">
      <Header></Header>
      
      <Container>
        <Row>
          <Col md={9}>
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

export default NewsLayout;
