import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [trades, setTrades] = useState([]);


  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          window.location.href = "/";
          return;
        }

        const res = await axios.get(
          "http://localhost:5000/api/dashboard/summary",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setSummary(res.data);

        const tradesRes = await axios.get("http://localhost:5000/api/trades", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTrades(tradesRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="p-8">
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-gray-400">Balance</h2>

              <p className="text-3xl font-bold">₹{summary.balance}</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-gray-400">Invested</h2>

              <p className="text-3xl font-bold">₹{summary.investedAmount}</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-gray-400">Total PnL</h2>

              <p
                className={`text-3xl font-bold ${
                  summary.totalPnL >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                ₹{summary.totalPnL}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-gray-400">Total Trades</h2>

              <p className="text-3xl font-bold">{summary.totalTrades}</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-gray-400">Open Trades</h2>

              <p className="text-3xl font-bold text-green-500">
                {summary.openTrades}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-gray-400">Closed Trades</h2>

              <p className="text-3xl font-bold text-red-500">
                {summary.closedTrades}
              </p>
            </div>
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Recent Trades</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="p-3 text-left">Symbol</th>

                  <th className="p-3 text-left">Qty</th>

                  <th className="p-3 text-left">Buy Price</th>

                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {trades.map((trade) => (
                  <tr key={trade._id} className="border-b border-slate-800">
                    <td className="p-3">{trade.symbol}</td>

                    <td className="p-3">{trade.quantity}</td>

                    <td className="p-3">₹{trade.buyPrice}</td>

                    <td
                      className={`p-3 font-semibold ${
                        trade.status === "OPEN"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {trade.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
