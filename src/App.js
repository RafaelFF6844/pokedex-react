import logo from './logo.svg';
import './App.css';
import navIcon from '../src/img/pokedex.png';
import trainerImg from '../src/img/trainer.png';
import textGlove from '../src/img/globoTexto.png';


function App() {
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
        <div>
          <img src={trainerImg} className='body-trainerImg'></img>
          <img src={textGlove} className='body-textGlove'></img>
        </div>
        <div className='body-pokesearch'>
          <input type="text" className='body-pokesearch-bar' id='body-pokesearch-bar'></input>
        </div>
      </div>
    </div>
  );
}

export default App;
