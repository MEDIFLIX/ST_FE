import styled from 'styled-components';

const ContentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

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
  width: 100%;
  margin-top: 10px;

  div:nth-child(1) {
    flex: 1;
  }
  div:nth-child(2) {
    flex: 1;
  }
  div:nth-child(3) {
    flex: 2;
  }
  div:nth-child(4) {
    flex: 1;
  }
  div:nth-child(5) {
    flex: 1;
  }
  div:nth-child(6) {
    flex: 1;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 400px;
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
    flex: 1;
  }

  div:nth-child(2) {
    flex: 1;
    margin-top: 7px;
  }
  div:nth-child(3) {
    flex: 2;
  }
  div:nth-child(4) {
    flex: 1;
  }
  div:nth-child(5) {
    flex: 1;
  }
  div:nth-child(6) {
    flex: 1;
  }
  .contentList_imgBox {
    width: 120px;
    height: 65px;
  }
`;

const OriginalContentList = () => {
  const data = [
    { prior: 1, img: '/img/content1.jpg', title: '제목', number: '200회', diffRate: '10%' },
    { prior: 2, img: '/img/content2.jpg', title: '제목', number: '200회', diffRate: '10%' },
    { prior: 2, img: '/img/content2.jpg', title: '제목', number: '200회', diffRate: '10%' },
    { prior: 2, img: '/img/content2.jpg', title: '제목', number: '200회', diffRate: '10%' },
    { prior: 2, img: '/img/content2.jpg', title: '제목', number: '200회', diffRate: '10%' },
    { prior: 2, img: '/img/content2.jpg', title: '제목', number: '200회', diffRate: '10%' },
    { prior: 2, img: '/img/content2.jpg', title: '제목', number: '200회', diffRate: '10%' },
  ];

  return (
    <ContentListContainer>
      <BarBox>
        <div>순위</div>
        <div>썸네일</div>
        <div>제목</div>
        <div>날짜</div>
        <div>조회수</div>
        <div>변동율</div>
        <div>관리지표</div>
      </BarBox>
      <ContentContainer>
        {data.map(({ prior, img, title, number, diffRate }) => (
          <ContentBox>
            <div>{prior}</div>
            <div className="contentList_imgBox">
              <img src={img} alt="img" />
            </div>
            <div>{title}</div>
            <div>날짜</div>
            <div>{number}</div>
            <div>{diffRate}</div>
            <div>관리지표</div>
          </ContentBox>
        ))}
      </ContentContainer>
    </ContentListContainer>
  );
};

export default OriginalContentList;
