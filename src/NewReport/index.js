import React from "react";

function NewReport (){
    return (
        <div>
            <div>
                <form>
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
                </form>
            </div>
        </div>
    );
}

export { NewReport };