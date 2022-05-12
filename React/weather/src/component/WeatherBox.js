import React from 'react'

const WeatherBox = ({weather}) => {
  // 그안에 weather 블러우기리스트럭쳐링
  // console.log("weahter? " , weather)
  return (
    <div className="weather-box">
        {/* 초기값 -> null 값 */}
        <div>{weather?.name}</div>
        {/* 화씨 섭씨*1.8 + 32 */}
        <h2>{weather?.main.temp}C/ 230화씨화씨</h2>
        {/* 객채가 다름으로 [0] 번째 값을 가져오기 위해서 */}
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox