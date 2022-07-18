import React, { useEffect, useState } from 'react'
import logo from '../aseets/logo.svg'
import great from '../aseets/great.jpeg'
import Carousel from 'react-bootstrap/Carousel';
import { client } from '../client';

const Widgets = () => {

    const [clima, setClima] = useState({});
    const [slider, setSlider] = useState([])

    const {name, main, weather} = clima;

    const getSlider = async ()=>{
        try {
            const response = await client.getEntries({
                content_type: 'slider'
            })
            const {items} = response
            console.log(items);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getSlider()
    }, [])
    

    useEffect(()=>{
        const consultarApi = async()=>{
            const idClima = '3435910'
            const apiKey = 'f4f937429920d972edf0eb874155f903'
            const url = `https://api.openweathermap.org/data/2.5/weather?id=${idClima}&appid=${apiKey}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setClima(resultado);
            
          }
          consultarApi()
    }, [])

    const kelvin = 273.15
    if(!name || !main |!weather) return null;

   
  return (
        <Carousel fade>
            <Carousel.Item>
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
            </Carousel.Item>

            <Carousel.Item>
                <div className='container-widgets slider2'>
                        <div className='title'>
                            <img src={logo} alt="Logo Prosumia" />
                        </div>

                        <div className='widgets'>
                            <div className='widget-time'>
                                <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=large&timezone=America%2FArgentina%2FBuenos_Aires" width="100%" height="140" frameborder="0" seamless></iframe>
                            </div>

                            <div className='widget-weather'>
                                <h2 className='name'>La Plata</h2>
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
                                    <img src="data:image/png;base64,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" alt="Imagen great" />
                                </div>
                                <div className='contenido'>
                                    <h3>Prosumia</h3>
                                    <p>Lorem ipsun devo jubu jant yomalp</p>
                                </div>
                            </div>
                        </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='container-widgets slider3'>
                        <div className='title'>
                            <img src={logo} alt="Logo Prosumia" />
                        </div>

                        <div className='widgets'>
                            <div className='widget-time'>
                                <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=large&timezone=America%2FArgentina%2FBuenos_Aires" width="100%" height="140" frameborder="0" seamless></iframe>
                            </div>

                            <div className='widget-weather'>
                                <h2 className='name'>Tandil</h2>
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
                                    <img src="https://images6.alphacoders.com/971/thumb-1920-971937.jpg" alt="Imagen great" />
                                </div>
                                <div className='contenido'>
                                    <h3>River Plate</h3>
                                    <p>Gracias por tanto.</p>
                                </div>
                            </div>
                        </div>
                </div>
            </Carousel.Item>
        </Carousel>
  
  )
}

export default Widgets