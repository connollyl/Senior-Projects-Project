import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid,
} from 'recharts';

type Props = {
  data: any,
  width: Number,
  height: Number,
};

const Linechart = (props: Props) => {
  const {
    data,
    width,
    height,
  } = props;
  const marginStyles = {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  };
  return (
    <div>
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={marginStyles}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export { Linechart };
