import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RevenueOverview() {
  const data = [
    { month: "Jan", revenue: 25 },
    { month: "Feb", revenue: 18 },
    { month: "Mar", revenue: 38 },
    { month: "Apr", revenue: 52 },
    { month: "May", revenue: 30 },
    { month: "Jun", revenue: 42 },
    { month: "Jul", revenue: 14 },
    { month: "Aug", revenue: 56 },
    { month: "Sep", revenue: 25 },
    { month: "Oct", revenue: 14 },
    { month: "Nov", revenue: 5 },
    { month: "Dec", revenue: 0 },
  ];
  return (
    <>
      <div className="chart-card">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data}>
            <CartesianGrid stroke="#f1f5f9" vertical={false} />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="revenue" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
