import styled from 'styled-components';
import MemoBar from '../../components/MemoBar';
import NavBar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import ContentSearch from './components/ContentSearch';
import OriginalPieChart from './components/OriginalPieChart';
import SmoothLineChart from './components/SmoothLineChart';

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

const ContentGridBox = styled.div`
  display: grid;
  position: relative;
  height: calc(100% - 96px);
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 26px;
  grid-gap: 16px;

  grid-template-areas:
    'totalView totalPlay maxView todayVisit'
    'contentsRanking contentsRanking contentsRanking userAnalysis'
    'contentsRanking contentsRanking contentsRanking popularContents'
    'contentsSearch contentsSearch contentsSearch contentsSearch ';

  grid-template-rows: 1fr 2.4fr 2.4fr 6fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  .grid-totalView {
    grid-area: totalView;
  }
  .grid-totalPlay {
    grid-area: totalPlay;
  }
  .grid-maxView {
    grid-area: maxView;
  }
  .grid-todayVisit {
    grid-area: todayVisit;
  }
  .grid-totalVisit {
    grid-area: totalVisit;
  }
  .grid-contentsRanking {
    grid-area: contentsRanking;
  }
  .grid-userAnalysis {
    grid-area: userAnalysis;
  }
  .grid-popularContents {
    grid-area: popularContents;
  }
  .grid-popularSearch {
    grid-area: popularSearch;
  }
  .grid-contentsSearch {
    grid-area: contentsSearch;
  }
`;

const WhiteBox = styled.div`
  background-color: #ffffff;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .content_title {
    font-size: 15px;
    position: absolute;
    top: 8px;
    left: 8px;
  }

  .content_value {
    font-size: 22px;
    font-weight: bold;
    margin-top: 25px;
  }

  .label_container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 70%;
    align-items: center;
    justify-content: space-around;
  }
`;

const Original = () => {
  const label = ['암투병1', '코로나19', '폐암', '간암'];

  return (
    <MainContainer>
      <NavBar />
      <SideBar isDash={false} />
      <ContentContainer>
        <DashContainer>
          <Title>Mediflix DashBoard</Title>
          <ContentGridBox>
            <WhiteBox className={'grid-totalView'}>
              <div className="content_title">영상 누적 주회수</div>
              <div className="content_value">104,223</div>
            </WhiteBox>
            <WhiteBox className={'grid-totalPlay'}>
              <div className="content_title">최다 영상 조회수</div>
              <div className="content_value">3,023</div>
            </WhiteBox>
            <WhiteBox className={'grid-maxView'}>
              <div className="content_title">최다 시청 진료과</div>
              <div className="content_value">신경외과</div>
            </WhiteBox>
            <WhiteBox className={'grid-todayVisit'}>
              <div className="content_title">최다 시청 병원</div>
              <div className="content_value">세브란스</div>
            </WhiteBox>
            <WhiteBox className={'grid-contentsRanking'}>
              <SmoothLineChart />
            </WhiteBox>
            <WhiteBox className={'grid-userAnalysis'}>
              <div className="content_title">주간 인기 검색어</div>
              <div className="label_container">
                {label.map((value, idx) => (
                  <div>{`${idx + 1}. ${value}`}</div>
                ))}
              </div>
            </WhiteBox>
            <WhiteBox className={'grid-popularContents'}>
              <OriginalPieChart title="관리 주간 그래프" pieWidth="100px" pieHeight="110px" />
            </WhiteBox>
            <WhiteBox className={'grid-contentsSearch'}>
              <ContentSearch />
            </WhiteBox>
          </ContentGridBox>
        </DashContainer>
        <MemoBar />
      </ContentContainer>
    </MainContainer>
  );
};

export default Original;
