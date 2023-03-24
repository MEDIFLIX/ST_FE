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

  .legendContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .legendBox:nth-of-type(1) > span {
      background-color: #fc3838;
    }
    .legendBox:nth-of-type(2) > span {
      background-color: #fcd138;
    }
    .legendBox:nth-of-type(3) > span {
      background-color: #33864a;
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

type PieWrapType = {
  width: string;
  height: string;
};

const PieWrap = styled.div<PieWrapType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
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
};

interface IPieChart {
  title: string;
  pieWidth: string;
  pieHeight: string;
}

const OriginalPieChart = ({ title, pieWidth, pieHeight }: IPieChart) => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: '비율%',
        data: [33.3, 33.3, 33.3],
        backgroundColor: ['#FC3838', '#33864A', '#FCD138'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const labelData = ['관리요함', '신경요함', '성과진행'];

  return (
    <PieChartContainer>
      <div className="pieChart_title">{title}</div>
      <div className="pieChart_box">
        <PieWrap width={pieWidth} height={pieHeight}>
          <Pie data={data} options={options} />
        </PieWrap>
        <div className="legendContainer">
          {labelData.map((val, idx) => (
            <div className="legendBox">
              <span className="legendLabel"></span>
              <div>{val}%</div>
            </div>
          ))}
        </div>
      </div>
    </PieChartContainer>
  );
};

export default OriginalPieChart;
