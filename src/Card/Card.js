import React from 'react';
import './Card.css';

const Card = (props) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="sta">
          <h1>what is the capital of:</h1>
          {props.sta}
          <br/>
          <img src={props.img} alt="state pic"></img>
        </div>
      </div>
      <div className="front back">
      <div className="cap">
      {props.cap}
      </div>
      {/* <div className="pin">
      {props.num}
      </div> */}
      </div>
    </div>
  </div>
)

export default Card;