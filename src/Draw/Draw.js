import React from 'react';
import './Draw.css';


export default class Draw extends React.Component {

  drawCard = () => {
    this.props.drawCard();
  }

  render() {
    return (
      <div className="buttonContainer">
        <button className="btn"  onClick={this.drawCard}>Select State</button>
      </div>
    )
  }
}
