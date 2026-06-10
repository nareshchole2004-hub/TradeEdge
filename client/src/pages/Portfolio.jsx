import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Portfolio() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/portfolio",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setPortfolio(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="p-8">

        <h1 className="text-4xl font-bold text-green-500 mb-8">
          Portfolio
        </h1>

        {portfolio && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-gray-400">
                Balance
              </h2>

              <p className="text-3xl font-bold">
                ₹{portfolio.balance}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-gray-400">
                Invested Amount
              </h2>

              <p className="text-3xl font-bold">
                ₹{portfolio.investedAmount}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-gray-400">
                Total PnL
              </h2>

              <p
                className={`text-3xl font-bold ${
                  portfolio.totalPnL >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                ₹{portfolio.totalPnL}
              </p>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default Portfolio;