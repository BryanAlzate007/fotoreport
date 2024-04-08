import React from "react";
import './CreateButton.css'

function CreateButton ({ setFormCreate }){
    return(
        <button 
        className="create-button"
        onClick={() => {setFormCreate(true);}}
        >Crear</button>
    );
}

export { CreateButton };