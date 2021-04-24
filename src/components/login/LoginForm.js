import React from 'react'
import "./login.css";
import logo from '../../assets/img/logomatearte.svg'

export default function LoginForm ({form, login, mood, loginAlert}){
    
      
    const handleLogin =(e)=>{
        e.preventDefault();
        login(e);
    };


    return (
      <div className='formulario login-dark'>
        
        <form
          id='login'
          onChange={form}
          onSubmit={(e) => {
            handleLogin(e);
          }}>
          <img src={logo} alt='logo matearte' style={{width: "100%"}} />
          <hr className="bg-light"/>
          <div className='form-group'>
            <input
              className='form-control'
              type='email'
              name='email'
              placeholder='E-mail'
            />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              name='pass'
              placeholder='Password'
            />
          </div>

          <div className='form-group'>
            <button className='btn btn-primary btn-block' type='submit'>
              Log In
            </button>
          </div>
          <div>{loginAlert}</div>
          <a
          className="mb-3"
          href='#/'
          onClick={() => {
            mood("/signin");
          }}>
          Sign Up!
        </a>
        
        </form>        
      </div>
    );
}

