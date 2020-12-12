import React, { useState } from 'react'
import Map from './Components/Map'
import LeftOption from './Components/LeftOption'
import './App.css'

const App = () => {

  const [ area, setArea ] = useState(['', '', ''])

  return (
    <>
      <LeftOption />
      <div className='map'>
        <Map area={area} setArea={setArea} />
      </div>
    </>
  )
}

export default App
