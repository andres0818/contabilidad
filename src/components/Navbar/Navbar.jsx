import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import whatsApp from './img/Whatsapp.png'



const Navbar = () => {

  const contenidoNabvar = [
    {
      link: "/quienes-somos",
      nombre: "Quienes somos"
    }, {
      link: "/servicios",
      nombre: "Servicios"
    }
  ]


  return (
    <>
      <div className='Navbar'>
        <nav className='Navbar__container'>
          <ul className='Navbar__ul'>

            {contenidoNabvar.map((e, i) => {

              return (

                <li className='Navbar__li'>
                  <Link className='Navbar__link' to={e.link}>{e.nombre}</Link>
                </li>

              )
            })}

            <li className='Navbar__li contatenos'>
              <p className='contatenos titulo'>Contactenos</p>
              <div className='contactenos__container'>
                <a href='https://web.whatsapp.com/' target='_blank' className='contactenos__whatsApp Navbar__link'>
                  <img className='contactenos__whatsAppLogo' src={whatsApp} alt="" />
                  <p>WhatsApp</p>
                </a>
                <h1 className='contactenos__correo'>correo@electrionico</h1>
              </div>
            </li>

          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar