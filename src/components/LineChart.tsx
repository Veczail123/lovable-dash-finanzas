
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type LineChartProps = {
  title: string;
  data: any[];
  lines: {
    dataKey: string;
    color: string;
    name: string;
  }[];
};

const LineChart = ({ title, data, lines }: LineChartProps) => {
  return (
    <Card className="bg-dashboard-card-bg border-none">
      <CardHeader className="pb-0">
        <CardTitle className="text-md text-gray-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
              <XAxis dataKey="month" stroke="#718096" />
              <YAxis stroke="#718096" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  borderColor: '#4a5568',
                  color: '#e2e8f0'
                }} 
              />
              <Legend />
              {lines.map((line, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={line.dataKey}
                  stroke={line.color}
                  name={line.name}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChart;
