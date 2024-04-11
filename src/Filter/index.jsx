import React from "react";
import './Filter.css';

function Filter({
    filterValue,
    setFilterValue
}){

    return(
        <div className="content-select">
            <label>Estado: </label>
            <select
            value={filterValue}
            onChange={(event) => {setFilterValue(event.target.value);}} name="state">
                    <option>Pendiente</option>
                    <option>Ejecucion</option>
                    <option>Cerrado</option>
                    <option>Todos</option>
            </select>
            <i></i>
        </div>
    );
}

export { Filter };