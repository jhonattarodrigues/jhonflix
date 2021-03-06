import React from 'react';
import Logo from '../../assets/img/trailerflixlogo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLinks';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="TrailerFlix Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;