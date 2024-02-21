import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

import React from "react";

export default function DashboardPage() {


  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-4">Dashboard</h1>
            {/* Your dashboard content goes here */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
