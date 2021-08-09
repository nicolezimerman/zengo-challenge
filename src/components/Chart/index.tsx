import { FunctionComponent } from "react";
import { ChartInfo } from "../../interfaces/interfaces";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps {
  chartInfo: ChartInfo[];
}

const Chart = ({ chartInfo }: ChartProps) => {
  return <LineChart
      width={350}
      height={200}
      data={chartInfo}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#82ca9d" />
    </LineChart>
};

export default Chart;
