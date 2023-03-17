import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chart.piecelabel.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;

  .pieChart_title {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0px;
  }

  .pie_wrap {
    width: 170px;
    height: 170px;
  }
`;

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scaleShowGridLines: false,
  scales: {
    x: {
      display: false,
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
    labels: {
      render: 'value',
      fontColor: 'black',
      fontSize: 15,
      precision: 2,
    },
  },
  pieceLabel: {
    mode: 'value',
    position: 'outside',
    fontSize: 11,
    fontStyle: 'bold',
  },
};

const PieChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: '# of Votes',
        data: [610, 517, 782, 748],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <PieChartContainer>
      <div className="pieChart_title">유입 현황 분석</div>
      <div className="pie_wrap">
        <Pie data={data} options={options} />
      </div>
    </PieChartContainer>
  );
};

export default PieChart;
