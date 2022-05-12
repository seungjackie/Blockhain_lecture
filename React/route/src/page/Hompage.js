import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Hompage = () => {
  const navigate = useNavigate()

  const goProductPage = () => {
    navigate('/products?q=pants')
  }

  return (
    <div>
      <h2>Hompage</h2>
      <Link to="/about" > go to about Page </Link>
      <button onClick={goProductPage}>  go to products page</button>
    </div>
  )
}

export default Hompage