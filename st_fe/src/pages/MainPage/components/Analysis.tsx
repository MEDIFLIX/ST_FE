import { style } from '@mui/system';
import styled from 'styled-components';

const AnalysisContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 25px;

  .title {
    font-size: '16px';
    font-weight: bold;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #5b5b5b;
  display: flex;
  border-radius: 10px;
  align-items: center;
  color: #ffffff;
  margin-top: 10px;
`;

const Circle = styled.div`
  background-color: #e31e26;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0px 10px;
`;

const Date = styled.div`
  width: 45px;
  height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Analysis = () => {
  return (
    <AnalysisContainer>
      <div className="title">주간 방문자 분석</div>
      <Bar>
        <Circle />
        <div>March 2023</div>
      </Bar>
    </AnalysisContainer>
  );
};

export default Analysis;
