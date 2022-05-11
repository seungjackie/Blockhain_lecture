import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';          //bootstrap 가져온것
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox'
import WeatherButton from './component/WeatherButton'
import ClipLoader from "react-spinners/ClipLoader";



// 1. 앱이 실행하자마자 날씨 앱이 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼이 있다 (1개는 현재위치, 4 개는 다른 도시)
// 4. 도시버튼 누를때마다 도시별 날씨가 나온다.
// 5. 현재 위치 버튼을 누르면 다시 현재위치의 기반에 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
function App() {

  const [weather,setWeather] = useState(null)
  const [city,setCity] = useState("")
  
  // map으로 추가 하기 위해서 배열로 수정이 편하게 할수있게
  const cities = ['paris', 'new york' ,'tokyo' , 'seoul'];


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude ;
      let lon = position.coords.longitude;
      getWeatherCurrentLocation(lat,lon);
    })
  }

  const getWeatherCurrentLocation = async(late,lonk) => {  //캐치 lat, lon
    // 마지막에 temp 추가 key & &units=metric  
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${late}&lon=${lonk}&appid=c7162075f994857a03b87cd0eb9ff2de&units=metric`
    // 기달려 주세요 ,async
    let response = await fetch(url)         //url 값이 있을때 까지 기달린다. fet
    let data = await response.json()
    console.log(data)
    setWeather(data)
  }

  const getWeatherTokyo = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=c7162075f994857a03b87cd0eb9ff2de&units=metric`

    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
  }

  const getWeatherSpain = async (lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=sp&appid=c7162075f994857a03b87cd0eb9ff2de`

    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
  }

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=c7162075f994857a03b87cd0eb9ff2de&units=metric`

    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
  }

  // 함수 호출,lifecycle
  useEffect(() => {
    // 상황에 따라 실행
    if(city == '') {
      getCurrentLocation();
    }
    else {
      getWeatherByCity()
    }
  },[city])



  
  return (
    <div className="App">
      <div className="container">
      <WeatherBox weather={weather}/>
      <WeatherButton cities={cities} setCity={setCity}/>
      <ClipLoader size={150} />
      </div>
    </div>
  );
}

export default App;