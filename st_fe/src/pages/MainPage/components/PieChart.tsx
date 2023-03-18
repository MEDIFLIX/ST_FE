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

  .pieChart_box {
    display: flex;
    justify-content: space-evenly;
  }

  .pie_wrap {
    width: 170px;
    height: 170px;
    display: flex;
  }

  .legendContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .legendBox:nth-of-type(1) > span {
      background-color: #edd2d1;
    }
    .legendBox:nth-of-type(2) > span {
      background-color: #ea5250;
    }
    .legendBox:nth-of-type(3) > span {
      background-color: #5e0807;
    }
    .legendBox:nth-of-type(4) > span {
      background-color: #a8110f;
    }
  }

  .legendBox {
    display: flex;

    .legendLabel {
      width: 12px;
      height: 12px;
      border-radius: 2px;
      margin-right: 3px;
    }
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
        backgroundColor: ['#EDD2D1', '#EA5250', '#5E0807', '#A8110F'],
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

  const labelData = ['키워드 검색', '인스타그램', '페이스 북', '기타'];

  return (
    <PieChartContainer>
      <div className="pieChart_title">유입 현황 분석</div>
      <div className="pieChart_box">
        <div className="pie_wrap">
          <Pie data={data} options={options} />
        </div>
        <div className="legendContainer">
          {labelData.map((val, idx) => (
            <div className="legendBox">
              <span className="legendLabel"></span>
              <div>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </PieChartContainer>
  );
};

export default PieChart;