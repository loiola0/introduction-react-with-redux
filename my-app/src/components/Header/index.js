import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Logo from '../../assets/logo.svg';
import './style.css';

export default function Header() {
  const reserveSize = useSelector(state => state.reserve);


 return (
   <header className="container">
     <Link to="/">
      <img src={Logo} className="logo" alt="logo"/>
     </Link>

     <Link to="/reservas" className="reserva">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize.length} reservas</span>
        </div>
     </Link>
       
   </header>
 );
}