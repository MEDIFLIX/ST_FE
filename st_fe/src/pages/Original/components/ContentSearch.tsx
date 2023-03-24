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
    flex: 0.5;
  }
  div:nth-child(2) {
    flex: 1;
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
    flex: 0.5;
  }

  div:nth-child(2) {
    flex: 1;
    margin-top: 7px;
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
  date: string;
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
  const [fullData, setfullData] = useState([
    {
      prior: 1,
      img: '/img/썸네일순위1.png',
      title: '대한민국에서 의사로 산다는 것',
      number: 3023,
      date: '2021-10-15',
      diffRate: '-5%',
      management: '관리요함',
    },
    {
      prior: 2,
      img: '/img/썸네일순위2.png',
      title: '신경차단술의 모든 것',
      number: 2145,
      date: '2022-07-12',
      diffRate: '2%',
      management: '신경요함',
    },
    {
      prior: 3,
      img: '/img/썸네일순위3.png',
      title: 'EndoTODAY',
      number: 1923,
      date: '2022-09-10',
      diffRate: '11%',
      management: '성과진행',
    },
    {
      prior: 4,
      img: '/img/썸네일순위4.png',
      title: '대가의 진료실',
      number: 1798,
      date: '2021-10-16',
      diffRate: '7%',
      management: '성과진행',
    },
    {
      prior: 5,
      img: '/img/썸네일순위5.png',
      title: '대답하기 애매한 "뭐 먹으면 좋나요?"',
      number: 1545,
      date: '2022-05-11',
      diffRate: '-1%',
      management: '신경요함',
    },
    {
      prior: 6,
      img: '/img/썸네일순위6.png',
      title: '유로퀴즈 온더 블럭!',
      number: 1478,
      date: '2022-06-20',
      diffRate: '13%',
      management: '성과진행',
    },
    {
      prior: 7,
      img: '/img/썸네일순위7.png',
      title: '이민영 원장과 함께하는 울트라 소닉 웨이브',
      number: 1245,
      date: '2022-02-24',
      diffRate: '-6%',
      management: '관리요함',
    },
    {
      prior: 8,
      img: '/img/썸네일순위8.png',
      title: '똑같은 형태의 당뇨병일 가진 사람은 결코 없다',
      number: 978,
      date: '2021-09-27',
      diffRate: '-11%',
      management: '관리요함',
    },
    {
      prior: 9,
      img: '/img/썸네일순위9.png',
      title: '의로운 클라쓰 -심장내과 편-',
      number: 784,
      date: '2022-01-27',
      diffRate: '2%',
      management: '신경요함',
    },
  ]);

  const [showData, setShowData] = useState<DataProp[]>([]);
  const [buttonLabel, setButtonLabel] = useState<ButtonLabels[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    setShowData(fullData);
    setButtonLabel(buttonLabelData);
  }, []);

  const buttonLabelChange = (currentId: string) => {
    setButtonLabel((current) =>
      current.map(({ title, id, clicked }) => {
        if (id === currentId && clicked === false) {
          return { title, id, clicked: true };
        } else return { title, id, clicked: false };
      }),
    );
  };

  const dateToNumber = (date: string) => {
    const dateArr = date.split('-');
    const dateString = dateArr.reduce((acc, cur) => (acc += cur), '');
    return Number(dateString);
  };

  const hanldleViewClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentId = e.currentTarget.id;
    buttonLabelChange(currentId);
  };

  useEffect(() => {
    const clickedIdx = buttonLabel.findIndex((button) => button.clicked);

    if (clickedIdx === -1) {
      setShowData(fullData);
    } else if (clickedIdx === 0) {
      setShowData(() => {
        const copy = [...fullData];
        return copy.sort((a, b) => b.number - a.number);
      });
    } else if (clickedIdx === 1) {
      setShowData(() => {
        const copy = [...fullData];
        return copy.sort((a, b) => dateToNumber(a.date) - dateToNumber(b.date));
      });
    } else if (clickedIdx === 2) {
      setShowData(fullData.filter((data) => data.management === '관리요함'));
    } else if (clickedIdx === 3) {
      setShowData(fullData.filter((data) => data.management === '신경요함'));
    } else if (clickedIdx === 4) {
      setShowData(fullData.filter((data) => data.management === '성과진행'));
    }
  }, [buttonLabel]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (searchValue === '') {
      setShowData(fullData);
    } else {
      setShowData(() => fullData.filter((data) => data.title.includes(searchValue)));
    }
  }, [searchValue]);

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
          onChange={handleSearchChange}
          value={searchValue}
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
          {showData.map(({ prior, img, title, number, date, diffRate, management }) => (
            <ContentBox>
              <div>{prior}</div>
              <div className="contentList_imgBox">
                <img src={img} alt="img" />
              </div>
              <div>{title}</div>
              <div>{date}</div>
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
