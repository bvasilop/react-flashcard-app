import React from 'react';
import './App.css';
import Loader from 'react-loader';
import firebase from 'firebase/app';
import Card from './Card/Card';
import Draw from './Draw/Draw';
import { DB_CONFIG } from './Config/Firebase/db_config.js';
import 'firebase/database';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app
      .database()
      .ref()
      .child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {},
      loaded: false,
    };
  }

  componentDidMount = () => {
    const { cards } = this.state;
    const currentCards = cards;

    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        sta: snap.val().sta,
        cap: snap.val().cap,
        img: snap.val().img,
      });

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards),
        loaded: true,
      });
    });
  };

  getRandomCard = currentCards => {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  };

  updateCard = () => {
    const { cards } = this.state;
    const currentCards = cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards),
    });
  };

  render() {
    const { loaded, currentCard } = this.state;
    return (
      <div className="App">
        <Loader loaded={loaded} top="35%" scale={1.25}>
          <div className="cardRow">
            <Card
              sta={currentCard.sta}
              cap={currentCard.cap}
              img={currentCard.img}
            />
          </div>
          <div className="buttonRow">
            <Draw drawCard={this.updateCard} />
          </div>
        </Loader>
      </div>
    );
  }
}

export default App;
