import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return(
    <Navbar className="white-navbar" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Report</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}