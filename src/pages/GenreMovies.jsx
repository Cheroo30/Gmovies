import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "components/common/Sidebar";
import ContentFooter from "components/common/ContentFooter";
import tmdb, { IMAGE_BASE_URL } from "../api/tmdb";

const MovieCard = ({ movie }) => (
  <div className="group">
    <Link to={`/movie/${movie.id}`}>
      <div className="overflow-hidden rounded-lg transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-500">
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-white text-sm mt-2">{movie.title}</h3>
    </Link>
  </div>
);

const CategorySection = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageButtonsToShow = 5;

  // Determine the range of page numbers to display
  const getPageRange = () => {
    let startPage = Math.max(
      1,
      currentPage - Math.floor(pageButtonsToShow / 2)
    );
    let endPage = Math.min(totalPages, startPage + pageButtonsToShow - 1);

    if (endPage - startPage < pageButtonsToShow - 1) {
      startPage = Math.max(1, endPage - pageButtonsToShow + 1);
    }

    return { startPage, endPage };
  };

  const { startPage, endPage } = getPageRange();

  return (
    <div className="flex flex-wrap justify-center mt-4 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
      >
        Previous
      </button>

      {/* Show the first page button if it's not in the range */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            1
          </button>
          {startPage > 2 && <span className="text-white mx-2">...</span>}
        </>
      )}

      {/* Show page number buttons */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <button
          key={index + startPage}
          onClick={() => onPageChange(index + startPage)}
          className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${
            currentPage === index + startPage ? "bg-gray-900" : ""
          }`}
        >
          {index + startPage}
        </button>
      ))}

      {/* Show the last page button if it's not in the range */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="text-white mx-2">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
      >
        Next
      </button>
    </div>
  );
};

const GenreMovies = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await tmdb.get("/discover/movie", {
          params: {
            with_genres: genreId,
            sort_by: "popularity.desc",
            page: currentPage,
          },
        });
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [genreId, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Optional: Get the backdrop path for the banner image
  const bannerImage = movies.length > 0 ? movies[0].backdrop_path : null;

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="relative h-64 md:h-96 overflow-hidden mt-0.5">
          {bannerImage && (
            <img
              src={`${IMAGE_BASE_URL}${bannerImage}`}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Genre Movies
            </h1>
          </div>
        </div>
        <div className="p-4 md:p-8 flex-grow">
          <CategorySection title="Movies" items={movies} />
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

export default GenreMovies;
