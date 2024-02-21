import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

import Link from "next/link";

export default function DashboardHeader() {


  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link href="/dashboard" passHref>
            <Navbar.Brand>Dashboard</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center ms-auto">
              <Nav.Item>
                <Link href="/about" className="nav-link">
                About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/contact" className="nav-link">
                 contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
    </>
  );
}
