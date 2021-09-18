import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
<Navbar bg="light" expand="lg">
  <div>
  <Navbar.Brand href="/">Lynsey Vandenberg</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/resume">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </Navbar.Collapse>
  </div>
</Navbar>
    )
}

export default NavBar
