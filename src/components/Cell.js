import React, { Component } from 'react';
import styled from "styled-components";
import Square from './Square';
// import { Button } from 'react-bootstrap';

//Styled components
export const Col = styled.div`
  border: solid 1px #000;
  width: 33%;
  height: auto;
  margin: 1px;
  cursor: pointer;
`;

const Content= styled.div`
  ${Col}:hover {
    background-color: #ccc;
  }
  display: flex;
  flex-wrap: wrap;
  width: 150px; 
`;

// const Row = styled.div`
//   display: flex;
// `;

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
    if (!event.target.style.backgroundColor && this.state.playing === true) {
      event.target.style.backgroundColor = this.state.color;
      if (this.state.color === "#f00") {
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
      this.setState({ board: this.state.board.map((sq, id) => (id === Number(event.target.id) ? this.state.color : sq))})
      this.setState({ count: this.state.count + 1 });
    }
  }

  componentDidUpdate () {
    if (this.conditions() || this.state.count === 9) {
      if (this.conditions()) {
        alert(`${this.state.player} wins`);
      } else {
        alert("Tie");
      }
      this.setState({
        color: "#f00",
        count: 0,
        playing: false,
        board: ["", "", "", "", "", "", "", "", ""],
        player: "Red"
      })
    } 
  }

  validation = (num1, num2, num3) => {
    return this.state.board[num1] &&
           this.state.board[num1] === this.state.board[num2] &&
           this.state.board[num2] === this.state.board[num3]
  }
  
  conditions = () => {
    return (this.validation(0, 1, 2) || this.validation(3, 4, 5) || this.validation(6, 7, 8) ||
            this.validation(0, 3, 6) || this.validation(1, 4, 7) || this.validation(2, 5, 8) ||
            this.validation(0, 4, 8) || this.validation(2, 4, 6)                   
    );
  }

  isEven = (number) => {
    return (number % 2 === 0);
  }

  restart = () => {
    for (let i = 0; i < 9; i++) {
      document.getElementById(i).style.backgroundColor = "";
    }
    this.setState({ 
      playing: true 
    })
  }

  render() {
    return (
      <div>
        <Content>
          {
            this.state.board.map((num, i) => {
              return <Square key={i} id={i} changeColor={ this.changeColor }/>
            })
          }
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