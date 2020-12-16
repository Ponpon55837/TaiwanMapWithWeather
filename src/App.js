import React, { useState, useEffect } from 'react'
import Map from './Components/Map'
import LeftOption from './Components/LeftOption'
import './App.css'

const App = () => {

  const initWeather = {
    locationName: '',
  }

  const [area, setArea] = useState(['', '', ''])
  const [cityValue, setCityValue] = useState(0)
  const [weatherValue, setWeatherValue] = useState(initWeather)

  useEffect(() => {
    const weatherFunc = async () => {
      await fetch(`https://opendata.cwb.gov.tw/api//v1/rest/datastore/F-C0032-001?Authorization=${process.env.REACT_APP_WEATHER_AUTH}`)
      .then(response => response.json())
      .then(weatherData => {
        const data = weatherData.records.location[cityValue]
        const dataElements = data.weatherElement.reduce(
        (neededElements, item) => {
          if (['Wx', 'PoP', 'MinT', 'CI', 'MaxT'].includes(item.elementName)) {
            neededElements[item.elementName] = item.elementValue;
          }
          return neededElements;
        },{})
        console.log('dataElements', dataElements)
        setWeatherValue({
          ...weatherValue,
          locationName: data.locationName
        })
      })
    }
    weatherFunc()
  }, [cityValue])

  console.log('weatherValue', weatherValue)

  return (
    <div id='container'>
      <LeftOption area={area} setArea={setArea} />
      <div className='map'>
        <Map area={area} setArea={setArea} cityValue={cityValue} setCityValue={setCityValue} />
      </div>
    </div>
  )
}

export default App
