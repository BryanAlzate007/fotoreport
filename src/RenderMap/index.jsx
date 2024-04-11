import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'; 
import { CambiarEstado } from '../CambiarEstado';


function RenderMap({ NewLocations }){
    const icon = new L.Icon({
        iconUrl: process.env.PUBLIC_URL + '/src/icon.jpeg',
        iconSize: [25, 41], // Tamaño del icono
        iconAnchor: [12, 41], // Punto del icono que estará en la posición del marcador
        popupAnchor: [1, -34] // Punto del popup que estará en la posición del marcador
      });
      
    return (
        <MapContainer center={[4.814730, -75.694688]} zoom={13} style={{height:'900px', width:'100%', zIndex:0}}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />
            {NewLocations.map((NewLocations, index) => (
                <Marker key={index} position={NewLocations.position} icon={icon}>
                <Popup>
                     {NewLocations.name} <br /> {NewLocations.address}
                     <p>Estado: {NewLocations.state}</p>
                     <CambiarEstado />
                </Popup>
            </Marker>
            ))}
        </MapContainer> 
    );

}

export { RenderMap };