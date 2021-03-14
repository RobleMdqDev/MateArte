import React from 'react'

import CartWidget from '../cartwidget/CartWidget';

// Estilos CSS
import './navbar.css'

// Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logomatearte.svg';


export default function NavBar(){
    
    return(
        <>
    <Navbar collapseOnSelect sticky="top" className="navbar" expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img src={logo} alt="logo matearte"/> <a href="#/" className="cart-icon"><CartWidget icon="opencart"/></a></Navbar.Brand>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>    
    <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav className="nav-link">
        
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Ofertas</Nav.Link>
            
            <NavDropdown  title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mates</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Bombillas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Termos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Equipos Completos</NavDropdown.Item>
            </NavDropdown>
                       
        </Nav>
        
    </Navbar.Collapse>
    
    </Navbar>
</>
        
    )
}