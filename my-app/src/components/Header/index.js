import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './style.css';

export default function Header() {
 return (
   <header className="container">
     <Link to="/">
      <img src={Logo} className="logo" alt="logo"/>
     </Link>

     <Link to="/reservas" className="reserva">
        <div>
          <strong>Minhas reservas</strong>
          <span>0 reservas</span>
        </div>
     </Link>
       
   </header>
 );
}