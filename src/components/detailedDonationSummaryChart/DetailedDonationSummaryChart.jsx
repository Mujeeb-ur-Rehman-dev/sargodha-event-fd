import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// ----- DUMMY DATA (array of objects) -----
const machineData = [
  {
    name: "USG Machine Aplio 400 Platinum (Refurb)",
    targeted: 2000000,
    collected: 2500000,
  },
  {
    name: "X-Ray Machine EXO-50R (Toshiba Japan 630 mA)",
    targeted: 3500000,
    collected: 0,
  },
  {
    name: "ECG 3 Channel",
    targeted: 100000,
    collected: 100000,
  },
  {
    name: "OPG Veraview (Japan)",
    targeted: 2000000,
    collected: 0,
  },
  {
    name: "CT Scan 64 Slices Toshiba (Japan) with Accessories",
    targeted: 30000000,
    collected: 5500000,
  },
  {
    name: "0.4 Tesla Hitachi MRI (Refurb)",
    targeted: 57500000,
    collected: 5500000,
  },
  {
    name: "ECHO Machine – Paolus Plus (Japan)",
    targeted: 900000,
    collected: 0,
  },
].map((item) => ({
  ...item,
  remaining: Math.max(item.targeted - item.collected, 0),
}));

const formatNumber = (n) => n.toLocaleString();

const DetailedDonationSummaryChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: "linear-gradient(90deg,#2f2f2f,#4a4a4a)",
        padding: 16,
      }}
    >
      <h3
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: 8,
          letterSpacing: 1,
        }}
      >
        Detailed Summary
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={machineData}
          margin={{ top: 20, right: 30, left: 40, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#777" />
          <XAxis
            dataKey="name"
            stroke="#fff"
            interval={0}
            angle={-40}
            textAnchor="end"
            height={80}
          />
          <YAxis
            stroke="#fff"
            tickFormatter={formatNumber}
          />
          <Tooltip
            formatter={(value) => formatNumber(value)}
            contentStyle={{
              backgroundColor: "#222",
              border: "none",
              color: "#fff",
            }}
          />
          <Legend
            wrapperStyle={{ color: "#fff" }}
          />

          {/* Targeted (Blue) */}
          <Bar dataKey="targeted" name="Targeted" fill="#0074b8">
            <LabelList
              dataKey="targeted"
              position="top"
              formatter={formatNumber}
              style={{ fill: "#fff", fontSize: 11 }}
            />
          </Bar>

          {/* Collected (Yellow/Orange) */}
          <Bar dataKey="collected" name="Collected" fill="#f5a623">
            <LabelList
              dataKey="collected"
              position="top"
              formatter={formatNumber}
              style={{ fill: "#fff", fontSize: 11 }}
            />
          </Bar>

          {/* Remaining (Green) */}
          <Bar dataKey="remaining" name="Remaining" fill="#2e8b57">
            <LabelList
              dataKey="remaining"
              position="top"
              formatter={formatNumber}
              style={{ fill: "#fff", fontSize: 11 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DetailedDonationSummaryChart;