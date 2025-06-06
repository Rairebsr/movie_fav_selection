import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on initial mount
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    }, []);

    // Update localStorage when favorites change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        // Avoid adding duplicates
        if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
            setFavorites(prev => [...prev, movie]);
        }
    };

    const removeFromFavorites = (imdbID) => {
        setFavorites(prev => prev.filter(movie => movie.imdbID !== imdbID));
    };

    const isFavorite = (imdbID) => {
        return favorites.some(movie => movie.imdbID === imdbID);
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};
