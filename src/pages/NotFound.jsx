import React from "react";
import { Link } from "react-router-dom";
import personImage from "assets/404-person.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-700 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">
        Page Not Found ⚠️
      </h2>
      <p className="text-gray-500 mb-8">
        We couldn't find the page you are looking for.
      </p>
      <img src={personImage} alt="404 Person" className="w-48 mb-8" />
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        BACK TO HOME
      </Link>
    </div>
  );
};

export default NotFound;
