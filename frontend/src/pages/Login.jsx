import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      })
      console.log(response.data);
      localStorage.setItem("token", response.data.token)
      navigate('/')

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <form onSubmit={handlesubmit} className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96 border border-gray-700/50">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Welcome Back</h2>
        <p className="text-center text-gray-400 mb-8">Login to your account</p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full p-3 mb-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 transition"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mb-6 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 transition"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105 shadow-lg"
        >
          Login
        </button>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Don't have an account? <span className="text-purple-400 cursor-pointer hover:underline">Signup</span>
        </p>
      </form>
    </div>
  );
}

export default LoginPage