"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 350 },
  { month: "Mar", value: 310 },
  { month: "Apr", value: 340 },
  { month: "May", value: 460 },
  { month: "Jun", value: 520 },
  { month: "Jul", value: 500 },
  { month: "Aug", value: 480 },
  { month: "Sep", value: 540 },
  { month: "Oct", value: 600 },
  { month: "Nov", value: 590 },
  { month: "Dec", value: 570 },
];

export default function UserChart() {
  return (
    <div className="w-full h-[420px] font-inter">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />

          <XAxis
            dataKey="month"
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            padding={{ left: 0, right: 10 }}
          />

          <YAxis
            width={30} // 🔥 this removes left gap
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ stroke: "#E5E7EB" }}
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#4F6BFF"
            strokeWidth={2.5}
            dot={{
              r: 4,
              fill: "#4F6BFF",
              stroke: "#4F6BFF",
              strokeWidth: 2,
            }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
