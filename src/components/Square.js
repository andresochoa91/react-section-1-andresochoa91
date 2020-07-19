import React from 'react';
import styled from 'styled-components';

const Col = styled.div`
  border: solid 1px #000;
  height: 40px;
  width: 40px;
  margin: 1px;
  cursor: pointer;
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