import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bgimag from './img/bg.jpeg';
import data from './data.js';
import React, { useEffect, useState } from "react";

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CoCo Market</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{backgroundImage : 'url(https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2021/07/02094730/나이키1.png)'}}>
      </div>
      <div className='container'>
        <Row>
          <Col sm>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
          </Col>
          <Col sm>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
          </Col>
          <Col sm>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
          </Col>
        </Row>
    </div>
    </div>
  );
}

export default App;
