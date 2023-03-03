import styled from 'styled-components';

const Progress = styled.div`
  width: ${({ progressValue }) => `${progressValue}%`};
  background-color: ${({progressValue}) => {
   if (progressValue >= 0 && progressValue < 25) {
      return '#BAFFC9'
    } else if (progressValue >= 25 && progressValue < 50) {
      return '#FFFFBA'
    } else if (progressValue >= 50 && progressValue < 75) {
      return '#FFDFBA'
    } else {
      return '#FFB3BA'
    }
  }}
`

const ProgressBar = ({ progressValue }) => {

   return (
      <Progress progressValue={progressValue} />
   );
}

export default ProgressBar;