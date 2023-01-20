import React from 'react'
import whatsApp from '../Navbar/img/Whatsapp.png'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <h3 className='footer__titulo'>Contatenos</h3>
            <div>
                <a href='https://web.whatsapp.com/' target='_blank'  className='contactenos__whatsApp Navbar__link'>
                    <img className='contactenos__whatsAppLogo' src={whatsApp} alt="" />
                    <p>WhatsApp</p>
                </a>
                <h1 className='footer__correo'>correo@electrionico</h1>
            </div>
        </div>
    )
}

export default Footer