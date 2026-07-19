import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function RevenueChart() {
  const data = [
    { month: "Jan", revenue: 4000, expense: 2500 },
    { month: "Feb", revenue: 3000, expense: 2200 },
    { month: "Mar", revenue: 5000, expense: 3500 },
    { month: "Apr", revenue: 4500, expense: 3000 },
    { month: "May", revenue: 3000, expense: 1500 },
    { month: "June", revenue: 3500, expense: 2200 },
    { month: "July", revenue: 1500, expense: 800 },
  ];
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="4 4" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#2563eb"
          strokeWidth={3}
        />

        <Line
          type="monotone"
          dataKey="expense"
          stroke="#16a34a"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
