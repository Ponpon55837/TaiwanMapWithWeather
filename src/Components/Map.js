import React, { useState } from 'react'
import ReactSvgZoomMap from 'react-svg-zoom-map'

const Map = ({ area, setArea }) => {



  return (
    <>
      <ReactSvgZoomMap
        countyJsonSrc="https://cybermumu.github.io/react-svg-zoom-map/example/topojsons/taiwan-county.json"
        townJsonSrc="https://cybermumu.github.io/react-svg-zoom-map/example/topojsons/taiwan-town.json"
        villageJsonSrc="https://cybermumu.github.io/react-svg-zoom-map/example/topojsons/taiwan-village.json"
        county={ area[0] }
        town={ area[1] }
        village={ area[2] }
        onAreaClick={ (newArea, e) => setArea(newArea) }
        onPinClick={ console.log }
        title={area[0]}
      />
    </>
  )
}

export default Map
