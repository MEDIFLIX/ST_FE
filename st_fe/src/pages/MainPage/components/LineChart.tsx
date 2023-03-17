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
        display: false,
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
  justify-content: space-around;
  width: inherit;
  height: 330px;
  margin-top: 10px;

  .lineChart_title {
    font-size: 16px;
    font-weight: bold;
  }

  .chartWrap {
    width: 350px;
    height: 200px;
  }

  .legendBox {
    font-size: 8px;
    display: flex;
    margin-bottom: 7px;
  }

  .lineChart_newPeople {
    background-color: #f9d2d4;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin-right: 3px;
  }

  .lineChart_newVisit {
    background-color: #c5d7f9;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin-right: 3px;
  }
`;

const LineChart = () => {
  const labels = ['03.16', '03.17', '03.18', '03.19', '03.20', '03.21', '03.22'];

  const data = {
    labels,
    datasets: [
      {
        label: '신규 가입자 수',
        fill: true,
        data: [20, 80, 60, 140, 100, 50, 60, 70],
        borderColor: '#D17777',
        backgroundColor: 'rgba(227,30,38,0.2)',
        borderWidth: 0.5,
        pointRadius: 2,
      },
      {
        label: '방문자 수',
        fill: true,
        data: [40, 70, 20, 160, 50, 60, 30],
        borderColor: '#8C8FEC',
        backgroundColor: 'rgba(8,98,217,0.28)',
        borderWidth: 0.5,
        pointRadius: 2,
      },
    ],
  };

  return (
    <LineChartContainer>
      <div className="lineChart_title">방문자 현황</div>
      <div>
        <div className="legendBox">
          <div className="lineChart_newPeople" />
          <div>신규 가입자 수</div>
        </div>
        <div className="legendBox">
          <div className="lineChart_newVisit" />
          <div>방문자 수</div>
        </div>
      </div>
      <div className="chartWrap">
        <Line options={LineChartOptions} data={data} />
      </div>
    </LineChartContainer>
  );
};

export default LineChart;
