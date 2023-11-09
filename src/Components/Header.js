import React, { useContext, useState, useEffect } from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import { ThemeContext } from '../GlobalComponents/ThemeProvider'
import {BiSun, BiMoon, BiCart} from 'react-icons/bi'

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
        <Navbar.Brand className={darkMode? "text-dark-primary" : "text-light-primary"}>
            <b>Ingenios Shop</b>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
            className={darkMode? "text-dark-primary" : "text-light-primary"}
            onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode? <BiSun size="1.7rem"/> : <BiMoon size="1.7rem"/>}
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header