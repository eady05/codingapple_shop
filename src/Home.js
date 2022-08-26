import './App.css';
import { Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import data from './data.js';
function Home(){
    let [shoes] = useState(data);
    return(
        <div>
            <div className='main-bg' style={{backgroundImage : 'url(https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2021/07/02094730/나이키1.png)'}}></div>
            <div className='container'>
                <Row>
                    {
                        shoes.map((a,i)=>{
                            return(
                            <Card shoes={shoes[i]} i={i}/>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    );
}

function Card(props){
    return(
      <Col sm>
        <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="80%"/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
      </Col>
    )
}
export default Home;