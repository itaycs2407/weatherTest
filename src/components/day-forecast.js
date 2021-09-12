import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Pouring } from '../../src/weather-pouring.svg';
import { ReactComponent as Sunny } from '../../src/white-balance-sunny.svg';

const DayFortcast = ({ dayLabel, temperature }) => {
  const dayClick = () => {
    console.log(`day: ${dayLabel}, temperature: ${temperature}`);
  };

  return (
    <Content onClick={() => dayClick()}>
      <div>{dayLabel}</div>
      <div>{temperature > 12 ? <Pouring /> : <Sunny />}</div>
      <div>{`${temperature} C`}</div>
    </Content>
  );
};

const Content = styled.div`
  height: 80px;
  width: 110px;
  border-radius: 10px;
  border: 2px solid green;
  padding: 10px;
  margin: 5px;
  background-color: lightgreen;

  transition: all 0.6s ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    box-shadow: 2px 2px 2px 0px lightgreen;
    height: 90px;
    background-color: yellow;
    border: 8px dashed orange;
    transform: rotate(45deg);
    width: 250px;
    height: 300px;
  }
`;

export default DayFortcast;
