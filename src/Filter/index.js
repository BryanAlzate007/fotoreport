import React from "react";
import './Filter.css';

function Filter(){
    return(
        <div className="content-select">
            <label>Estado: </label>
            <select name="state">
                    <option>Pendiente</option>
                    <option>Ejecucion</option>
                    <option>Cerrado</option>
            </select>
            <i></i>
        </div>
    );
}

export { Filter };