import React, { useEffect, useState } from "react";
import {Navbar , Container, Form, Button ,Nav, NavDropdown , FormControl} from "react-bootstrap"; 
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { movieSearchAction } from "../redux/actions/SearchAction";



const Naviation = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { movieSearchList } = useSelector(state => state.movie)
  console.log("movieSearchList  Local" , movieSearchList)
  // const [name, setName] = useState("");

  const handleSubmit = (event) => {
    // if(event.key === 'Enter'){
    //   event.preventDefault();
    //   console.log("엔터값은? " , event)
    // }
    event.preventDefault();
    console.log("엔터값은? " , event)

  }

  const search =  (event) => {
    // target을 데이터로 받아야 함.
    let keyword = event.target.value;
    console.log("쿼리값은?? " ,keyword)
  }

  const clickToSearch = (event) => {
    // let keyword = event.target.value;
    // console.log("쿼리값은?? " ,keyword)
    // dispatch(movieSearchAction.getSearchMovies(event))
    dispatch(movieSearchAction.getSearchMovies());
  }


  useEffect((event) => {
    clickToSearch(event);
  },[])


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid >
        <Navbar.Brand href="#"  >
            <img width={100} src="data:image/jpeg;base64,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" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to='/' className="navbar-item">Home</Link>
            <Link to='movie' className="navbar-item">Movies</Link>
          </Nav>
          {/* <Form className="d-flex" onSubmit={(event) =>handleSubmit(event)}> */}
          <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              // onChange={(event) =>search(event)}
              onChange={(event) => search(event)}
            />
            <Button variant="danger" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Naviation;