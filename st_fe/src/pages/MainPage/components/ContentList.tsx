import styled from 'styled-components';

const ContentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95%;

  .contentList_title {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0px;
  }
`;

const BarBox = styled.div`
  border: 1px solid black;
  background-color: #5b5b5b;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 6px 0px;
  text-align: center;

  div:nth-child(1) {
    flex: 0.75;
    width: 26px;
  }
  div:nth-child(2) {
    flex: 2;
  }
  div:nth-child(3) {
    flex: 2.5;
  }
  div:nth-child(4) {
    flex: 1;
  }
  div:nth-child(5) {
    flex: 1;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin: 7px 0;

  img {
    width: inherit;
    height: inherit;
  }

  div:nth-child(1) {
    flex: 0.75;
  }

  div:nth-child(2) {
    flex: 2;
    margin-top: 7px;
  }
  div:nth-child(3) {
    flex: 2.25;
  }
  div:nth-child(4) {
    flex: 1;
  }
  div:nth-child(5) {
    flex: 1;
  }
  .contentList_imgBox {
    width: 150px;
    height: 65px;
  }
`;

const ContentList = () => {
  const data = [
    {
      prior: 1,
      img: '/img/콘텐츠1.png',
      title: '김해유 교수의 EPILEPSY',
      number: '6892회',
      diffRate: '1%',
    },
    {
      prior: 2,
      img: '/img/콘텐츠2.png',
      title: '최정민교수의 역류성 식도질환',
      number: '5634회',
      diffRate: '4%',
    },
  ];

  return (
    <ContentListContainer>
      <div className="contentList_title">주간 콘텐츠 순위 비교</div>
      <BarBox>
        <div>순위</div>
        <div>썸네일</div>
        <div>제목</div>
        <div>조회수</div>
        <div>변동율</div>
      </BarBox>
      <ContentContainer>
        {data.map(({ prior, img, title, number, diffRate }) => (
          <ContentBox>
            <div>{prior}</div>
            <div className="contentList_imgBox">
              <img src={img} alt="img" />
            </div>
            <div>{title}</div>
            <div>{number}</div>
            <div>{diffRate}</div>
          </ContentBox>
        ))}
      </ContentContainer>
    </ContentListContainer>
  );
};

export default ContentList;
