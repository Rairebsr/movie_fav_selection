import "../css/Home.css";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies } from "../services/api"; 

function Home() {
    const [searchquery, setsearchquery] = useState("batman"); // default search
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadMovies = async (query) => {
        setLoading(true);
        setError(null);
        try {
            const results = await searchMovies(query);
            setMovies(results);
        } catch (err) {
            console.error("Search error:", err);
            setError("Failed to fetch movies. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMovies(searchquery); // initial load
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault(); 
        if (!searchquery.trim()) return;
        if(loading) return; 
        
        setLoading(true);
        try{
            const searchresults = await searchMovies(searchquery);
            setMovies(searchresults);

        }catch(err){
            console.error("Search error:", err);
            setError("Failed to fetch movies. Try again later.");
        }
        finally{
            setLoading(false);
        }
        setsearchquery(""); 
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input"
                    value={searchquery}
                    onChange={(e) => setsearchquery(e.target.value)}
                />
                <button type="submit" className="search-button">SEARCH</button>
            </form>

            {error && <p className="error">{error}</p>}

            {loading ? (
            <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
                </div>
            )}
            </div>
    );
}

export default Home;
