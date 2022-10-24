import logo from './logo.svg';
import './App.css';
import navIcon from '../src/img/pokedex.png';
import trainerImg from '../src/img/trainer.png';
import textGlove from '../src/img/globoTexto.png';
import {cargarTodosPokemons} from '../src/js/api.js'


function App() {
  cargarTodosPokemons()
  return (
    <div className="App">

      <div className='navbar'>
        <ul className="navbar-icon-container">
          <li><img src={navIcon} className="navbar-Icon"></img></li>
          <li className='navbar-icon-text'>PokeInfo</li>
        </ul>
        <ul className="navbar-items-container">
          <li><a href='#'>Servicio</a></li>
          <li><a href='#'>Contacto</a></li>
        </ul>
      </div>
      <div className='body'>
        <div className='body-img'>
          <img src={trainerImg} className='body-img-trainerImg'></img>
          <img src={textGlove} className='body-img-textGlove'></img>
        </div>
        <div className='body-pokesearch'>
          <h2>Bienvenido a PokeInfo</h2>
          <h4>!Busca a tu Pokemon favorito!</h4>
          <input type="text" onKeyUp={cargarTodosPokemons} className='form-control body-pokesearch-bar' id='body-pokesearch-bar'></input>
          <div className='body-pokesearch-content'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
