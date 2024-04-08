import React from "react";
import './ButtonLogin.css';

function ButtonLogin({ setOpenLogin }){
    return (
        <button 
        className="buttonlogin"
        onClick={
            () => {
                setOpenLogin(true);
            }}
        >Login</button>
    );
}

export { ButtonLogin };