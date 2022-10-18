import logo from './logo.svg';
import './App.css';
import navIcon from '../src/img/pokedex.png';

function App() {
  return (
    <div className="App">

      <div className='navbar'>
        <ul className="navbar-icon-container">
          <li><img src={navIcon} className="navbar-Icon"></img></li>
          <li className='navbar-icon-text'>PokeInfo</li>
        </ul>
        <ul className="navbar-items-container">
          <li>Inicio</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className='body'>

      </div>
    </div>
  );
}

export default App;
