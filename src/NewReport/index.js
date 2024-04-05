import React from "react";

function NewReport (){
    return (
        <div class="login-page">
            <div class="form">
                <form>
                    <label>Tipo de red</label>
                    <select>
                        <option>FO</option>
                        <option>HFC</option>
                    </select>
                    <input placeholder="Ciudad"/>
                    <input placeholder="Dirección"/>
                    <input placeholder="Latitud (4.830169)" />
                    <input placeholder="Latitud (-75.699574)" />
                    <label>Hallazgo </label>
                     <select name="hallazgo">
                        <option>Reserva caida</option>
                        <option>Reserva mas adecuada</option>
                        <option>Empalme caido</option>
                     </select>
                     <input placeholder="NODO" />
                     <input placeholder="Foto del hallazgo"/>
                     <input placeholder="Foto panoramica" />
                     <button>Crear</button>
                </form>
            </div>
        </div>
    );
}

export { NewReport };