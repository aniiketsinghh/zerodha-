import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isSignup
        ? "http://localhost:5001/api/auth/signup"
        : "http://localhost:5001/api/auth/login";

      const response = await axios.post(
        endpoint,
        form,
        { withCredentials: true } // 👈 important for cookies
      );

      console.log("✅ Success:", response);

      // redirect after success
       if (response.status === 200||response.status===201) {
        // ✅ Redirect to dashboard app
        window.location.href = "http://localhost:5174/"; // dashboard ka URL (vite default port)
      }

    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left/Text Section */}
      <motion.div
        key={isSignup ? "signup-text" : "login-text"}
        initial={{ opacity: 0, x: isSignup ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isSignup ? 100 : -100 }}
        transition={{ duration: 0.7 }}
        className="w-1/2 hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 relative shadow-2xl"
      >
        <AnimatePresence mode="wait">
          {isSignup ? (
            <motion.div
              key="signup"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="max-w-md text-center space-y-4"
            >
              <h1 className="text-4xl font-bold">Welcome to PhereXTrade 🚀</h1>
              <p className="text-lg text-blue-100">
                Join India’s smartest trading platform built with modern MERN stack.
                Trade smarter, faster, and more confidently.
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="trading"
                className="w-32 mx-auto mt-4 drop-shadow-lg"
              />
            </motion.div>
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="max-w-md text-center space-y-4"
            >
              <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
              <p className="text-lg text-blue-100">
                Log in to continue trading with PhereXTrade and track your portfolio.
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                alt="login"
                className="w-32 mx-auto mt-4 drop-shadow-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Right/Form Section */}
      <motion.div
        key={isSignup ? "signup-form" : "login-form"}
        initial={{ opacity: 0, x: isSignup ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isSignup ? -100 : 100 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-5 px-6 sm:px-10"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>

          {isSignup && (
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          )}

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition-all"
          >
            {loading ? "Please wait..." : isSignup ? "Sign Up" : "Login"}
          </button>

          <p className="text-center text-sm text-gray-600">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignup(false)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Log In
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignup(true)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Sign Up
                </button>
              </>
            )}
          </p>
        </form>
      </motion.div>
    </div>
  );
}
