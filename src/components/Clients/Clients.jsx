import React from "react";
import "./Clients.css";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  {
    name: "John Smith",
    value: 40,
  },
  {
    name: "Christanio",
    value: 30,
  },
  {
    name: "Amazon",
    value: 15,
  },
  {
    name: "Others",
    value: 5,
  },
];

const COLORS = ["#2563eb", "#ef4444", "#22c55e", "#65bdf8"];

export default function Clients() {
  return (
    <>
      <div className="clients-container-dashboard">
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
