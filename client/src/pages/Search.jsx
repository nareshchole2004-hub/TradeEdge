import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const stocks = [
    "RELIANCE",
    "TCS",
    "INFY",
    "HDFCBANK",
    "ICICIBANK",
    "SBIN",
    "BHARTIARTL",
    "LT",
    "TATAMOTORS",
    "ITC",
  ];

  const filteredStocks = stocks.filter((stock) =>
    stock.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold text-green-500 mb-8">Search Stocks</h1>

      <input
        type="text"
        placeholder="Search Stock..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-6"
      />

      <div className="space-y-3">
        {filteredStocks.map((stock) => (
          <div
            key={stock}
            onClick={() => navigate(`/stock/${stock}`)}
            className="bg-slate-900 p-4 rounded-xl hover:bg-slate-800 cursor-pointer"
          >
            {stock}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
