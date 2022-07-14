import React, { useEffect, useState } from 'react'
import logo from '../aseets/logo.svg'
import great from '../aseets/great.jpeg'

const Widgets = () => {

    const [clima, setClima] = useState({});

    const {name, main, weather} = clima;
    

    useEffect(()=>{
        const consultarApi = async()=>{
            const idClima = '3435910'
            const apiKey = 'f4f937429920d972edf0eb874155f903'
            const url = `https://api.openweathermap.org/data/2.5/weather?id=${idClima}&appid=${apiKey}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setClima(resultado);
            console.log(resultado);
          }
          consultarApi()
    }, [])

    const kelvin = 273.15
    if(!name || !main |!weather) return null;
   
   
  return (
    <div className='container-widgets'>
        <div className='title'>
            <img src={logo} alt="Logo Prosumia" />
        </div>

        <div className='widgets'>
            <div className='widget-time'>
                <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=large&timezone=America%2FArgentina%2FBuenos_Aires" width="100%" height="140" frameborder="0" seamless></iframe>
            </div>
            <div className='widget-weather'>
                <h2 className='name'>{name}</h2>
                <div className='temp-icon'>
                    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
                    <p className="temp">{parseInt(main.temp - kelvin)}°</p>
                </div>
                <div className='min-max'>
                    <p className="">Mín: <span className="">{parseInt(main.temp_min - kelvin)}°</span></p>
                    <p className="">Máx: <span className="">{parseInt(main.temp_max - kelvin)}°</span></p>
                </div>
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