import LineChart from './components/LineChart';
import styled from 'styled-components';
import NavBar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import Analysis from './components/Analysis';

const MainContainer = styled.div`
  width: 100vw;
  height: 954px;
  background-color: white;
  position: relative;
`;

const ContentContainer = styled.div`
  position: absolute;
  display: flex;
  top: 70px;
  left: 10vw;
  width: 90vw;
  background-color: #e7e7e7;
  height: 100%;
`;

const DashContainer = styled.section`
  flex: 2.9;
  height: 100%;
`;

const MemoContainer = styled.section`
  flex: 1;
  height: 100%;
  background-color: #fbfbfb;
`;

const Title = styled.div`
  color: #e31e26;
  font-size: 25px;
  margin-top: 28px;
  margin-left: 32px;
  height: 50px;
`;

// type ContentBoxProps = {
//   width: string;
//   height: string;
// };

const ContentBox = styled.div`
  background-color: #ffffff;
  border: 7px solid #d6cece;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  .chartWrap {
    width: 350px;
    height: 310px;
  }
`;

const ContentGridBox = styled.div`
  display: grid;
  position: relative;
  height: calc(100% - 96px);
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 26px;
  grid-gap: 16px;

  grid-template-areas:
    'chart chart analysis analysis analysis'
    'graph graph graph item1 item2'
    'weekContent weekContent weekContent diagram diagram';

  grid-template-rows: 330px 233px 226px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  .grid-chart {
    grid-area: chart;
  }
  .grid-analysis {
    grid-area: analysis;
  }
  .grid-graph {
    grid-area: graph;
  }
  .grid-item1 {
    grid-area: item1;
  }
  .grid-item2 {
    grid-area: item2;
  }
  .grid-content {
    grid-area: weekContent;
  }
  .grid-diagram {
    grid-area: diagram;
  }
`;

const MainPage = () => {
  return (
    <MainContainer>
      <NavBar />
      <SideBar />
      <ContentContainer>
        <DashContainer>
          <Title>Mediflix DashBoard</Title>
          <ContentGridBox>
            <ContentBox className={'grid-chart'}>
              <div className="chartWrap">
                <LineChart />
              </div>
            </ContentBox>
            <ContentBox className={'grid-analysis'}>
              <Analysis />
            </ContentBox>
            <ContentBox className={'grid-graph'}>graph</ContentBox>
            <ContentBox className={'grid-item1'}>item1</ContentBox>
            <ContentBox className={'grid-item2'}>item2</ContentBox>
            <ContentBox className={'grid-content'}>content</ContentBox>
            <ContentBox className={'grid-diagram'}>diagram</ContentBox>
          </ContentGridBox>
        </DashContainer>
        <MemoContainer></MemoContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default MainPage;
