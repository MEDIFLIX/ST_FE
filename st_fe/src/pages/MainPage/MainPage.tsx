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
import { useEffect, useState } from 'react';

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

export type ContentData = {
  totalVisit: number;
  newVisit: number;
  dayContent: number;
  withdrawalNum: number;
  date: string;
  day: string;
};

const MainPage = () => {
  const [contentData, setContentData] = useState<ContentData[]>([
    {
      date: '3.19',
      day: 'Sun',
      totalVisit: 123,
      newVisit: 8,
      dayContent: 962,
      withdrawalNum: 5,
    },
    {
      date: '3.20',
      day: 'Mon',
      totalVisit: 96,
      newVisit: 12,
      dayContent: 820,
      withdrawalNum: 2,
    },
    {
      date: '3.21',
      day: 'Tue',
      totalVisit: 143,
      newVisit: 12,
      dayContent: 1203,
      withdrawalNum: 1,
    },
    {
      date: '3.22',
      day: 'Wen',
      totalVisit: 124,
      newVisit: 8,
      dayContent: 1402,
      withdrawalNum: 0,
    },
    {
      date: '3.23',
      day: 'Thu',
      totalVisit: 146,
      newVisit: 4,
      dayContent: 1295,
      withdrawalNum: 3,
    },
    {
      date: '3.24',
      day: 'Fri',
      totalVisit: 123,
      newVisit: 7,
      dayContent: 789,
      withdrawalNum: 2,
    },
    {
      date: '3.25',
      day: 'Sat',
      totalVisit: 190,
      newVisit: 21,
      dayContent: 2345,
      withdrawalNum: 1,
    },
  ]);

  const fetchContentList = async () => {
    const { result } = await API.get('/original/selectWeeklyInfo');
    console.log(result);
  };

  const listLabel1 = ['정형외과', '성형외과', '내과'];
  const listLabel2 = ['세브란스', '서울성모', '이대병원'];

  useEffect(() => {
    fetchContentList();
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
              <LineChart contentData={contentData} />
            </ContentBox>
            <ContentBox className={'grid-analysis'}>
              <Analysis contentData={contentData} />
            </ContentBox>
            <ContentBox className={'grid-graph'}>
              <BarChart />
            </ContentBox>
            <ContentBox className={'grid-item1'}>
              <ListItems labels={listLabel1} />
            </ContentBox>
            <ContentBox className={'grid-item2'}>
              <ListItems labels={listLabel2} />
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
