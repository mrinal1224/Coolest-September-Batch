import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "./MovieContext";
import { ThemeContext } from "./ThemeContext";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaRegSadCry } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const genAI = new GoogleGenerativeAI("AIzaSyARY1xs79e_g5h-QZAjLI8Xc-i5soD5SVI");

function MovieRecommendation() {
  const { watchlist } = useContext(MovieContext);
  const { theme } = useContext(ThemeContext);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecommendations = async () => {
      if (watchlist.length === 0) return;
      setLoading(true);
      setError(null);

      try {
        const watchlistData = watchlist.map((movie) => ({
          title: movie.title,
          genre: movie.genre_ids[0],
        }));

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Based on these movies: ${JSON.stringify(
          watchlistData
        )}, 
               suggest 5 similar movies. Return the result as a JSON array with the format:
               [
                 {
                   "title": "string",
                   "overview": "string (2-3 sentences)",
                   "poster_path": "string (a placeholder)",
                   "id": number (random unique id)
                 }
               ]
               Do NOT include any extra text, explanations, or formatting. Only return a pure JSON array.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const recommendations = JSON.parse(response.text());

        setRecommendations(recommendations);
      } catch (err) {
        setError("Failed to get recommendations. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getRecommendations();
  }, [watchlist]);

  if (watchlist.length === 0) {
    return (
      <div
        className={`${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        } min-h-screen flex flex-col items-center justify-center text-center`}
      >
        <MdMovie className="text-6xl text-gray-500 mb-4" />
        <h2 className="text-2xl font-semibold">Your watchlist is empty!</h2>
        <p className="text-gray-400 mt-2">
          Add some movies to get recommendations.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen p-8`}
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Recommended Movies 🎬
      </h2>

      {loading && (
        <div className="flex justify-center items-center mt-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 bg-red-100 p-4 rounded-md text-center flex items-center justify-center gap-2 w-full max-w-lg mx-auto shadow-md">
          <FaRegSadCry className="text-xl" /> {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {recommendations.map((movie) => (
            <div
              key={movie.id}
              className="relative w-[250px] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="font-bold text-lg truncate">{movie.title}</h3>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">
                {movie.overview}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieRecommendation;
