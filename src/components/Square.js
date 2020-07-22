import React from 'react';
import styled from 'styled-components';

const Col = styled.div`
  border: solid 1px #000;
  border-radius: 4px;
  height: 70px;
  width: 70px;
  margin: 1px;
  cursor: pointer;
  :hover {
    background-color: #ccc;
  }
`;

const Square = ({ id, color, changeColor }) => {  
  return (
    <div>
      <Col id={ id }
           style={{ backgroundColor: color }} 
           onClick={ changeColor }>
      </Col>          
    </div>
  );
}

export { Col, Square }