import React from 'react'
import logo from '../aseets/logo.svg'
import great from '../aseets/great.jpeg'

const Widgets = () => {
  return (
    <div className='container-widgets'>
        <div className='title'>
            <img src={logo} alt="Logo Prosumia" />
        </div>

        <div className='widgets'>
            <div className='widget-time'>
                <h2>Reloj</h2>
            </div>
            <div className='widget-weather'>
                <h2>Tiempo</h2>
            </div>
            <div className='widget-imagen'>
                <div className='imagen'>
                    <img src={great} alt="Imagen great" />
                </div>
                <div className='contenido'>
                    <h3>Por segundo año</h3>
                    <p>Gracias a todos por hacer de Prosumia un gran lugar.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Widgets