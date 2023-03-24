import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import type { ContentData } from '../MainPage';

const AnalysisContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 25px;

  .analysis_title {
    font-size: '16px';
    font-weight: bold;
    margin-bottom: 5px;
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
  padding: 5px 0px;
`;

const Circle = styled.div`
  background-color: #e31e26;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0px 10px;
`;

const DateContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 14px;
`;

type DateProps = {
  backgroundColor: string;
};

const Date = styled.button<DateProps>`
  width: 45px;
  height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  cursor: pointer;
  border: none;

  .day {
    font-size: 13px;
  }

  .date {
    font-size: 15px;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  width: 100%;
  height: 50%;
  margin-top: 13px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
  grid-gap: 9px;
`;

const ContentBox = styled.div`
  background-color: #fbf7f7;
  width: 100%;
  border-radius: 10px;

  .content_wrap {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    padding: 10px;
  }

  .content_title {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .content_icon {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .content_people {
    font-size: 23px;
    font-weight: bold;
  }
`;

type DateInfo = {
  day: string;
  date: number;
  clicked: boolean;
};

type AnalysisProps = {
  contentData: ContentData[];
};

type CurrentDayInfo = {
  title: string;
  people: number;
};

const Analysis = ({ contentData }: AnalysisProps) => {
  const [dateInfo, setDateInfo] = useState<DateInfo[]>([]);
  const [currentDayInfo, setCurrentDayInfo] = useState<CurrentDayInfo[]>([
    { title: '당일 콘텐츠 조회수', people: contentData[0].dayContent },
    { title: '총 방문자 수', people: contentData[0].totalVisit },
    { title: '신규 가입자 수', people: contentData[0].newVisit },
    { title: '탈퇴 회원 수', people: contentData[0].withdrawalNum },
  ]);

  const handleDateBtn = (e: React.MouseEvent) => {
    const [id, curIdxStr] = e.currentTarget.id.split('-');
    const curIdx = parseInt(curIdxStr);
    setDateInfo((current) => {
      const newDateInfo = current.map(({ day, date, clicked }) => {
        if (day === id) {
          return { day, date, clicked: true };
        } else return { day, date, clicked: false };
      });

      return newDateInfo;
    });

    handleCurrentDayInfo(curIdx);
  };

  const handleCurrentDayInfo = (idx: number) => {
    setCurrentDayInfo((current) => {
      const { totalVisit, newVisit, dayContent, withdrawalNum } = contentData[idx];

      return current.map(({ title }, idx) => {
        if (idx === 0) return { title, people: dayContent };
        else if (idx === 1) return { title, people: totalVisit };
        else if (idx === 2) return { title, people: newVisit };
        else return { title, people: withdrawalNum };
      });
    });
  };

  useEffect(() => {
    setDateInfo(() =>
      contentData.map((data, idx) => {
        const currentDate = parseInt(data.date.split('.')[1]);

        return idx === 0
          ? { day: data.day, date: currentDate, clicked: true }
          : { day: data.day, date: currentDate, clicked: false };
      }),
    );
  }, []);

  return (
    <AnalysisContainer>
      <div className="analysis_title">주간 방문자 분석</div>
      <Bar>
        <Circle />
        <div>March 2023</div>
      </Bar>
      <DateContainer>
        {dateInfo.map(({ day, date, clicked }, idx) =>
          clicked ? (
            <Date backgroundColor="#E1ACAC" onClick={handleDateBtn} id={`${day}-${idx}`} key={day}>
              <div className="day">{day}</div>
              <div className="date">{date}</div>
            </Date>
          ) : (
            <Date backgroundColor="#F9E5E5" onClick={handleDateBtn} id={`${day}-${idx}`} key={day}>
              <div className="day">{day}</div>
              <div className="date">{date}</div>
            </Date>
          ),
        )}
      </DateContainer>
      <ContentContainer>
        {currentDayInfo.map(({ title, people }) => (
          <ContentBox>
            <div className="content_wrap">
              <div className="content_title">{title}</div>
              <div className="content_icon">
                <PersonIcon />
                <div className="content_people">{people}</div>
              </div>
            </div>
          </ContentBox>
        ))}
      </ContentContainer>
    </AnalysisContainer>
  );
};

export default Analysis;
