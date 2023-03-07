import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Header() {
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    axios.get(`https://paul.blueboxonline.com/api/v1/app/settings`)
      .then(res => {
        setLogo(res.data.logo);
      });
  }, []); 

  return(
    <Navbar className="white-navbar" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="" width="200px" height="50px" />
      </Navbar.Brand>

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