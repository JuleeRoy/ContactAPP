import React, { useState, useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import axios from 'axios';

function Graph() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let chart = null;
    if (data && Object.keys(data).length > 0) {
      const chartData = {
        labels: Object.keys(data.cases),
        datasets: [
          {
            label: 'Total Cases',
            data: Object.values(data.cases),
            borderColor: '#6600FF',
            fill: false
          }
        ]
      };
      const ctx = document.getElementById('myChart');
      if (Chart.instances.length > 0) {
        chart = Chart.instances[0];
        chart.destroy();
      }
      chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            line: {
              borderColor: 'blue'
            }
          },
          backgroundColor: 'white'
        }
      });
    }
    return () => {
      if (chart !== null) {
        chart.destroy();
      }
    };
  }, [data]);
  
  return (
    <div className='flex-initial w-[75%] p-4 rounded-lg border border-slate'>
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default Graph;
