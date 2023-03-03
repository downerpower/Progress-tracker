import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const SectionStyled = styled.section`
   background-color: #ffffff;
   border: solid 3px grey;
   margin: 4px;
   width: 300px;
   height: 50px;
   border-radius: 10px;
   display: flex;
   justify-content: left;
   font-size: 40px;
   color: #ff6961;
`;

const WeekdayTitle = styled.div`
   display: flex;
   justify-content: center;
   width: 50px;
   border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(WeekdayTitle)`
   color: gray; 
`

const Section = ({ weekday, weekend, progressValue }) => {
   return (
      <SectionStyled>
         {weekend ?
            <WeekendTitle>{weekday}</WeekendTitle> :
            <WeekdayTitle>{weekday}</WeekdayTitle>
         }
         <ProgressBar progressValue={progressValue} />
      </SectionStyled>
   );
}

export default Section;