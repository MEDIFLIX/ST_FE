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
      position: 'top' as const,
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
  height: 29px;
  border: 1px solid #d6cece;
  text-align: center;
  line-height: 29px;

  .rank_priority {
    border-right: 1px solid #d6cece;
    width: 36px;
  }

  .rank_name {
    margin-left: 9px;
  }
`;

const BarChart = () => {
  const labels = ['ORIGINAL', 'VOD', 'DRUG', 'LIFE'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [300, 200, 500, 150],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <BarChartContainer>
      <div className="barContent_header">콘텐츠 누적 조회수 비교표</div>
      <div className="barContent_container">
        <div className="barChartWrap">
          <Bar options={options} data={data} />
        </div>
        <RankContainer>
          {labels.map((name, idx) => (
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
