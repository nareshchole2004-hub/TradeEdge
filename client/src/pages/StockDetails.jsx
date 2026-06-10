import { useParams } from "react-router-dom";

function StockDetails() {
  const { symbol } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold text-green-500 mb-8">
        {symbol}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            Current Price
          </h2>

          <p className="text-3xl font-bold">
            ₹1542
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            52 Week High
          </h2>

          <p className="text-3xl font-bold text-green-500">
            ₹1608
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            52 Week Low
          </h2>

          <p className="text-3xl font-bold text-red-500">
            ₹1215
          </p>
        </div>

      </div>

      <div className="mt-8 flex gap-4">

        <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold">
          BUY
        </button>

        <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold">
          SELL
        </button>

      </div>

      <div className="mt-10 bg-slate-900 rounded-xl p-10 text-center">

        <h2 className="text-2xl font-bold mb-4">
          Chart Placeholder
        </h2>

        <p className="text-gray-400">
          TradingView Chart Coming Soon
        </p>

      </div>

    </div>
  );
}

export default StockDetails;