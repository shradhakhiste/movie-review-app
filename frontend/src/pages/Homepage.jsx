import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/movies");
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        🎬 Movie Reviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {movies.map((movie) => (
          <Link to={`/movies/${movie._id}`} key={movie._id}>
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700/50 overflow-hidden hover:scale-105 transition transform cursor-pointer">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-2">{movie.title}</h2>
                <p className="text-gray-400 text-sm mb-2">{movie.genre} • {movie.releaseYear}</p>
                <p className="text-yellow-400 font-semibold">
                  ⭐ {movie.averageRating || "No ratings yet"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;