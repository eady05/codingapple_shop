import './App.css';
import { Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import data from './data.js';
function Detail(){
    let [shoes] = useState(data);
    return(
        
        <div className="container">
            <div className="row">
                {
                    shoes.map((a,i)=>{
                        return(
                            <Product shoes={shoes[i]} i={i}/>
                        )
                        
                    })
                }
            </div>
        </div> 
    );
}

function Product(props){
    return(
        <>
            <div className="col-md-6">
                <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{props.shoes.title}</h4>
                <p>{props.shoes.content}</p>
                <p>{props.shoes.price}</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </>

    )

}
export default Detail;