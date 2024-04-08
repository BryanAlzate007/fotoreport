import React from "react";
import './Login.css';
import { ImExit } from "react-icons/im";


function Login ({ setOpenLogin }){
    return (
        <div className="form">
          <button className="button-back">
            <ImExit 
            className="ImExit"
            onClick={
              () => {
                  setOpenLogin(false);
              }}
          /></button>
          <form className="register-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button className="button">login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
    );
}


export { Login };