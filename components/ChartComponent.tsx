import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts';

interface ChartProps {
  type: 'line' | 'bar';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  config?: {
    dataKey: string;
    color: string;
  }[];
}

export default function ChartComponent({ type, data, config }: ChartProps) {
  if (type === 'line') {
    return (
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {config?.map((lineConfig, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={lineConfig.dataKey}
            stroke={lineConfig.color}
          />
        ))}
      </LineChart>
    );
  }

  if (type === 'bar') {
    return (
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {config?.map((barConfig, index) => (
          <Bar
            key={index}
            dataKey={barConfig.dataKey}
            fill={barConfig.color}
          />
        ))}
      </BarChart>
    );
  }

  return null;
}
