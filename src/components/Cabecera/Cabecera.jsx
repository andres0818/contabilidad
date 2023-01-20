import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import logo from './img/balance.png'
import './Cabecera.scss'




const Cabecera = () => {
    return (
        <>
            <div className='cabecera'>
                <div className='cabecera__container'>
                    <Link className='cabecera__nombreLogo' to="/">
                        <img className='cabecera__logo' src={logo} alt="" />
                        <h3 className='cabecera__nombre' >Nombre Empresa</h3>
                    </Link>
                </div>
                <Navbar />
            </div>
            
        </>
    )
}

export default Cabecera