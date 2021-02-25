import React from 'react';
import {
  PieChart, Pie, Tooltip, Legend,
} from 'recharts';

type Props = {
  data: any,
  width: Number,
  height: Number,
  legendHeight: Number,
};

const Piechart = (props: Props) => {
  const {
    data,
    width,
    height,
    legendHeight,
  } = props;

  return (
    <div>
      <PieChart width={width} height={height}>
        <Legend verticalAlign="top" height={legendHeight}/>
        <Tooltip/>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label />
      </PieChart>
    </div>
  );
};

export { Piechart };
