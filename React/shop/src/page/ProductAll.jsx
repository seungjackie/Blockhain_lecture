import React , {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import {Container , Row, Col}from 'react-bootstrap';


const ProductAll = () => {
  
  const [productList, setProductList] = useState([])

  const getProducts = async () => {
    let url = `http://localhost:3004/products`
    let response =  await fetch(url);
    let data = await response.json();
    console.log(data)
    setProductList(data)
  }

  // 데이터 가져오기
  useEffect(() =>{
    getProducts()
  } ,[])

  return (
    <div>
      <Container>
          <Row>
            <Col ig={3}><ProductCard/></Col>
            <Col ig={3}><ProductCard/></Col>
            <Col ig={3}><ProductCard/></Col>
            <Col ig={3}><ProductCard/></Col>
          </Row>
      </Container>
    </div>  
    )
}

export default ProductAll