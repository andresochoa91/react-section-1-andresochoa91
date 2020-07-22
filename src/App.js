import React, { Component } from 'react';
// import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import Cell from './components/Cell';
import Info from './components/Info';


const Background = styled.div`
  background: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsuperchlorine.com%2Fwp-content%2Fuploads%2F2012%2F08%2Ftic-tac-toe_featured.png&f=1&nofb=1") no-repeat center center/contain;
  height: 250px;
`;

const Title = styled.h1``;
const Paragraph = styled.p``;

const Button = styled.button`
  display: block;
  border: none;
  background-color: #3c9;
  color: #fff;
  font-size: 20px;
  margin: 30px auto;
  padding: 5px 15px;
  border-radius: 3px;
  :hover {
    background-color: #1a7;
  }
`;

const Body = styled.div`
  width: 1000px;
  margin: auto;
  padding: 10px;
  ${Title}, ${Paragraph} {
    text-align: center;
  }
`;

class App extends Component {

  state = {
    start: false,
    readyToPlay: false,
    player1: "",
    player2: ""
  }

  onKeyUpInput = (event) => {
    const { value, id } = event.target;
    if (id === "player1") {
      this.setState({ player1: value });
    } else {
      this.setState({ player2: value });
    }
  }

  onClickStartButton = () => {
    const { player1, player2 } = this.state;
    if (player1 && player2) {
      this.setState({ readyToPlay: true });
    } else {
      alert("You must have 2 players to start the game!");
    }
  }

  onClickNewGameButton = () => {
    this.setState({ readyToPlay: false, player1: "", player2: "" });
  }

  startButton = () => {
    this.setState({ start: true });
  }

  render() {
    const { start, readyToPlay, player1, player2 } = this.state;
    return (
      <Body>
        <Background>
        </Background>
        <Title>Tic Tac Toe!</Title>
        {
          start === false ? 
          <div>
            <Paragraph>This is a simple Tic Tac Toe game.</Paragraph>
            <Button onClick={this.startButton}>START</Button>
          </div> :
            readyToPlay === false ?
            <Info onKeyUpInput={this.onKeyUpInput}
                  onClickStartButton={this.onClickStartButton} 
            /> :
              <Cell onClickNewGameButton={this.onClickNewGameButton}
                    player1={player1}      
                    player2={player2}      
              />
        }
      </Body>
    );
  }
}

export default App;
