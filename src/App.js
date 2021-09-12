import React from 'react';
import styled from 'styled-components';
import DayFortcast from './components/day-forecast';

const App = () => {
  const daysForecast = [
    {
      dayLabel: 'Sunday',
      temperature: 15,
    },
    {
      dayLabel: 'Monday',
      temperature: 12,
    },
    {
      dayLabel: 'Tuesday',
      temperature: 19,
    },
    {
      dayLabel: 'Wednesday',
      temperature: 11,
    },
    {
      dayLabel: 'Thursday',
      temperature: 12,
    },
    {
      dayLabel: 'Friday',
      temperature: 32,
    },
    {
      dayLabel: 'Saturday ',
      temperature: 27,
    },
  ];

  return (
    <div>
      <HeaderContainer>
        <h1>The Weather App</h1>
        <button>Test Button</button>
      </HeaderContainer>
      <MainContainer>
        <DaysContainer>
          {daysForecast.map((day) => (
            <DayFortcast
              key={day.dayLabel}
              dayLabel={day.dayLabel}
              temperature={day.temperature}
            />
          ))}
        </DaysContainer>
      </MainContainer>
    </div>
  );
};
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
`;

const MainContainer = styled.div`
  width: 100vw;
  display: flex;

  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
`;

const DaysContainer = styled.div`
  width: 50%;
  //max-width: 980px;
  min-width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default App;
