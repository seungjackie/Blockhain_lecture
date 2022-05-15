import React , {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import {Container , Row, Col}from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
  
  const [productList, setProductList] = useState([])

  const [qeury,setQeury] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = qeury.get("q") || " ";
    console.log("쿼리값은?",searchQuery)
    // todo
    let url = `http://localhost:3004/products?q=${searchQuery}`;
    let response =  await fetch(url);
    let data = await response.json();
    console.log(data)
    setProductList(data)
  }

  // 데이터 가져오기
  useEffect(() =>{
    getProducts()
  } ,[qeury])

  return (
    <div>
      <Container>
          <Row>
            {productList.map((menu, index) => {
                return <Col lg={3} key={index}><ProductCard item={menu}/></Col>
            })}
          </Row>
      </Container>
    </div>  
    )
}

export default ProductAll