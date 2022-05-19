import React, {useState} from 'react'
import {Form , Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const dispatch = useDispatch();




    const addContact = (event) => {
        event.preventDefault();
        // 액션을 파라미터 값으로
        dispatch({type : "ADD_CONTACT",payload : {name ,phoneNumber}})      // name 과 phoneNumber 최신 자바스크립트 용어
    };



  return (
    <div>
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                {/* form 의 value 값 받을을수있다. */}
                <Form.Control type="text" placeholder="이름을 입력해 주세요" onChange={(event) => setName(event.target.value)}/>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화 번호 </Form.Label>
                <Form.Control type="number" placeholder="전화번호" onChange={(event) => setPhoneNumber(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
                추가 
            </Button>
        </Form>
    </div>
    )
}

export default ContactForm;