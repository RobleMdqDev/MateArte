import React, { useContext, useEffect, useState } from "react";

import LoginForm from "./LoginForm";
import SignForm from "./SignForm";
import "./login.css";
import { Button } from "react-bootstrap";
import ProductContext from "../../contexts/productcontext/ProductContext";
import { getFirestore } from "../../configs/firebase";


export default function Login() {

  //HOOK PARA LOGIN CONTEXT
  const {setUser, user, setViewLogin} = useContext(ProductContext);

  // HOOK PARA FIRESTORE
  const [db, setDb] = useState(getFirestore());

  //HOOK PARA ESTADO DE FORMULARIO
  const [formMood, setFormMood] = useState("/login");

  // HOOK PARA INICIAR SESIÓN

  const [loginForm, setLoginForm] = useState({
    email: "",
    pass: ""
  });

  // HOOK PARA REGISTRO

  const [signForm, setSignForm] = useState({
    name: "",
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

    if (formMood === "/login") {
   
      // Consulto en base de datos
      const userLogin = db.collection("users");
      userLogin.get().then((res) => {
          console.log("loginForm: ",loginForm);
          const aux = res.docs.map((d) => ({ id: d.id, ...d.data() }));
          console.log(aux);
          const userLog = aux.filter((u) => u.email === loginForm.email && u.pass === loginForm.pass);
          console.log("final: ", userLog[0]);
          if (userLog[0] !== undefined) {
            console.log("final: ", userLog[0]);
            setUser({ ...userLog[0] });
            setTimeout(() => {
              setViewLogin();
            }, 1000);
            setLoginAlert(
              <p className='text-success alert alert-success'>LOGIN CORRECTO!</p>
            );
            loginDiv.classList.add("agrandar");
            setTimeout(() => {
              loginDiv.classList.remove("agrandar");
            }, 500);
          } else {
          setLoginAlert(
            <p className='text-danger alert alert-danger'>Datos Incorrectos!</p>
          );
          if (loginDiv) {
            loginDiv.classList.add("vibra");
            setTimeout(() => {
              loginDiv.classList.remove("vibra");
            }, 500);
          }
          document.querySelector("form").reset();
        }
      });
    } else {


      const sign = db.collection("users");
      sign.get().then((res) => {
        console.log("signForm: ",signForm);
        const aux = res.docs.map((d) => ({ id: d.id, ...d.data() }));
        console.log(aux);
        const userLog = aux.filter((u) => u.email === signForm.email);
        console.log("final: ", userLog[0]);
        if (userLog[0] === undefined) {
          console.log("finalSign: ", userLog[0]);
          console.log("Orden de compra: ", signForm);
          sign.add(signForm);
          setLoginAlert(
              <p className='text-success alert alert-success'>SIGN-UP SUCCESS!</p>
          );
          setTimeout(() => {
          setFormMood("/login");
          }, 1000);
          loginDiv.classList.add("agrandar");
          setTimeout(() => {
            loginDiv.classList.remove("agrandar");
          }, 500);
        } else {
        setLoginAlert(
          <p className='text-danger alert alert-danger'>Datos Incorrectos!</p>
        );
        if (loginDiv) {
          loginDiv.classList.add("vibra");
          setTimeout(() => {
            loginDiv.classList.remove("vibra");
          }, 500);
        }
        document.querySelector("form").reset();
      }
    });
      
    }

    
    
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
      <Button variant="info" value='X' className="modalLogin" onClick={(e) => setViewLogin()}>
        X
      </Button>
    </div>
 
      
    
  );
}


