import React from 'react';
import './Card.css';

const Card = (props) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="num">
          {props.num}
        </div>
      </div>
      {/* <div className="back">
      <div className="han">
      {props.num}
      </div> */}
      {/* <div className="pin">
      {props.num}
      </div> */}
      {/* </div> */}
    </div>
  </div>
)

export default Card;