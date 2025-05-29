import "./Movie.css";

export default function Movie({ id, title, plot, popularity, poster, release }) {
  return (
    <div className="movie-card">
      {
        poster ? (
          <img 
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w342/${poster}`} 
            alt={`Movie poster for ${title}`}
            loading="lazy"
          />
        ) : (
          <div className="poster-placeholder">
            <p>No poster available</p>
          </div>
        )
      }
      <div className="movie-info">
        <h3 title={title}>
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </h3>
        <p className="release-popularity">
          <span>
            {release ? new Date(release).getFullYear() : "Unknown"}
          </span>
          <span>⭐ {popularity?.toFixed(1)}</span>
        </p>
        <p className='movie-plot'>
          {
            plot ? (
              plot.length > 90 ? 
              `${plot.substring(0, 90)}...` : 
              plot
            ) : "Plot not available."
          }
        </p>
        {
          plot && plot.length > 90 && (
            <button 
              className="read-more" 
              onClick={
                () => window.open(`https://www.themoviedb.org/movie/${id}`)
              }
            >
              Read more
            </button>
          )
        }
      </div>
    </div>
  );
};
