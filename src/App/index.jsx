import React from 'react';
import './App.css';
import { RenderMap } from '../RenderMap';
import { Filter } from '../Filter';
import { CreateButton } from '../CreateButton';
import { Login } from '../Login';
import { ButtonLogin } from '../ButtonLogin';
import { Modal } from '../Modal';
import { NewReport } from '../NewReport';

import 'leaflet/dist/leaflet.css';



function App() {

  const location = [
    {name: 'Ubication 1', address: 'Direccion 1', position:[4.8300, -75.6992], state: "Cerrado"},
    {name: 'Ubication 2', address: 'Direccion 2', position:[4.8018, -75.7370], state: "Pendiente"},
    {name: 'Ubication 3', address: 'Direccion 3', position:[4.83814, -75.66893], state: "Cerrado"},
    {name: 'Ubication 4', address: 'Direccion 4', position:[4.81359, -75.71028], state: "Pendiente"},
  ];

  const [locations, setLocation] = React.useState(location);
  const [filterValue, setFilterValue] = React.useState('Pendiente');
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openFormCreate, setFormCreate] = React.useState(false);
  const NewLocations = filterValue !== "Todos" ? locations.filter(location => location.state === filterValue) : locations;

  return (
  <>  
    <ButtonLogin 
    setOpenLogin={setOpenLogin}
    />
      {openLogin && (
      <Modal> 
          <Login
          setOpenLogin={setOpenLogin}
          />
      </Modal>
      )}
        
  
    {/* <NewReport/> */}
    <Filter 
   filterValue={filterValue}
   setFilterValue={setFilterValue}
    />
     <CreateButton 
     setFormCreate={setFormCreate}
     />
    {openFormCreate && (
    <Modal>
      <NewReport
      setFormCreate={setFormCreate}
      />
    </Modal>)}
   
    
    <div className="App">
      <RenderMap NewLocations={NewLocations}>
      </RenderMap>
    </div>

  </>
  );
}

export default App;
