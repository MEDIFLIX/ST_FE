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
        label: '대한민국에서 의사로 산다는 것',
        data: [401, 700, 323, 400, 500, 700],
        borderColor: '#D17777',
        backgroundColor: '#F36D74',
        borderWidth: 1,
        pointRadius: 2,
        tension: 0.4,
      },
      {
        label: '신경차단술의 모든 것',
        data: [600, 325, 400, 200, 150, 160, 310],
        borderColor: '#8C8FEC',
        backgroundColor: '#F9D2D4',
        borderWidth: 1,
        pointRadius: 2,
        tension: 0.4,
      },
      {
        label: 'EndoTODAY',
        data: [140, 350, 220, 250, 280, 260, 420],
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
            <div>1. 대한민국에서 의사로 산다는 것</div>
          </div>
          <div className="legendBox">
            <div className="lineChart_second" />
            <div>2. 신경차단술의 모든 것</div>
          </div>
          <div className="legendBox">
            <div className="lineChart_third" />
            <div>3. EndoTODAY</div>
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
