import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "components/common/Sidebar";
import ContentFooter from "components/common/ContentFooter";
import tmdb, { IMAGE_BASE_URL } from "../api/tmdb";

const GenreCard = ({ genre, image }) => (
  <Link
    to={`/genre/${genre.id}`}
    className="block relative rounded-lg overflow-hidden group"
  >
    <img
      src={image}
      alt={genre.name}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4">
      <h3 className="text-white text-lg font-bold">{genre.name}</h3>
    </div>
  </Link>
);

const MainContent = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await tmdb.get("/genre/movie/list");
        const genresWithImages = await Promise.all(
          response.data.genres.map(async (genre) => {
            const moviesResponse = await tmdb.get("/discover/movie", {
              params: {
                with_genres: genre.id,
                sort_by: "popularity.desc",
              },
            });
            const firstMovie = moviesResponse.data.results[0];
            return {
              ...genre,
              image: firstMovie
                ? `${IMAGE_BASE_URL}${firstMovie.backdrop_path}`
                : null,
            };
          })
        );
        setGenres(genresWithImages);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col p-4 md:p-8">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Genres</h1>
            <button className="text-blue-400 hover:text-blue-300">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {genres.map((genre) => (
              <GenreCard key={genre.id} genre={genre} image={genre.image} />
            ))}
          </div>
        </div>
        <ContentFooter />
      </div>
    </div>
  );
};

export default MainContent;
