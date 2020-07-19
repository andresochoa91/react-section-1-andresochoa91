import React, { Component } from 'react';
import styled from 'styled-components';

const Col = styled.div`
  border: solid 1px #000;
  height: 40px;
  width: 40px;
  margin: 1px;
  cursor: pointer;
`;

class Square extends Component {
  state = {
    color: ""
  }

  render() {
    console.log(this.props.id)
    if (this.props.id + 1 % 3 !== 0) {
      return (
        <div>
          <Col id={ this.props.id } onClick={ this.props.changeColor }></Col>
          
        </div>
      );
    } else {
      return (
        <div>
          <Col id={ this.props.id } onClick={ this.props.changeColor }></Col>
        </div>
      );
    }
  }
}

export default Square;