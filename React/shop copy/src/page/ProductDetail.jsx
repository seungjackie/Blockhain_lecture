import React ,{ useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row , Col } from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux'
import { productAction } from '../redux/actions/productAction'


const ProductDetail = () => {

  // 가져온건 객체,들어오는건 객체 , 중괄호는 객체안에서 키값 빼낼때
  const productDetail = useSelector((state) => state.product.productDetail);
  const dispatch = useDispatch();

  let {id} = useParams();

  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id))
  };

  useEffect(() =>{
    getProductDetail()
  },[]);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={productDetail?.img}></img>
        </Col>
        <Col>
          <div> {productDetail?.title}</div>
          <div> {productDetail?.price}</div>
        </Col>
      </Row>
    </Container>
    )
}

export default ProductDetail