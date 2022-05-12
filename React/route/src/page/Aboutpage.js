import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
  const navigate = useNavigate()        // 페이지 이동 하는 있는 hook

  const goToHomePage = () => {
    navigate("/")
  }


  return (
    <div>
      <h1>About</h1>
      <button onClick ={goToHomePage}>Go to Home</button>
    </div>
  )
}

export default Aboutpage