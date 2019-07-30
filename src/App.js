import React from 'react';
import './App.css';
import Card from './Card/Card';
import Draw from './Draw/Draw';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {id: 1, eng: "English", han: "Hanzi",  pin: "Pinyin"},
        {id: 2, eng: "English_2", han: "Hanzi_2",  pin: "Pinyin_2"},
        {id: 3, eng: "English_3", han: "Hanzi_3",  pin: "Pinyin_3"},
        {id: 4, eng: "English_4", han: "Hanzi_4",  pin: "Pinyin_4"},
      ],
      currentCard: {}
    }
  }

    componentWillMount() {
      const currentCards = this.state.cards;

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
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
      <div className="App">
        <div className="cardRow">
          <Card eng={this.state.currentCard.eng}
                han={this.state.currentCard.han}
                pin={this.state.currentCard.pin}
                />
          </div>
          <div className="buttonRow">
            <Draw drawCard={this.updateCard}/>
          </div>
      </div>
    )
  }
}

export default App;
