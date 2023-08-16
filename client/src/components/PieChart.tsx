import React, { useState, useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';

export default function PieChart({ chartData }) {
  const [totalData, setTotalData] = useState({
    labels: ['Fat', 'Protein', 'Carbs'],
    datasets: [{
      label: 'Total',
      data: [chartData.fat, chartData.protein, chartData.carbs]
    }]
  });

  useEffect(() => {
    setTotalData({
      labels: ['Fat', 'Protein', 'Carbs'],
      datasets: [{
        label: 'Total',
        data: [chartData.fat, chartData.protein, chartData.carbs]
      }]
    });
  }, [chartData]);

  const chartContainerRef = React.createRef();
  const chartInstanceRef = React.createRef();

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartContainerRef.current.getContext('2d');
    chartInstanceRef.current = new ChartJS(ctx, {
      type: 'pie',
      data: totalData
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [totalData]);

  return (
    <canvas ref={chartContainerRef} />
  );
}
