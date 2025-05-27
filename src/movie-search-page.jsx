import { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import { getMovies } from "./api/movies";

export default function MovieSearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPages] = useState(1);

  useEffect(() => {
    if (!searchInput) return;

    async function fetchMovies() {
      try {
        const data = await getMovies(searchInput, page);
        setMovieData(data);
        setMovies(data.results);
      } catch (error) {
        console.error('Failed to fetch movies:', err.message);
      }
    };

    fetchMovies();
  }, [searchInput, page]);

  console.log("Search input:", searchInput);
  console.log("Movies found:", movieData);

  return (
    <div>
      <div className="header">
        <h1>Movie Search Page</h1>
      </div>
      <div className="searchbar">
        <Searchbar setSearchInput={setSearchInput} />
      </div>
      <div className="movies">
        {movieData.results && movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        ) : (
          searchInput && <p>No results found.</p>
        )}
      </div>
    </div>
  );
};
