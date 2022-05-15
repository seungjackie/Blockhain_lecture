import React ,{ useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row , Col } from 'react-bootstrap'

const ProductDetail = () => {

  // 가져온건 객체,들어오는건 객체 , 중괄호는 객체안에서 키값 빼낼때
  let {id} = useParams()

  const [product,setProduct] = useState(null)

  const getProductDetail = async () => {
    let url = `http://localhost:3004/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(() =>{
    getProductDetail()
  },[])

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img}></img>
        </Col>
        <Col>
          <div> {product?.title}</div>
          <div> {product?.price}</div>
        </Col>
      </Row>
    </Container>
    )
}

export default ProductDetail