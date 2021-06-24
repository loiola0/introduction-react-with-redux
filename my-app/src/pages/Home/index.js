import React,{useEffect,useState} from 'react';
import api from  '../../services/api';
import {MdFlightTakeoff} from 'react-icons/md';
import './style.css';


export default function Home() {
  
  const [trips,setTripes] = useState([]);

  useEffect(()=>{

    async function loadApi(){
    const response = await api.get('trips');
    setTripes(response.data);
    
    console.log(response.data);
    }

    loadApi();

  }
  ,[]);

 return (
    <div>
      <div className="box">
        {trips.map(trip =>{
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title}/>
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>
            
            <button type="button" onClick={()=>{}}>
              <div>
                <MdFlightTakeoff size={16} color="#FFF"/>
              </div>
              <span>SOLICITAR RESERVA</span>
            </button>

          </li>
        })}
      </div>
    </div>
  );
}