import './App.css';
import { Mapa } from './Mapa';
import { Filter } from './Filter';
import { CreateButton } from './CreateButton';
import { Login } from './Login';
import { ButtonLogin } from './ButtonLogin';


function App() {
  const ubication = [
    {nombre: 'Ubicatio 1', direccion: 'Direccion 1', position:[4.8300, -75.6992]},
    {nombre: 'Ubicatio 2', direccion: 'Direccion 2', position:[4.8018, -75.7370]},
    {nombre: 'Ubicatio 3', direccion: 'Direccion 3', position:[4.83814, -75.66893]},
    {nombre: 'Ubicatio 4', direccion: 'Direccion 4', position:[4.81359, -75.71028]},
  ];
  
  return (
  <>  
    <ButtonLogin />
  
        {/* <Modal> */}
          <Login />
        {/* </Modal> */}
  

    <Filter />
    <CreateButton />
    
    <div className="App">
      <Mapa ubication={ubication} />
    </div>

  </>
  );
}

export default App;
