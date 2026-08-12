import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMoviePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/movies",
        { title, description, genre, releaseYear, posterUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700/50"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Add Movie</h2>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-3 mb-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-3 mb-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
          rows="3"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
          className="w-full p-3 mb-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
        />
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="Release Year"
          className="w-full p-3 mb-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
        />
        <input
          type="text"
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
          placeholder="Poster URL"
          className="w-full p-3 mb-6 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105 shadow-lg"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMoviePage;