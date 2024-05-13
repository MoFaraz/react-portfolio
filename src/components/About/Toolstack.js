import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiNeovim,
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeovim />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
   </Row>
  );
}

export default Toolstack;
