import './App.css';
import { Mapa } from './Mapa';
import { Filter } from './Filter';
import { CreateButton } from './CreateButton';
import { Login } from './Login';
import { ButtonLogin } from './ButtonLogin';
import { NewReport } from './NewReport';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// Importa la biblioteca Leaflet
import 'leaflet/dist/leaflet.css';


function App() {
  const ubication = [
    {nombre: 'Ubicatio 1', direccion: 'Direccion 1', position:[4.8300, -75.6992], estado: "Cerrado"},
    {nombre: 'Ubicatio 2', direccion: 'Direccion 2', position:[4.8018, -75.7370], estado: "Pendiente"},
    {nombre: 'Ubicatio 3', direccion: 'Direccion 3', position:[4.83814, -75.66893], estado: "Cerrado"},
    {nombre: 'Ubicatio 4', direccion: 'Direccion 4', position:[4.81359, -75.71028], estado: "Pendiente"},
  ];

  return (
  <>  
    <ButtonLogin />
      
        {/* <Modal> */}
          {/* <Login /> */}
        {/* </Modal> */}
  
    {/* <NewReport/> */}
    <Filter />
    {/* <CreateButton /> */}
    
    <div className="App">
      <Mapa ubication={ubication} />
    </div>

  </>
  );
}

export default App;
