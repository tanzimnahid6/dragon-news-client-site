import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import GZone from "../GZone";

const RightNav = () => {
  return (
    <div>
      <h4 className="text-left" >Login with</h4>
      <Button className="mb-2" variant="outline-primary">
        <span>
          <FaGoogle></FaGoogle>
        </span>
        Log In With Google
      </Button>
      <Button variant="outline-secondary">
        <span>
          <FaGithub></FaGithub>
        </span>
        Log In With Github
      </Button>

      <div className="mt-4">
        <h4 className="text-left">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>Facbook</ListGroup.Item>
          <ListGroup.Item>Twitter</ListGroup.Item>
          <ListGroup.Item>Instagram</ListGroup.Item>
          <ListGroup.Item>Linkdin</ListGroup.Item>
        </ListGroup>
      </div>
      <GZone></GZone>
    </div>
  );
};

export default RightNav;
