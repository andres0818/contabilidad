import React from 'react'
import { Outlet } from 'react-router-dom'
import Cabecera from '../../components/Cabecera/Cabecera'
import Footer from '../../components/Footer/Footer'

import './Home.scss'

const Home = () => {
  return (
  <>
    <Cabecera />
    <Outlet />
    <div className='home'>
      <div className='home__container'>
        <div className='home__infoContainer'>
          <h2 className='home__info'>
            Bajo nuestra experiencia y alineados con los cambios digitales, nos tendras como  el
            mejor aliado para optimizar y sistematizar los procesos contables de tu  compañia
          </h2>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default Home