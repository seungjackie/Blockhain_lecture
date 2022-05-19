import React, { useState } from 'react'
import {Row , Col ,Form , Button} from 'react-bootstrap'
import { useDispatch} from 'react-redux';

const SearchBox = () => {
    const dispatch = useDispatch()

    // 이름 저장소
    const [name, setName] = useState("")


    //함수를 만들어ㅔ
    const searchContact = (event) => {
        // 밸류 저장
        setName(event.target.value)
    }


    // filter 아이템을 매개변수로 받고 키워드가 맞으면 배열을 할수 있다.
    // include가 조회 하는거다, 조회 하는 부분이고,
    // 입력창은 컴포넌트가 다르다, 검색창이랑 
    //  키워드도 리덕스로 빼야한다.
    // let list = constract.filter(item => item.name.includes(keyword))

  return (
    <div>
        <Row>
            <Col lg={10}> {/* 크기 */}
                <Form.Control type="text" placeholder="이름을 입력해 주세요"  onChange={(event) =>  searchContact(event)}/>
            </Col>
            <Col lg={2}>
                <Button variant="primary" type="submit" onClick={() => dispatch({type:"SEARCH_CONTRACT" , payload : name})}>
                    검색  
                </Button>
            </Col>
        </Row>
    </div>
  )
}

export default SearchBox