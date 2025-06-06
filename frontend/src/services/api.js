const API_KEY = "addae3fc";
const BASE_URL = "https://www.omdbapi.com";

// Search movies by title (e.g., for user input)
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.Search || []; // Return empty array if nothing found
};

// Get detailed info by IMDb ID
export const getMovieById = async (imdbID) => {
    const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}`);
    const data = await response.json();
    return data;
};
