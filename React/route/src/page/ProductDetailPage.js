import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const { id } = useParams()

  return (
    <div>
        <h2>ProductDetailPage {id}</h2>
    </div>
  )
}

export default ProductDetailPage