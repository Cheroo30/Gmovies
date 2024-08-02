import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "components/common/Sidebar";
import ContentFooter from "components/common/ContentFooter";
import tmdb from "../api/tmdb";

const MovieCard = ({ item }) => (
  <div className="group">
    <Link to={`/movie/${item.id}`}>
      <div className="overflow-hidden rounded-lg transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-500">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
        {item.tag && (
          <span className="absolute top-2 left-2 inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded">
            {item.tag}
          </span>
        )}
      </div>
      <h3 className="text-white text-sm mt-2">{item.title}</h3>
    </Link>
  </div>
);

const CategorySection = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((item, index) => (
        <MovieCard key={index} item={item} />
      ))}
    </div>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-4 space-x-2">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
    >
      Previous
    </button>
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => onPageChange(index + 1)}
        className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ${
          currentPage === index + 1 ? "bg-gray-900" : ""
        }`}
      >
        {index + 1}
      </button>
    ))}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
    >
      Next
    </button>
  </div>
);

const ImageMovie = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await tmdb.get("/movie/top_rated", {
          params: { page: currentPage },
        });
        setTopRatedMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, [currentPage]);

  const totalPages = Math.ceil(topRatedMovies.length / itemsPerPage);
  const paginatedItems = topRatedMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  // Get the backdrop_path for the banner from the first movie
  const bannerImage =
    topRatedMovies.length > 0 ? topRatedMovies[0].backdrop_path : null;

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="relative h-64 md:h-96 overflow-hidden mt-0.5">
          {bannerImage && (
            <img
              src={`https://image.tmdb.org/t/p/original/${bannerImage}`}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Highest Rated Movies
            </h1>
          </div>
        </div>
        <div className="p-4 md:p-8 flex-grow">
          <div className="flex-grow">
            <CategorySection title="Top Rated Movies" items={paginatedItems} />
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
        <ContentFooter />
      </div>
    </div>
  );
};

export default ImageMovie;
