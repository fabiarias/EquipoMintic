import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import './Header.css';
import Navigation from '../Navigation';

const Header = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  //const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    auth.signOut().then(function () {
      // Sign-out successful.
      console.log("loggedout");
    }).catch((error) => {
      // An error happened.
      //const errorCode = error.code;
      //const errorMessage = error.message;
    });
  };

  if (!user) {
    return (
      <div>
        <Navbar color="blue" light expand="md">
          <NavbarBrand href="/">SISTEMA DE VENTAS MINTECH.3</NavbarBrand>
          {!loading && <Navbar color="blue" light expand="md">
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="nnavbar-nav ml-auto" navbar>
                <NavItem>
                  <NavLink href="/Login">Iniciar Sesion</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/register">Registrarse</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>}
        </Navbar>


      </div>
    );
  } else {
    return (
      <div>
        <Navigation />
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavbarText>{user.email} {user.displayName ? user.displayName : ' '} </NavbarText>{" "}
            <Button color="warning" onClick={logout}>Logout</Button>
          </NavItem>
        </Nav>
      </div>
    );
  }
};

export default Header;
