import styled from 'styled-components';
import Section from './components/Section';

function App() {
  const Title = styled.h1`
  font-family: sans-serif;
  color: #b19cd9;
`;

  const WEEKDAYS = [{ day: 'M', progress: 70 }, { day: 'T', progress: 30 }, { day: 'W', progress: 50 }, { day: 'T', progress: 90 }, { day: 'F', progress: 10 }, { day: 'S', progress: 80 }, { day: 'S', progress: 60 }];

  return (
    <>
      <Title>Progress Tracker</Title>
      <div>
        {WEEKDAYS.map(day => <Section key={day.progress} weekday={day.day} weekend={day.day === 'S' && true} progressValue={day.progress} />)}
      </div>
    </>
  );
}

export default App;
