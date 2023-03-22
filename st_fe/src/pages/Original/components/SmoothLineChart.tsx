import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const LineChartOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
      // labels: {
      //   usePointStyle: true,
      // },
    },
    title: {
      display: false,
      text: '방문자 현황',
    },
  },
};

const LineChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 95%;
  height: 95%;
  margin-top: 10px;

  .lineChart_title {
    font-size: 16px;
    font-weight: bold;
    height: 38px;
  }

  .lineChart_Box {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .lineChart_labelBox {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .chartWrap {
    width: 378px;
    height: 200px;
  }

  .legendBox {
    font-size: 14px;
    display: flex;
    margin-bottom: 7px;
  }

  .lineChart_first {
    background-color: #f36d74;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin-right: 3px;
  }

  .lineChart_second {
    background-color: #f9d2d4;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin-right: 3px;
  }

  .lineChart_third {
    background-color: #a3aae7;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin-right: 3px;
  }
`;

const SmoothLineChart = () => {
  const labels = ['월', '화', '수', '목', '금', '토', '일'];

  const data = {
    labels,
    datasets: [
      {
        label: '신규 가입자 수',
        data: [20, 120, 60, 140, 100, 50, 70],
        borderColor: '#D17777',
        backgroundColor: '#F36D74',
        borderWidth: 1,
        pointRadius: 2,
        tension: 0.4,
      },
      {
        label: '방문자 수',
        data: [40, 140, 80, 160, 50, 60, 30],
        borderColor: '#8C8FEC',
        backgroundColor: '#F9D2D4',
        borderWidth: 1,
        pointRadius: 2,
        tension: 0.4,
      },
      {
        label: '방문자 수',
        data: [100, 10, 30, 65, 80, 60, 120],
        borderColor: '#8C8FEC',
        backgroundColor: '#A3AAE7',
        borderWidth: 1,
        pointRadius: 2,
        tension: 0.4,
      },
    ],
  };

  return (
    <LineChartContainer>
      <div className="lineChart_title">주간 조회수 인기영상 Top 3</div>
      <div className="lineChart_Box">
        <div className="lineChart_labelBox">
          <div className="legendBox">
            <div className="lineChart_first" />
            <div>1. 암의 주요한 특징 3가지</div>
          </div>
          <div className="legendBox">
            <div className="lineChart_second" />
            <div>2. 코로나 19 치료법</div>
          </div>
          <div className="legendBox">
            <div className="lineChart_third" />
            <div>3. 위산 억제제의 특징</div>
          </div>
        </div>
        <div className="chartWrap">
          <Line options={LineChartOptions} data={data} />
        </div>
      </div>
    </LineChartContainer>
  );
};

export default SmoothLineChart;
