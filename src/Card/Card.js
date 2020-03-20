import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ sta, cap, img }) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="sta">
          <h1>what is the capital of</h1>
          {sta}
          <br />
          <img src={img} alt="state pic" />
        </div>
      </div>
      <div className="front back">
        <div className="cap">
          <h1>the capital is</h1>
          {cap}
          <br />
          <img src={img} alt="state pic" />
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  sta: PropTypes.string,
  cap: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
