import React from 'react'
import { Button } from 'react-bootstrap';       // 부트 스트랩


const WeatherButton = ({cities, setCity}) => {
  console.log("cities? " ,cities)
  return (
    <div>
      <Button variant="warning"  >CurrrentLocation</Button>
      {/* map 필수 */}
      {cities.map((item ,index) => {
        return <Button variant="warning" key ={index} // 몇번째 인덱스인지?
          onClick={()=> {
            setCity(item)
          }}
        >
        {item}
        </Button>
      })}
    </div>
  )
}

export default WeatherButton