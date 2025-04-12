
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type BarChartProps = {
  title: string;
  data: any[];
  bars: {
    dataKey: string;
    color: string;
    name: string;
  }[];
  layout?: 'vertical' | 'horizontal';
  dataKeyAxis?: string;
};

const BarChart = ({ title, data, bars, layout = 'horizontal', dataKeyAxis = 'name' }: BarChartProps) => {
  return (
    <Card className="bg-dashboard-card-bg border-none">
      <CardHeader className="pb-0">
        <CardTitle className="text-md text-gray-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {layout === 'horizontal' ? (
              <RechartsBarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                <XAxis dataKey={dataKeyAxis} stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    borderColor: '#4a5568',
                    color: '#e2e8f0'
                  }} 
                />
                <Legend />
                {bars.map((bar, index) => (
                  <Bar
                    key={index}
                    dataKey={bar.dataKey}
                    fill={bar.color}
                    name={bar.name}
                  />
                ))}
              </RechartsBarChart>
            ) : (
              <RechartsBarChart
                layout="vertical"
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 100,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" horizontal={false} />
                <XAxis type="number" stroke="#718096" />
                <YAxis dataKey={dataKeyAxis} type="category" stroke="#718096" width={90} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    borderColor: '#4a5568',
                    color: '#e2e8f0'
                  }} 
                />
                <Legend />
                {bars.map((bar, index) => (
                  <Bar
                    key={index}
                    dataKey={bar.dataKey}
                    fill={bar.color}
                    name={bar.name}
                  />
                ))}
              </RechartsBarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChart;
