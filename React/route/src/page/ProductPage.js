import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {

    let [query,setQuery] = useSearchParams()
    console.log("ddd",query.get("page"))

  return (
    <div>
        <h2>Show all Products</h2>
    </div>
  )
}

export default ProductPage