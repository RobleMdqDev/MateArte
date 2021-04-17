import React, { useContext, useEffect, useState } from "react";

import LoginForm from "./LoginForm";
import SignForm from "./SignForm";
import "./login.css";
import { Button } from "react-bootstrap";
import ProductContext from "../../contexts/productcontext/ProductContext";


export default function Login({handleModal}) {

  //HOOK PARA LOGIN CONTEXT
  const {setUser, user} = useContext(ProductContext);

  //HOOK PARA ESTADO DE FORMULARIO
  const [formMood, setFormMood] = useState("/login");

  // HOOK PARA INICIAR SESIÓN

  const [loginForm, setLoginForm] = useState({
    user: "",
    pass: ""
  });

  // HOOK PARA REGISTRO

  const [signForm, setSignForm] = useState({
    user: "",
    email: "",
    pass: "",
    phone: ""
  });

  // HOOK PARA MENSAJE DE ALERTA

  const [loginAlert, setLoginAlert] = useState();

  // CAPTURAMOS CAMBIOS EN MOOD

  const handleMood = (e) => {
    setFormMood(e);
    setLoginAlert();
  };

  // CAPTURAR CAMBIOS DEL FORMULARIO

  const handleForm = (e) => {
    if (formMood === "/login") {
      setLoginForm({
        ...loginForm,
        [e.target.name]: e.target.value,
      });
    } else {
      setSignForm({
        ...signForm,
        [e.target.name]: e.target.value,
      });
      console.log(signForm);
    }
  };

  
  const loginDiv = document.querySelector(".formulario");

  let query = {};

  if (formMood === "/login") {
    query = loginForm;
  } else {
    query = signForm;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    handleModal();
  //   console.log({ query: query });

  //   const respuesta = await loginAPI(query, formMood);
  //   if (respuesta.status !== 200) {
  //     setLoginAlert(
  //       <p className='text-danger alert alert-danger'>{respuesta.message}</p>
  //     );
  //     if (loginDiv) {
  //       loginDiv.classList.add("vibra");
  //       setTimeout(() => {
  //         loginDiv.classList.remove("vibra");
  //       }, 500);
  //     }

  //     document.querySelector("form").reset();
  //   } else {
      if (formMood === "/login") {
          setUser({...loginForm, phone: "472-4818"});
          console.log(user);
  //       setLoginAlert(
  //         <p className='text-success alert alert-success'>LOGIN SUCCESS!</p>
  //       );
  //       localStorage.setItem("ACCESS_TOKEN", respuesta.token.token);
  //       localStorage.setItem("USER", respuesta.user);
  //       localStorage.setItem("USER_ID", respuesta.token.user_id[0].id);
  //       console.log(respuesta);

  //       setTimeout(() => {
  //         window.location.href = "/";
  //       }, 1000);
      } else {
  //       setLoginAlert(
  //         <p className='text-success alert alert-success'>SIGN-UP SUCCESS!</p>
  //       );
  //       setTimeout(() => {
  //         window.location.href = "/";
  //       }, 1000);
      }

  //     loginDiv.classList.add("agrandar");
  //     setTimeout(() => {
  //       loginDiv.classList.remove("agrandar");
  //     }, 500);
  //   }
  };

  // HOOK que contiene el formulario
  const [form, setForm] = useState();

  useEffect(() => {
    if (formMood === "/login") {
      setForm(
        <LoginForm
          form={handleForm}
          login={handleLogin}
          mood={handleMood}
          loginAlert={loginAlert}
        />
      );
    } else {
      setForm(
        <SignForm
          form={handleForm}
          login={handleLogin}
          mood={handleMood}
          loginAlert={loginAlert}
        />
      );
    }
  }, [formMood, query, loginAlert]);

  

  return (
       
    <div className='login'>
      
      {form}
      <Button variant="info" value='X' className="modalLogin" onClick={(e) => handleModal(e)}>
        X
      </Button>
    </div>
 
      
    
  );
}


