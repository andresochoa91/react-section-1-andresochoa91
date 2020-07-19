import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Cell from './components/Cell';

class App extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
        <h1>Tic Tac Toe!</h1>
        <p>
          This is a simple tic tac toe game.
        </p>
        <Cell />
      </Jumbotron>
      </div>
    );
  }
}

export default App;
