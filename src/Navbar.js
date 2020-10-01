import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbars() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/users">Users</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navbars;
