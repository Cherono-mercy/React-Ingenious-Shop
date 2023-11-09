import React, { useContext, useState, useEffect } from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import { ThemeContext } from '../GlobalComponents/ThemeProvider'

function Header() {

const {theme, setThemeMode} = useContext(ThemeContext);
const [darkMode, setDarkMode] = useState(theme);

useEffect(()=> {
  setThemeMode(darkMode);
}, [darkMode]);

  return (
    <Navbar collapseOnSelect expand="md"
      variant={darkMode? "dark" : "light"}
      className={darkMode? "bg-light-black border-bottom" : "bg-light border-bottom"}
      style={{width: "100%", position: "fixed", zIndex: 100}}
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header