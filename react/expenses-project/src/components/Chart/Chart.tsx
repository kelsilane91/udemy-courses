import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
import { ChartDataPoint } from "../../types/ChartDataPoint";

type Props = {
  chartDataPoints: ChartDataPoint[];
};
const Chart = ({ chartDataPoints }: Props) => {
  const amounts = chartDataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...amounts);
  console.log(chartDataPoints);
  return (
    <div className="chart">
      {chartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
