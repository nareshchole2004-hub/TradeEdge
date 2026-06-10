import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import StockChart from "../components/StockChart";

function StockDetails() {
  const { symbol } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="p-6 max-w-8xl mx-auto">

        {/* Stock Header */}
        <div className="mb-4">

          <h1 className="text-3xl font-bold text-green-500">
            {symbol}
          </h1>

          <p className="text-4xl font-bold mt-2">
            ₹1542.50
          </p>

          <p className="text-green-500 text-lg mt-1">
            +23.50 (+1.55%)
          </p>

          <p className="text-gray-400 mt-2">
            NSE
          </p>

        </div>

        {/* Chart Section */}
        <div className="relative bg-slate-900 rounded-xl p-6 mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Price Chart
          </h2>

          <StockChart />

          <button
            onClick={() =>
              window.open(
                `https://www.tradingview.com/chart/?symbol=NSE:${symbol}`,
                "_blank"
              )
            }
            className="absolute bottom-4 right-4 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg"
          >
            ⛶
          </button>

        </div>

        {/* Buy Sell Buttons */}
        <div className="flex gap-4 mb-8">

          <button className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-xl font-bold text-lg">
            BUY
          </button>

          <button className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-bold text-lg">
            SELL
          </button>

        </div>

        {/* Stock Information */}
        <div className="bg-slate-900 rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Stock Information
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b border-slate-800 pb-3">
              <span>52 Week High</span>
              <span className="text-green-500 font-semibold">
                ₹1608
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-3">
              <span>52 Week Low</span>
              <span className="text-red-500 font-semibold">
                ₹1215
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-3">
              <span>Open</span>
              <span>₹1535</span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-3">
              <span>Day High</span>
              <span>₹1548</span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-3">
              <span>Day Low</span>
              <span>₹1528</span>
            </div>

            <div className="flex justify-between">
              <span>Previous Close</span>
              <span>₹1519</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default StockDetails;