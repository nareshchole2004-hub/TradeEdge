import { Link } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-green-500">
        TradeEdge
      </h1>

      <div className="flex items-center gap-6">

        <Link
          to="/dashboard"
          className="text-white hover:text-green-500"
        >
          Dashboard
        </Link>

        <Link
          to="/search"
          className="text-white hover:text-green-500"
        >
          Search
        </Link>

        <Link
          to="/portfolio"
          className="text-white hover:text-green-500"
        >
          Portfolio
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;