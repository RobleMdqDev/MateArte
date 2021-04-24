import React, { useContext } from "react";

import CartWidget from "../cartwidget/CartWidget";

// Estilos CSS
import "./navbar.css";
import FontAwesome from "react-fontawesome";

// Bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/img/logomatearte.svg";
import { NavLink } from "react-router-dom";
import ProductContext from "../../contexts/productcontext/ProductContext";
import Login from "../login/Login";


export default function NavBar() {

  const {setViewLogin, user} = useContext(ProductContext);

  return (
    <>
      <Navbar
        collapseOnSelect
        sticky='top'
        className='navbar'
        expand='lg'
        bg='dark'
        variant='dark'>
        <NavLink to={`/`}>
          <Navbar.Brand>
            <img src={logo} alt='logo matearte' />
          </Navbar.Brand>
        </NavLink>
        <NavLink to={`/cart`} className='cart'>
          <CartWidget icon='opencart' />
        </NavLink>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='nav-link'>
            <NavLink to={`/nosotros`} activeClassName='currentCategory'>
              Nosotros
            </NavLink>

            <NavLink to={`/ofertas/${true}`} activeClassName='currentCategory'>
              Ofertas
            </NavLink>

            <NavDropdown title='Productos' id='collasible-nav-dropdown show'>
              <NavLink
                exact
                to={`/category/${1}`}
                activeClassName='currentCategory'
                className='text-dark'>
                Mates
              </NavLink>

              <NavLink
                exact
                to={`/category/${2}`}
                activeClassName='currentCategory'
                className='text-dark'>
                Bombillas
              </NavLink>

              <NavLink
                exact
                to={`/category/${3}`}
                activeClassName='currentCategory'
                className='text-dark'>
                Termos
              </NavLink>
              
              <NavDropdown.Divider />

              <NavLink
                exact
                to={`/category/${4}`}
                activeClassName='currentCategory'
                className='text-dark'>
                Equipos Completos
              </NavLink>
            </NavDropdown>
            <NavLink to={'#'}                           
                
                className=''
                onClick={()=>{setViewLogin(<Login />)}}
                >              
                <FontAwesome name="user" className='user mr-2' />
                {user.name}
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
