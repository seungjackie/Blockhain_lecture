import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const Sort = () => {
  return (
    <div>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort 
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Sort