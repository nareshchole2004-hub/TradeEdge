import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-xl shadow-xl">

        <h1 className="text-4xl font-bold text-center text-green-500">
          TradeEdge
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Create Your Account
        </p>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
          />

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
            Register
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-green-500"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;