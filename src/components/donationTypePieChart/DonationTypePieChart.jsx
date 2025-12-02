import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Cash", value: 8500000 },
  { name: "Pledge", value: 2000000 },
];

const COLORS = ["#0074b8", "#f5a623"]; // Cash, Pledge

const DonationTypePieChart = () => {
  return (
    <section
      style={{
        width: "100vw",
        maxWidth: "100vw",
        height: 420,
        padding: 16,
        boxSizing: "border-box",
        background: "radial-gradient(circle, #4b4b4b 0, #2f2f2f 70%)",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#fff",
          marginTop: 4,
          marginBottom: 12,
          letterSpacing: 2,
          fontWeight: "700",
        }}
      >
        Donation Type wise Summary
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="70%"
            paddingAngle={1}
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) =>
              value.toLocaleString("en-PK", { maximumFractionDigits: 0 })
            }
            contentStyle={{
              backgroundColor: "#222",
              border: "none",
              color: "#fff",
            }}
          />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{ color: "#fff" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};

export default DonationTypePieChart;