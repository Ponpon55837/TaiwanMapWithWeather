import React, { useState } from 'react'
import Map from './Components/Map'
import LeftOption from './Components/LeftOption'
import './App.css'

const App = () => {

  const [ area, setArea ] = useState(['', '', ''])

  return (
    <div id='container'>
      <LeftOption area={area} setArea={setArea} />
      <div className='map'>
        <Map area={area} setArea={setArea} />
      </div>
    </div>
  )
}

export default App
