import React from 'react';
import './Footer.css';
import {
  Container,
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <Navbar color="blue" dark>
        <Container>
          <NavbarBrand>Equipo MINTECH.3</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )

};

export default Footer;
