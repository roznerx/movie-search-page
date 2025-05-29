import { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import { getMovies, getFavoriteMovies } from "./api/movies";
import Movie from "./components/Movie";
import ReactPaginate from 'react-paginate';
import MovieSkeleton from "./components/MovieSkeleton";
import "./MovieSearchPage.css";

export default function MovieSearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!searchInput) {
          setLoading(true);
          const favorites = await getFavoriteMovies();
          setMovies(favorites.results);
          setTotalPages(0);
          setLoading(false);
          return;
        }

        const data = await getMovies(searchInput, page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Failed to fetch movies:', error.message);
      }
    }
    
    fetchData();
  }, [searchInput, page]);

  useEffect(() => {
    setPages(1);
  }, [searchInput]);

  return (
    <div>
      <div className="header">
        <h1>Movie Search Page</h1>
        <Searchbar setSearchInput={setSearchInput} />
      </div>
      <div className="movies">
        {
          loading ? (
            Array
              .from({ length: 20 })
              .map((_, index) => <MovieSkeleton key={index} />)
          ) : 
          movies.length > 0 ? 
          movies.map(m => {
            return (
              <Movie 
                key={m.id}
                id={m.id}
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
        !searchInput ? 
        <></> : 
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
