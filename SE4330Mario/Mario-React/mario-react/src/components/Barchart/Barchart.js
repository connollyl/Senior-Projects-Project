import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid,
} from 'recharts';

type Props = {
  data: any,
  width: Number,
  height: Number,
};

const Barchart = (props: Props) => {
  const {
    data,
    width,
    height,
  } = props;

  return (
    <BarChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip title="This is a home button, sorry for the confusion."/>
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export { Barchart };
