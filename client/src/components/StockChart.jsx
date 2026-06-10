import {
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function StockChart() {
  const data = [
    { price: 1500 },
    { price: 1510 },
    { price: 1495 },
    { price: 1525 },
    { price: 1540 },
    { price: 1530 },
    { price: 1542 },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="price"
          stroke="#22c55e"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default StockChart;