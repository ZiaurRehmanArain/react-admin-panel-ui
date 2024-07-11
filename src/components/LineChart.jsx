import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,
} from "recharts";

const data = [
  {
    name: "20 jun",
    uv: 4,
    pv: 2000,
    amt: 0,
  },
  {
    name: "24 jun",
    uv: 0,
    pv: 2000,
    amt:0,
  },
  {
    name: "27 jun",
    uv: 0,
    pv: 2000,
    amt:0,
  },
  {
    name: "2 july",
    uv: 100,
    pv: -1000,
    amt:0,
  },
  {
    name: "4 july",
    uv: 0,
    pv: 500,
    amt:0,
  },
 
];

export default function LineCharts() {
  return (
    <LineChart width={500} height={300} data={data} className="">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <ReferenceLine y={5000}   ifOverflow="extendDomain" />
      <ReferenceLine
        segment={[
          {
            x: "Page A",
            y: 100,
          },
          {
            x: "Page B",
            y: 1000,
          },
        ]}
        ifOverflow="extendDomain"
      />
      <ReferenceDot x="Page A" y={1000} ifOverflow="discard" />
      <ReferenceArea
        x1="Page D"
        x2="Page E"
        y1={1000}
        y2={-1000}
        ifOverflow="visible"
      />
    </LineChart>
  );
}
