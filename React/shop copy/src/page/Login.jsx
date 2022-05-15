import React from 'react'
import {Form ,Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  const navigate = useNavigate()


  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user functioin issue')
    props.Clickon(true)
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
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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