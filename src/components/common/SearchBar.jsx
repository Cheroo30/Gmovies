import React, { useState, useCallback } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import tmdb from "../../api/tmdb";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Function to fetch search results
  const fetchResults = useCallback(async (query) => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    try {
      const response = await tmdb.get("/search/movie", {
        params: {
          query: query,
          include_adult: false,
        },
      });
      setResults(response.data.results);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  }, []);

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    fetchResults(newQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="relative w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
          className="w-full py-2 pl-10 pr-3 rounded-lg bg-cl-2 text-slate-300 border border-cl-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
      {query && results.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {results.map((result) => (
            <div
              key={result.id}
              className="flex items-center p-2 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
              onClick={() => {
                navigate(`/movie/${result.id}`);
                setQuery("");
              }}
            >
              {result.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${result.poster_path}`}
                  alt={result.title}
                  className="w-16 h-24 rounded-lg object-cover"
                />
              )}
              <div className="ml-3">
                <p className="text-sm font-semibold">{result.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
