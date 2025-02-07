import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from './MovieContext';
import { ThemeContext } from './ThemeContext';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyARY1xs79e_g5h-QZAjLI8Xc-i5soD5SVI');

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
        const watchlistData = watchlist.map(movie => ({
          title: movie.title,
          genre: movie.genre_ids[0]
        }));

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Based on these movies: ${JSON.stringify(watchlistData)}, 
                       suggest 5 similar movies. For each movie, return an object with:
                       {
                         title: string,
                         overview: string (2-3 sentences),
                         poster_path: string (a placeholder),
                         id: number (random unique id)
                       }
                       Format as JSON array.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const recommendations = JSON.parse(response.text());

        setRecommendations(recommendations);
      } catch (err) {
        setError('Failed to get recommendations');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getRecommendations();
  }, [watchlist]);

  if (watchlist.length === 0) {
    return (
      <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} p-8 text-center`}>
        <h2 className="text-2xl font-bold">Add movies to your watchlist for recommendations!</h2>
      </div>
    );
  }

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} p-8`}>
      <h2 className="text-2xl font-bold mb-6">Recommended Movies</h2>
      
      {loading && (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center p-4">{error}</div>
      )}

      {!loading && !error && (
        <div className="flex flex-wrap gap-8 justify-center">
          {recommendations.map(movie => (
            <div key={movie.id} className="w-[220px] h-[350px] rounded-lg overflow-hidden shadow-lg">
             
      
                <div className="p-4 bg-gray-800 text-white">
                  <h3 className="font-bold truncate">{movie.title}</h3>
                  <p className="text-sm mt-2 line-clamp-3">{movie.overview}</p>
                </div>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieRecommendation;