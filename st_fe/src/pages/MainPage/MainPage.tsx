import LineChart from './components/LineChart';
import styled from 'styled-components';
import NavBar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import Analysis from './components/Analysis';
import BarChart from './components/BarChart';
import ListItems from './components/ListItems';
import ContentList from './components/ContentList';
import PieChart from './components/PieChart';
import MemoBar from '../../components/MemoBar';
import * as API from '../../api/API';
import { useEffect } from 'react';

const MainContainer = styled.div`
  width: 100vw;
  height: 954px;
  min-height: calc(100vh - 70px);
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
  min-height: calc(100vh-70px);
`;

const DashContainer = styled.section`
  flex: 2.9;
  height: 100%;
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
  width: 100%;
  position: relative;
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

  grid-template-rows: 1.4fr 1.1fr 1fr;
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
  const fetchAdminList = async () => {
    const data = await API.get('/board/list');
    console.log(data);
    return data;
  };

  useEffect(() => {
    const adminList = fetchAdminList();

    console.log(adminList);
  }, []);
  return (
    <MainContainer>
      <NavBar />
      <SideBar isDash={true} />
      <ContentContainer>
        <DashContainer>
          <Title>Mediflix DashBoard</Title>
          <ContentGridBox>
            <ContentBox className={'grid-chart'}>
              <LineChart />
            </ContentBox>
            <ContentBox className={'grid-analysis'}>
              <Analysis />
            </ContentBox>
            <ContentBox className={'grid-graph'}>
              <BarChart />
            </ContentBox>
            <ContentBox className={'grid-item1'}>
              <ListItems />
            </ContentBox>
            <ContentBox className={'grid-item2'}>
              <ListItems />
            </ContentBox>
            <ContentBox className={'grid-content'}>
              <ContentList />
            </ContentBox>
            <ContentBox className={'grid-diagram'}>
              <PieChart title="유입 현황 분석" pieWidth="170px" pieHeight="170px" />
            </ContentBox>
          </ContentGridBox>
        </DashContainer>
        <MemoBar />
      </ContentContainer>
    </MainContainer>
  );
};

export default MainPage;
