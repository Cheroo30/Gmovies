import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../api/tmdb";
import Sidebar from "components/common/Sidebar";
import ContentFooter from "components/common/ContentFooter";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await tmdb.get(`/movie/${id}`, {
          params: {
            append_to_response: "videos,credits",
          },
        });
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const {
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    credits,
    videos,
    backdrop_path,
  } = movie;
  const trailer = videos.results.find((video) => video.type === "Trailer");

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Trailer Section */}
        {trailer && (
          <div className="relative w-full h-0 pb-[47%] mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Movie Details Section */}
        <div
          className="flex-1 p-4 md:p-8"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // Ensures background stays fixed
          }}
        >
          <div className="bg-gray-800 bg-opacity-75 p-4 md:p-8 rounded-lg flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-8 flex flex-col">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-gray-400">{release_date}</p>
              <p className="mt-4">{overview}</p>
              <p className="mt-4">Rating: {vote_average}</p>
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2">Cast</h3>
                <div className="flex flex-wrap">
                  {credits.cast.slice(0, 5).map((actor) => (
                    <div key={actor.id} className="mr-4 mb-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                        alt={actor.name}
                        className="w-20 h-30 rounded-lg"
                      />
                      <p className="text-sm mt-2">{actor.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContentFooter />
      </div>
    </div>
  );
};

export default MovieDetails;
