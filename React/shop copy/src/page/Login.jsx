import React, { useState } from 'react'
import {Form ,Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'

const Login = (props) => {

  const [id, setId] =useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  //로그인 트루 or false

  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user functioin issue')
    // props.Clickon(true)
    // 보내준다
    dispatch(authenticateAction.login(id,password));
    navigate('/')

  }

  const clickHandler = () => {
    props.Clickon(true)
  }

  // console.log('Clickon', )
  return (
    <Container>
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(event) => setId(event.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit" onClick={() => {clickHandler()}}>
            로그인
          </Button>
        </Form>

    </Container>
  )
}

export default Login