import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

ChartJS.defaults.font.size = 10;

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scaleShowGridLines: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const BarChartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 90%;

  .barContent_header {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .barContent_container {
    display: flex;
    justify-content: space-around;
  }

  .barChartWrap {
    width: 284px;
    height: 125px;
  }
`;

const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RankBox = styled.div`
  display: flex;
  background-color: #fbf7f7;
  width: 162px;
  height: 25px;
  border: 1px solid #d6cece;
  text-align: center;
  line-height: 29px;
  font-size: 13px;

  .rank_priority {
    border-right: 1px solid #d6cece;
    width: 36px;
  }

  .rank_name {
    margin-left: 9px;
  }
`;

const BarChart = () => {
  const barChartData = [
    { title: '의로운 클라쓰', value: 2341 },
    { title: 'KDW', value: 1234 },
    { title: '소화기 내과', value: 4134 },
    { title: '엔터테인먼트', value: 1764 },
  ];
  const labels = barChartData.map((data) => data.title);
  const dataValue = barChartData.map((data) => data.value);
  const copy = [...barChartData];
  const sortedLabels = copy.sort((a, b) => b.value - a.value).map((data) => data.title);

  const data = {
    labels,
    datasets: [
      {
        label: '가장 인기 있는 콘텐츠 종류',
        data: dataValue,
        backgroundColor: ['#B85E5E', '#E1ACAC', '#E31E26', '#FFDEDE'],
        barPercentage: 1,
        barThickness: 18,
      },
    ],
  };

  return (
    <BarChartContainer>
      <div className="barContent_header">가장 인기 있는 콘텐츠 종류</div>
      <div className="barContent_container">
        <div className="barChartWrap">
          <Bar options={options} data={data} />
        </div>
        <RankContainer>
          {sortedLabels.map((name, idx) => (
            <RankBox>
              <div className="rank_priority">{idx + 1}</div>
              <div className="rank_name">{name}</div>
            </RankBox>
          ))}
        </RankContainer>
      </div>
    </BarChartContainer>
  );
};

export default BarChart;
