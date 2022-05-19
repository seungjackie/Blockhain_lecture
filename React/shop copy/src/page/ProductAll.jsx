import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => { //api 호출 useEffect에서 해야한다.
    // product함수로 가져와서 productList를 value가져오는 거다
    const productList = useSelector((state) => (state.product.productList));
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch()
    
    const getProducts = () => {
        let searchQuery = query.get('q') || "";
        console.log("쿼리값은?",searchQuery);
        dispatch(productAction.getProducts(searchQuery)) //dispatch가 바로 reducer를 가는것이아닌 미들웨어를 거쳐서 간다.
        
    }

    useEffect(()=>{
        getProducts(); // query값이 바낄때마다 호출되야한다.
    }, [query]);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item, index)=> (   // productList에 아이템이 있는 개수만큼
                        <Col key={index} lg={3}>
                            <ProductCard item={item}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll