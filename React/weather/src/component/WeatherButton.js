import React from 'react'
import { Button } from 'react-bootstrap';       // 부트 스트랩


const WeatherButton = ({cities, setCity, initCity, setSelectCity ,city , handleCityChange}) => {
  // console.log("cities? " ,cities)
  // console.log("cities? " ,setCity)
  return (
    <div>
      <Button variant="warning" onClick={initCity}  >CurrrentLocation</Button>
      {/* map 필수 */}
      {cities.map((item ,index) => {
        return <Button  key ={index} 
        // variant="warning"
        variant={ `${initCity ? "dark" :"warning" }`}
          onClick={()=> {
            setCity(item)
            console.log(item)
          }}
        >
        {item}
        </Button>
      })}
    </div>
  )
}

export default WeatherButton