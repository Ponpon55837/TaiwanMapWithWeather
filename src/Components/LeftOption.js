import React from 'react'
import { Card } from 'react-bootstrap'

const LeftOption = ({ area, setArea }) => {

  return (
    <div>
      <Card id='mapCard'>
        <Card.Body>
          <Card.Title>City:{ area[0] }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Town:{ area[1] }</Card.Subtitle>
          <Card.Text className="text-muted">
            Village:{ area[2] }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default LeftOption
