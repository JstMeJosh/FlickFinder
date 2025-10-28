import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import tmdb from "../axiosInstance";
import { Link } from "react-router";
import Footer from "../components/Footer";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let response;

        if (searchTerm.trim() === "") {
          response = await tmdb.get("/movie/popular", {
            params: { page },
          });
        } else {
          response = await tmdb.get("/search/movie", {
            params: { query: searchTerm, page },
          });
        }

        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    const delay = setTimeout(() => {
      fetchMovies();
    }, 400);
    return () => clearTimeout(delay);
  }, [page, searchTerm]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm ? (
        <h1 className="text-white pt-24 text-4xl font-bold text-center underline mb-8">
          Search Results for "{searchTerm}"
        </h1>
      ) : (
        <h1 className="text-white pt-24 text-4xl font-bold text-center underline mb-8">
          Popular Movies
        </h1>
      )}
      {loading ? (
        <div className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-100 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center animate-pulse"
              >
                <div className="w-full h-40 bg-gray-400 rounded-lg mb-2"></div>
                <div className="w-3/4 h-4 bg-gray-300 rounded mb-1"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ) : movies.length === 0 ? (
        <div className="text-center text-gray-400 text-lg py-10">
          😕 No movies found for "{searchTerm}". Try searching for another
          movie!
        </div>
      ) : (
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2">
                  <h3 className="font-bold text-sm md:text-base">
                    {movie.title}
                  </h3>
                  <p className="text-yellow-500 font-semibold">
                    {movie.vote_average} ⭐
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center gap-3 py-4">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-ping"></div>
          <button
            disabled
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
          >
            Loading...
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center pb-4 gap-3">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
          >
            Prev
          </button>

          <span className="px-3 py-1 font-bold text-white">
            {page} / {totalPages}
          </span>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      <Footer/>
    </div>
  );
}
