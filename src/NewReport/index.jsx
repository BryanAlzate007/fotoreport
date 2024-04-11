import React from "react";
import { ImExit } from "react-icons/im";
import './NewReport.css';

function NewReport ({ setFormCreate }){
    return (
        <div className="login-page">
            <div className="form">
            <button className="button-back">
            <ImExit 
            className="ImExit"
            onClick={
              () => {
              setFormCreate(false);
              }}
          /></button>
                <form>
                    <label>Tipo de red</label>
                    <select className="select">
                        <option>FO</option>
                        <option>HFC</option>
                    </select>
                    <input placeholder="Ciudad"/>
                    <input placeholder="Dirección"/>
                    <input placeholder="Latitud (4.830169)" />
                    <input placeholder="Latitud (-75.699574)" />
                    <label>Hallazgo </label>
                     <select className="select" name="hallazgo">
                        <option>Reserva caida</option>
                        <option>Reserva mas adecuada</option>
                        <option>Empalme caido</option>
                     </select>
                     <input placeholder="NODO" />
                     <input placeholder="Foto del hallazgo"/>
                     <input placeholder="Foto panoramica" />
                     <button className="button">Crear</button>
                </form>
            </div>
        </div>
    );
}

export { NewReport };