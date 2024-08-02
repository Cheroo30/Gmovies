import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-l from-cl-8 to-cl-6 text-gray-300 w-64 p-4 hidden lg:block">
      <h2 className="text-xl font-bold mb-4">Picked For You</h2>
      <p className="text-sm mb-2">
        Take this quiz and we'll help you find the next thing to watch.
      </p>
      <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded mb-6">
        Calculate Your Taste
      </button>

      <hr className="border-gray-400 mb-4" />

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <Link to="/TrendingMovie" className="">
            Trending
          </Link>
        </div>
        <div className="flex items-center mb-2">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Link to="/HighRated" className="">
            High Rated
          </Link>
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Watch For Free</span>
        </div>
      </div>

      <hr className="border-gray-400 mb-4" />

      <h3 className="text-gray-400 font-bold mb-2">Popular Interests</h3>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>
          <Link
            to="/true-crime"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            True Crime
          </Link>
        </li>
        <li>
          <Link
            to="/dark-comedies"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Dark Comedies
          </Link>
        </li>
        <li>
          <Link
            to="/engaging-period-pieces"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Engaging Period Pieces
          </Link>
        </li>
        <li>
          <Link
            to="/award-winning-movies"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Award-Winning Movies
          </Link>
        </li>
        <li>
          <Link
            to="/mind-bending-sci-fi"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Mind-Bending Sci-Fi
          </Link>
        </li>
        <li>
          <Link
            to="/horror-movies"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Horror Movies
          </Link>
        </li>
        <li>
          <Link
            to="/superhero"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Superhero
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
