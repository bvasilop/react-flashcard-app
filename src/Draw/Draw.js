import React from 'react';
import './Draw.css';


export default class Draw extends React.Component {
  constructor(props) {
    super(props);

    this.drawCard = this.drawCard.bind(this)
  }

  drawCard() {
    this.props.drawCard();
  }
  render(props) {
    return (
      <div className="buttonContainer">
        <button className="ui primary button" onClick={this.drawCard}>Draw Card</button>
      </div>
    )
  }
}
