import styled from 'styled-components';
import NavBar from '../../components/Navbar';
import SideBar from '../../components/SideBar';

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

const Title = styled.div`
  color: #e31e26;
  font-size: 25px;
  margin-top: 28px;
  margin-left: 32px;
  height: 50px;
`;

const MemoContainer = styled.section`
  flex: 1;
  height: 100%;
  background-color: #fbfbfb;
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
    'totalView totalPlay maxView todayVisit totalVisit'
    'contentsRanking contentsRanking contentsRanking userAnalysis userAnalysis'
    'popularContents popularContents popularContents popularContents popularSearch'
    'contentsSearch contentsSearch contentsSearch contentsSearch contentsSearch';

  grid-template-rows: 1fr 2fr 2fr 4fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

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

const ContentBox = styled.div`
  background-color: #ffffff;
  border: 7px solid #d6cece;
  display: flex;
  justify-content: center;
  align-items: center;
  .chartWrap {
    width: 350px;
    height: 310px;
  }
`;

const Original = () => {
  return (
    <MainContainer>
      <NavBar />
      <SideBar />
      <ContentContainer>
        <DashContainer>
          <Title>Mediflix DashBoard</Title>
          <ContentGridBox>
            <ContentBox className={'grid-totalView'}>totalView</ContentBox>
            <ContentBox className={'grid-totalPlay'}>totalPlay</ContentBox>
            <ContentBox className={'grid-maxView'}>maxView</ContentBox>
            <ContentBox className={'grid-todayVisit'}>todayVisit</ContentBox>
            <ContentBox className={'grid-totalVisit'}>totalVisit</ContentBox>
            <ContentBox className={'grid-contentsRanking'}>contentsRanking</ContentBox>
            <ContentBox className={'grid-userAnalysis'}>userAnalysis</ContentBox>
            <ContentBox className={'grid-popularContents'}>popularContents</ContentBox>
            <ContentBox className={'grid-popularSearch'}>popularSearch</ContentBox>
            <ContentBox className={'grid-contentsSearch'}>contentsSearch</ContentBox>
          </ContentGridBox>
        </DashContainer>
        <MemoContainer></MemoContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Original;
