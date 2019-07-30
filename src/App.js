import React from 'react';
// import './App.css';
import Card from './Card/Card';
import Draw from './Draw/Draw';
import { DB_CONFIG } from './Config/Firebase/db_config.js';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
      ],
      currentCard: {}
    }
  }

    componentWillMount() {
      const currentCards = this.state.cards;

      this.database.on('child_added', snap => {
        currentCards.push({
          id: snap.key,
          num: snap.val().num
        })

        this.setState({
          cards: currentCards,
          currentCard: this.getRandomCard(currentCards)
        })
      })
    }

    getRandomCard(currentCards) {
      const card = currentCards[Math.floor(Math.random()* currentCards.length)]
      return card;

    }

    updateCard() {
      const currentCards = this.state.cards;
      this.setState({
        currentCard: this.getRandomCard(currentCards)
      })
    }

  render() {
    return (
      <div class="ui segment">
        <div className="ui container">
          <div className="ui card">
            <Card num={this.state.currentCard.num}
                  />
            </div>
            </div>
            <div className="ui container">
              <Draw drawCard={this.updateCard}/>
            </div>
          </div>

    )
  }
}

export default App;
