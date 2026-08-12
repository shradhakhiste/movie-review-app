import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const token = localStorage.getItem("token");

  const fetchMovieDetails = async () => {
    try {
      const movieResponse = await axios.get(`http://localhost:5000/api/movies/${id}`);
      setMovie(movieResponse.data);

      const reviewsResponse = await axios.get(`http://localhost:5000/api/movies/${id}/reviews`);
      setReviews(reviewsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5000/api/movies/${id}/reviews`,
        { rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComment("");
      setRating(5);
      fetchMovieDetails();
    } catch (error) {
      console.log(error);
    }
  };

  if (!movie) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700/50 overflow-hidden mb-8">
          <img src={movie.posterUrl} alt={movie.title} className="w-full h-96 object-cover" />
          <div className="p-6">
            <h1 className="text-4xl font-bold text-white mb-2">{movie.title}</h1>
            <p className="text-gray-400 mb-4">{movie.genre} • {movie.releaseYear}</p>
            <p className="text-yellow-400 font-semibold text-xl mb-4">
              ⭐ {movie.averageRating || "No ratings yet"}
            </p>
            <p className="text-gray-300">{movie.description}</p>
          </div>
        </div>

        {token && (
          <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700/50 p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Add Your Review</h2>
            <form onSubmit={handleReviewSubmit}>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full p-3 mb-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl"
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
                <option value={4}>⭐⭐⭐⭐ (4)</option>
                <option value={3}>⭐⭐⭐ (3)</option>
                <option value={2}>⭐⭐ (2)</option>
                <option value={1}>⭐ (1)</option>
              </select>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review..."
                className="w-full p-3 mb-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl placeholder-gray-500"
                rows="3"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}

        <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700/50 p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Reviews</h2>
          {reviews.length === 0 ? (
            <p className="text-gray-400">No reviews yet.</p>
          ) : (
            reviews.map((review) => (
              <div key={review._id} className="border-b border-gray-700 py-4">
                <p className="text-white font-semibold">{review.user.name}</p>
                <p className="text-yellow-400">⭐ {review.rating}</p>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;