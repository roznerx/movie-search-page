import { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import { getMovies } from "./api/movies";
import Movie from "./components/Movie";
import ReactPaginate from 'react-paginate';
import "./MovieSearchPage.css";

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
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Failed to fetch movies:', error.message);
      }
    };

    fetchMovies();
  }, [searchInput, page]);

  useEffect(() => {
    setPages(1);
  }, [searchInput]);

  console.log(movieData)
  console.log("Movies found:", movies);

  return (
    <div>
      <div className="header">
        <h1>Movie Search Page</h1>
        <Searchbar setSearchInput={setSearchInput} />
      </div>
      <div className="movies">
        {
          movieData.results && movies.length > 0 ? 
          movies.map(m => {
            return (
              <Movie 
                key={m.id}
                title={m.title}
                plot={m.overview}
                popularity={m.popularity}
                poster={m.poster_path}
                release={m.release_date}
              />
            )
          }) : searchInput && <p>No results found.</p>
        }
      </div>
      {
        totalPages > 1 && (
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            breakLabel={"..."}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={({ selected }) => setPages(selected + 1)} 
            forcePage={page - 1} 
            containerClassName={"pagination"}
            activeClassName={"active"}
            previousClassName={"page-arrow"}
            nextClassName={"page-arrow"}
            disabledClassName={"disabled"}
          />
        )
      }
    </div>
  );
};
