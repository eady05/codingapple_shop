import './App.css';
import './Error.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import {Routes,Route,Link, useNavigate, Outlet} from 'react-router-dom';
import Home from './Home.js';
import Detail from './Detail.js';
import Error from './Error.js';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={()=>navigate('/')}>CoCo Market</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link href="#features" onClick={()=>navigate('/detail')}>Detail</Nav.Link>
            {//<Link to="/" ><Nav.Link href="#home" >Home</Nav.Link></Link>
            //<Link to="/detail"><Nav.Link href="#features">Detail</Nav.Link></Link>
            }
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>}/>
          <Route path='location' element={<div>위치정보임</div>}/>
        </Route>
        <Route path='/event' element={<EventPage/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}
function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}
function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
