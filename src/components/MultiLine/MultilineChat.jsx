import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";
import "./style.css";

export default function MultilineChat({ data }) {
  console.log(data);
  if (data.length > 0) {
    return (
      <div className="multiline-block">
        <ResponsiveContainer>
          <LineChart
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="EUR" stroke="#8884d8" />
            <Line type="monotone" dataKey="USD" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  return <div>Loading</div>;
}
