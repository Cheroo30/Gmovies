import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors
    try {
      if (isSignUp) {
        // Handle Sign-Up
        await createUserWithEmailAndPassword(auth, email, password);
        setModalMessage("Sign-Up successful!");
      } else {
        // Handle Login
        await signInWithEmailAndPassword(auth, email, password);
        setModalMessage("Login successful!");
      }
      setShowModal(true);
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      setError("Failed to login. Please check your credentials.");
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setModalMessage("Logged in with Google successfully!");
      setShowModal(true);
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      setError("Failed to sign in with Google.");
      console.error("Error with Google sign-in:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Password"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            <FaGoogle className="w-5 h-5 mr-2" /> {/* Google icon */}
            Sign in with Google
          </button>
        </div>
        <div className="mt-4 text-center">
          {isSignUp ? (
            <Link
              to="/login"
              className="text-blue-500 hover:underline"
              onClick={() => setIsSignUp(false)}
            >
              Already have an account? Login
            </Link>
          ) : (
            <Link
              to="/signup"
              className="text-blue-500 hover:underline"
              onClick={() => setIsSignUp(true)}
            >
              Need an account? Sign Up
            </Link>
          )}
        </div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">{modalMessage}</h3>
              {/* No close button */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
