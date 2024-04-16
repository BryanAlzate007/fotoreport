import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'; 
import { ChangeStatus } from '../ChangeStatus';
import iconUrl from '../icon.png';



function RenderMap({ NewLocations }){
    const icon = new L.Icon({
        iconUrl: iconUrl,
        iconSize: [40, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
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
                     <ChangeStatus />
                </Popup>
            </Marker>
            ))}
        </MapContainer> 
    );

}

export { RenderMap };