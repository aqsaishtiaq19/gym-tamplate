import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from './gym-image/1.svg'
import fimage2 from './gym-image/2.svg'
import fimage3 from './gym-image/3.svg'
import fimage4 from './gym-image/4.svg'
function Feature() {
  return (
    <div className='features'>
          <h1>FEATURES</h1>
          <div className='a-container'>
            <Featurebox image={fimage1} title="Weightlifting" />
            
            <Featurebox image={fimage2} title="Specific Music" />
            <Featurebox image={fimage3} title="Flex Your Muscel" />
            <Featurebox image={fimage4} title="Cardio workout" />

          </div>


      
    </div>
  )
}

export default Feature
