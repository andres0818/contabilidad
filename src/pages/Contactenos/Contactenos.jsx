import React from 'react'
import whatsApp from './img/Whatsapp.png'
import './Contactenos.scss'
import { Link } from 'react-router-dom'

const Contactenos = () => {
  return (
    <div className='contactenos'>
        <Link to className='contactenos__'>
          <img src={whatsApp} alt="" />
          <p>WhatsApp</p>
        </Link>
        <h1>correo electrionico</h1>
    </div>
  )
}

export default Contactenos