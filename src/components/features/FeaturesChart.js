import React, { useEffect, useRef } from 'react';
import { Chart, LinearScale, CategoryScale, BarController, BarElement, Title } from 'chart.js';

Chart.register(LinearScale, CategoryScale, BarController, BarElement, Title);

const FeaturesChart = () => {
  const chartRef = useRef(null); // Reference to the chart container
  const chartInstance = useRef(null); // Reference to the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the existing chart instance before creating a new one
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Cattle', 'Pet', 'Goat/Sheep', 'Wildlife'],
        datasets: [
          {
            label: 'Body Temperature',
            data: [1, 1, 1, 1],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Heart Rate',
            data: [1, 1, 0, 1],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
          {
            label: 'SPO2',
            data: [0, 1, 0, 0],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: { 
            beginAtZero: true,
            max: 1, // As the data is binary (1 or 0)
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Health Parameters for Different Animals',
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return context.raw === 1 ? 'Yes' : 'No';
              }
            }
          }
        }
      }
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default FeaturesChart;
