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

export const options = {
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
      position: 'top' as const,
      // labels: {
      //   usePointStyle: true,
      // },
    },
    title: {
      display: true,
      text: '방문자 현황',
    },
  },
};

const labels = ['03.16', '03.17', '03.18', '03.19', '03.20', '03.21', '03.22'];

export const data = {
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

function LineChart() {
  return <Line options={options} data={data} />;
}

export default LineChart;
