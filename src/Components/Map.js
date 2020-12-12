import React, { useState } from 'react'
import ReactSvgZoomMap from 'react-svg-zoom-map'
import { Card } from 'react-bootstrap'

const Map = ({ area, setArea }) => {



  return (
    <>
      <Card id='mapCard'>
        <Card.Body>
          <Card.Title>City:{ area[0] }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Town:{ area[1] }</Card.Subtitle>
          <Card.Text>
            Village:{ area[2] }
          </Card.Text>
        </Card.Body>
      </Card>
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
