import React from 'react'

const Iframe = () => {

    // https://trends.google.com/trends/hottrends/visualize?pn=p30&nrow=5&ncol=4 // Iframe de la web actual

  return (
    
      <div className='container-iframe'>
        <iframe src="https://trends.google.com/trends/hottrends/visualize?nrow=4&ncol=5" frameborder="0"></iframe>
      </div>
  )
}

export default Iframe