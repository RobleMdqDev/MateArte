import React, { useContext, useEffect, useState } from "react";

// Componentes
import CartWidget from "../cartwidget/CartWidget";
import logo from "../../assets/img/logomatearte.svg";

// FireBase
import { getFirestore } from "../../configs/firebase";

// Estilos CSS
import "./navbar.css";
import FontAwesome from "react-fontawesome";

// Bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import ProductContext from "../../contexts/productcontext/ProductContext";
import Login from "../login/Login";
import Loader from "../loader/Loader";

export default function NavBar() {
  const { setViewLogin, user } = useContext(ProductContext);
  const [categories, setCategories] = useState("");
  const [db] = useState(getFirestore());

  useEffect(() => {
    function getAll() {
      const category = db.collection("categories");

      category.get().then((res) => {
        if (res.size > 0) {
          const aux = res.docs.map((d) => ({ id: d.id, ...d.data() }));
          setCategories(aux);
        }
      });
    }
    getAll();
  }, [db]);
  console.log(categories);
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        className="navbar"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <NavLink to={`/`}>
          <Navbar.Brand>
            <img src={logo} alt="logo matearte" />
          </Navbar.Brand>
        </NavLink>
        <NavLink to={`/cart`} className="cart">
          <CartWidget icon="opencart" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-link">
            <NavLink to={`/nosotros`} activeClassName="currentCategory">
              Nosotros
            </NavLink>

            <NavLink to={`/ofertas/${true}`} activeClassName="currentCategory">
              Ofertas
            </NavLink>

            <NavDropdown
              title="Productos"
              id="collasible-nav-dropdown show"
              className=""
            >

              {
              categories ? (
                categories.map((category, index) => (
                  <NavDropdown.Item  key={index}>
                    <NavLink 
                      key={category.name}                    
                      exact
                      to={`/category/${category.id}`}
                      activeClassName="currentCategory"
                      className="text-dark"
                    >
                      {category.name}
                    </NavLink>
                  </NavDropdown.Item>
                ))
              ) : (
                <Loader />
              )
              }

            </NavDropdown>
            <NavLink
              to={"#"}
              className=""
              onClick={() => {
                setViewLogin(<Login />);
              }}
            >
              <FontAwesome name="user" className="user mr-2" />
              {user.name}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
