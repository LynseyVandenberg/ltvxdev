// import "./style.css";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';


const NavBar = () => {

    return (
<Navbar bg="light" expand="lg">
  <Container>
  <Navbar.Brand href="/">Lynsey Vandenberg</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">Bio</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar
