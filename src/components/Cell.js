import React, { Component } from 'react';
import styled from "styled-components";
import { Square, Col} from './Square';

//Styled components

const Content= styled.div`
  ${Col}:hover {
    background-color: #ccc;
  }
  display: flex;
  flex-wrap: wrap;
  width: 150px; 
`;

const Button = styled.button`
  background-color: ${(props) => props.primary};
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 30px;
`;

class Cell extends Component {
  state = {
    color: "#f00",
    count: 0,
    playing: true,
    board: ["", "", "", "", "", "", "", "", ""],
    player: "Red",
  }
  
  changeColor = (event) => {

    const { color, playing, board } = this.state;

    if (!board[event.target.id] && playing === true) {    
      const newBoard = [...board];
      newBoard[event.target.id] = color;
      this.setState({ board: newBoard });

      if (color === "#f00") {
        this.setState({ 
          color: "#0f0",
          player: "Red" 
        })  
      } else {
        this.setState({ 
          color: "#f00",
          player: "Green"
        })
      }
      this.setState({ count: this.state.count + 1 });
    }
  }

  componentDidUpdate () {
    const { count, playing, player} = this.state;
    if ((this.conditions() || count === 9) && playing === true) {
      if (this.conditions()) {
        alert(`${player} wins`);
      } else {
        alert("Tie");
      }
      this.setState({
        color: "#f00",
        count: 0,
        playing: false,
        player: "Red"
      })
    } 
  }

  validation = (num1, num2, num3) => {
    let board = this.state.board;
    return board[num1] &&
           board[num1] === board[num2] &&
           board[num2] === board[num3]
  }
  
  conditions = () => {
    let val = this.validation;
    return (val(0, 1, 2) || val(3, 4, 5) || val(6, 7, 8) ||
            val(0, 3, 6) || val(1, 4, 7) || val(2, 5, 8) ||
            val(0, 4, 8) || val(2, 4, 6)                   
    );
  }

  isEven = (number) => {
    return (number % 2 === 0);
  }

  restart = () => {
    this.setState({ 
      playing: true,
      board: ["", "", "", "", "", "", "", "", ""]
    })
  }

  render() {
    return (
      <div>
        <Content>
          { this.state.board.map((num, i) => <Square key={i} id={i} color={num} changeColor={ this.changeColor }/>) }
        </Content>  
        <br/>
        <p>
          <Button primary={this.state.color} onClick={this.restart}>Restart</Button>
        </p>
      </div>
    )
  }
}

export default Cell;