import React from 'react';
import './App.css';
import Card from './Card/Card';
import Draw from './Draw/Draw';
import Loader from 'react-loader';
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
      currentCard: {},
      loaded: false
    }
  }

    componentDidMount = () => {
      const currentCards = this.state.cards;

      this.database.on('child_added', snap => {
        currentCards.push({
          id: snap.key,
          sta: snap.val().sta,
          cap:  snap.val().cap,
          img:  snap.val().img
        })

        this.setState({
          cards: currentCards,
          currentCard: this.getRandomCard(currentCards),
          loaded: true,
        })
      })
    }

    getRandomCard = (currentCards) => {
      const card = currentCards[Math.floor(Math.random()* currentCards.length)]
      return card;
    }

    updateCard = () => {
      const currentCards = this.state.cards;
      this.setState({
        currentCard: this.getRandomCard(currentCards)
      })
    }

  render() {
    return (
      <div className="App">
        <Loader loaded={this.state.loaded} top="35%" scale={1.25}>
        <div className="cardRow">
            <Card sta={this.state.currentCard.sta}
                  cap={this.state.currentCard.cap}
                  img={this.state.currentCard.img}
                  />
            </div>
            <div className="buttonRow">
              <Draw drawCard={this.updateCard}/>
            </div>
            </Loader>
        </div>
    )
  }
}

export default App;
