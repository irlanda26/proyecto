import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuP from './componentes/MenuP.js';
import Fotocartas from './componentes/Fotocartas.js'; 
import Formulario from './componentes/Formulario.js';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(login);

  const handleLogin = () => {
    if (login === "irlanda" && password === "123") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="head-contenedor">
          PhotoCard's Collector
          <div>
            <MenuP />
          </div>
        </div>
        <div className='cartas-contenedor'>
          <Fotocartas />
        </div>
        {isLoggedIn ? (
          <Formulario />
        ) : (
          <div className='login'> 
          <br />
          <h6 className='espacio'>Editar datos</h6>
            <input className='espacio1'
              id='login'
              type="text"
              name="login"
              placeholder="Usuario"
              onChange={(e) => setLogin(e.target.value)}
            /> <br />
            <input className='espacio1'
              id='contra'
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            /> <br />
            <Button type="submit" className='espacio1' onClick={handleLogin}>
              Ingresar
            </Button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
