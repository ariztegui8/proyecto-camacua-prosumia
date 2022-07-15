import React from 'react'

const Slider = () => {
  return (
        <div class="swiffy-slider">
            <ul class="slider-container">
                <li><img src="https://source.unsplash.com/49b9l_29ceA/1600x900" /></li>
                <li><img src="https://source.unsplash.com/nKAglN6HBH8/1600x900" /></li>
                <li><img src="https://source.unsplash.com/E9ZwWcMGzj8/1600x900" /></li>
            </ul>

            <button type="button" class="slider-nav"></button>
            <button type="button" class="slider-nav slider-nav-next"></button>

            <div class="slider-indicators">
                <button class="active"></button>
                <button></button>
                <button></button>
            </div>
        </div>
  )
}

export default Slider