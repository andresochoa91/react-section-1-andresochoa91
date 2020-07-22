import React, { Component } from 'react';
import styled from 'styled-components';

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

const Contain = styled.div`
  label, input {
    display: block;
    width: 200px;
    margin: auto;
    text-align: center;
  }
  label {
    border-radius: 3px 3px 0 0;
    font-size: 20px;
    color: #fff;
  }

  input {
    border: 1px #ccc solid;
    border-radius: 0 0 3px 3px;
    height: 35px;
  }
`;

class Info extends Component {

  render() {
    const { onKeyUpInput, onClickStartButton } = this.props;
    return (
      <Contain>
        <label style={{backgroundColor: "#6af"}} htmlFor="player1">Player 1</label>
        <input maxLength={12} onKeyUp={onKeyUpInput} type="text" id="player1"/>
        <br/>
        <label style={{backgroundColor: "#f6c"}} htmlFor="player2">Player 2</label>
        <input maxLength={12} onKeyUp={onKeyUpInput} type="text" id="player2"/>
        <Button onClick={onClickStartButton}>Start playing</Button>
      </Contain>
    )
  }
} 

export default Info;