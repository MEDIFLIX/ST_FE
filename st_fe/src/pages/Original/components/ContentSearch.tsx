import { Search } from '@mui/icons-material';
import { Box, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ContentSearchContainer = styled.div`
  width: 95%;
  height: 100%;

  .original_buttonBox {
    display: flex;
    width: 40%;
    justify-content: space-between;
  }
`;

const ButtonLabel = styled.button`
  border: none;
  border-radius: 5px;
  width: 61px;
  height: 21px;
  padding: 7px;
  line-height: 10px;
  cursor: pointer;
  background-color: '#EFEAEA';
  &.active {
    background-color: #e31e26;
    color: white;
  }
`;

const ContentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .contentList_title {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0px;
  }
  .contentList_LabelBox {
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
  div:nth-child(7) {
    flex: 1;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 350px;
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
  div:nth-child(7) {
    flex: 1;
  }
  .contentList_imgBox {
    width: 120px;
    height: 65px;
  }
`;

type AdminLabelProp = {
  backgroundColor: string;
};

const AdminLabel = styled.div<AdminLabelProp>`
  width: 59px;
  height: 25px;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  color: #ffffff;
  font-size: 13px;
  line-height: 28px;
  margin: 0 auto;
`;

type DataProp = {
  prior: number;
  img: string;
  title: string;
  number: number;
  diffRate: string;
  management: string;
};

type ButtonLabels = {
  title: string;
  id: string;
  clicked: boolean;
};

const buttonLabelData = [
  {
    title: '조회수별',
    id: '1',
    clicked: false,
  },
  {
    title: '업로드순',
    id: '2',
    clicked: false,
  },
  {
    title: '관리요함',
    id: '3',
    clicked: false,
  },
  {
    title: '신경요함',
    id: '4',
    clicked: false,
  },
  {
    title: '성과진행',
    id: '5',
    clicked: false,
  },
];

const ContentSearch = () => {
  const [fulldata, setFullData] = useState([
    {
      prior: 1,
      img: '/img/썸네일1.png',
      title: '제목',
      number: 20123,
      diffRate: '10%',
      management: '관리요함',
    },
    {
      prior: 2,
      img: '/img/썸네일2.png',
      title: '제목',
      number: 2001,
      diffRate: '10%',
      management: '신경요함',
    },
    {
      prior: 2,
      img: '/img/썸네일3.png',
      title: '제목',
      number: 20,
      diffRate: '10%',
      management: '성과진행',
    },
    {
      prior: 2,
      img: '/img/썸네일4.png',
      title: '제목',
      number: 2024,
      diffRate: '10%',
      management: '관리요함',
    },
    {
      prior: 2,
      img: '/img/썸네일5.png',
      title: '제목',
      number: 2005,
      diffRate: '10%',
      management: '관리요함',
    },
    {
      prior: 2,
      img: '/img/썸네일6.png',
      title: '제목',
      number: 2007,
      diffRate: '10%',
      management: '성과진행',
    },
    {
      prior: 2,
      img: '/img/썸네일7.png',
      title: '제목',
      number: 200,
      diffRate: '10%',
      management: '신경요함',
    },
  ]);

  const [showData, setShowData] = useState<DataProp[]>([]);
  const [buttonLabel, setButtonLabel] = useState<ButtonLabels[]>([]);

  useEffect(() => {
    setShowData(fulldata);
    setButtonLabel(buttonLabelData);
  }, []);

  const hanldleViewClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentId = e.currentTarget.id;
    setButtonLabel((current) =>
      current.map(({ title, id, clicked }) => {
        if (id === currentId && clicked === false) {
          return { title, id, clicked: true };
        } else return { title, id, clicked: false };
      }),
    );
  };

  return (
    <ContentSearchContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          maxWidth: '100%',
          flex: 1,
          margin: '10px',
          borderRadius: '10px',
        }}
      >
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="콘텐츠를 검색하세요"
          type="search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <div className="original_buttonBox">
        {buttonLabel.map(({ title, id, clicked }) => (
          <ButtonLabel id={id} className={clicked ? 'active' : ''} onClick={hanldleViewClick}>
            {title}
          </ButtonLabel>
        ))}
      </div>
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
          {showData.map(({ prior, img, title, number, diffRate, management }) => (
            <ContentBox>
              <div>{prior}</div>
              <div className="contentList_imgBox">
                <img src={img} alt="img" />
              </div>
              <div>{title}</div>
              <div>날짜</div>
              <div>{`${number}회`}</div>
              <div>{diffRate}</div>
              {management === '관리요함' ? (
                <div className="contentList_LabelBox">
                  <AdminLabel backgroundColor="#FC3838">관리요함</AdminLabel>
                </div>
              ) : management === '신경요함' ? (
                <div className="contentList_LabelBox">
                  <AdminLabel backgroundColor="#FCD138">신경요함</AdminLabel>
                </div>
              ) : (
                <div className="contentList_LabelBox">
                  <AdminLabel backgroundColor="#33864A">성과진행</AdminLabel>
                </div>
              )}
            </ContentBox>
          ))}
        </ContentContainer>
      </ContentListContainer>
    </ContentSearchContainer>
  );
};

export default ContentSearch;
