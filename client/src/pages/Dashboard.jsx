import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token =
          localStorage.getItem("token");

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
          }
        );

        setSummary(res.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold text-green-500 mb-8">
        TradeEdge Dashboard
      </h1>

      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Balance
            </h2>

            <p className="text-3xl font-bold">
              ₹{summary.balance}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Invested
            </h2>

            <p className="text-3xl font-bold">
              ₹{summary.investedAmount}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Total PnL
            </h2>

            <p className="text-3xl font-bold">
              ₹{summary.totalPnL}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Total Trades
            </h2>

            <p className="text-3xl font-bold">
              {summary.totalTrades}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Open Trades
            </h2>

            <p className="text-3xl font-bold">
              {summary.openTrades}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Closed Trades
            </h2>

            <p className="text-3xl font-bold">
              {summary.closedTrades}
            </p>
          </div>

        </div>
      )}

    </div>
  );
}

export default Dashboard;