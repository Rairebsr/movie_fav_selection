import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/moviecontext";
import "../css/Favourite.css";

function Favourite() {
    const { favorites } = useMovieContext();

    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favourite Movies</h2>
            <p>You have not added any movies to your favourites yet.</p>
        </div>
    );
}

export default Favourite;
