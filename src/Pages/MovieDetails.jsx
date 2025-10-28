import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams, Link, useNavigate } from "react-router";
import tmdb from "../axiosInstance";
import Footer from "../components/Footer";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await tmdb.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          navigate("/not-found");
        } else {
          setError("Failed to fetch movie details. Please try again.");
          console.error("Error fetching movie details:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id, navigate]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar />
      <div className="max-w-5xl mx-auto p-6">
        {loading ? (
          <div className="animate-pulse flex flex-col md:flex-row gap-6 mt-10 items-center md:items-start">
            <div className="w-full md:w-1/3 h-80 bg-gray-700 rounded-lg shadow-lg" />
            <div className="flex-1 space-y-4 w-full">
              <div className="h-8 bg-gray-700 rounded w-3/4" />
              <div className="h-6 bg-gray-600 rounded w-1/4" />
              <div className="h-4 bg-gray-600 rounded w-full" />
              <div className="h-4 bg-gray-600 rounded w-full" />
              <div className="h-4 bg-gray-600 rounded w-5/6" />
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-500 text-lg">
            {error}
            <div className="mt-4">
              <Link
                to="/"
                className="inline-block px-4 py-2 bg-red-500 rounded hover:bg-red-600"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={movie?.title || "Movie Poster"}
              className="w-full md:w-1/3 rounded-lg shadow-lg"
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  {movie?.title || "N/A"}
                </h1>
                <p className="text-yellow-400 font-semibold mb-2">
                  {movie?.vote_average ?? "N/A"} ⭐ (
                  {movie?.vote_count ?? "N/A"} votes)
                </p>
                <p className="mb-4">
                  {movie?.overview || "No description available."}
                </p>
                <p className="mb-1">
                  <span className="font-bold">Release Date:</span>{" "}
                  {movie?.release_date ?? "N/A"}
                </p>
                <p className="mb-1">
                  <span className="font-bold">Runtime:</span>{" "}
                  {movie?.runtime ?? "N/A"} min
                </p>
                <p className="mb-1">
                  <span className="font-bold">Genres:</span>{" "}
                  {movie?.genres?.map((g) => g.name).join(", ") || "N/A"}
                </p>
              </div>
              <Link
                to="/"
                className="mt-4 inline-block px-4 py-2 bg-red-500 rounded hover:bg-red-600 w-max"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
