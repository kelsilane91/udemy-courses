import React from "react";
import { ChartDataPoint } from "../../types/ChartDataPoint";
import "./ChartBar.css";

type Props = ChartDataPoint & {
  maxValue: number;
};
const ChartBar = ({ value, maxValue, label }: Props) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  console.log(barFillHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
