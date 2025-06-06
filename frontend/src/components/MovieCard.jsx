import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/moviecontext";

function MovieCard({ movie }) {
    const { addToFavorites, isFavorite,removeFromFavorites } = useMovieContext();
    const favorites = isFavorite(movie.imdbID);
    function onFavClick(e) {
        e.preventDefault()
        if(favorites) removeFromFavorites(movie.imdbID);
        else addToFavorites(movie);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorites ? "active":""}`} onClick={onFavClick}>
                        ❤︎
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
}

export default MovieCard;
