import React from 'react'
import {Row, Col } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <div>   
        <Row>
            <Col lg={2}>
                <img width={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiUTPPp2gvlHnABV3nwM8byhOvufCVXH2tA&usqp=CAU" />
            </Col>
            <Col lg={10}>
                <div>{item.name} </div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem