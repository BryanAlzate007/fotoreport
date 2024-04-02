import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

function Mapa({ ubication }){
    return (
        <MapContainer center={[4.814730, -75.694688]} zoom={13} style={{height:'900px', width:'800px'}}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />
            {ubication.map((ubication, index) => (
                <Marker key={index} position={ubication.position}>
                <Popup>
                     {ubication.nombre} <br /> {ubication.direccion}
                     <p>Estado</p>
                </Popup>
            </Marker>
            ))}
        </MapContainer> 
    );

}

export { Mapa }