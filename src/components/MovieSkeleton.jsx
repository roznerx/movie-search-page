import "./MovieSkeleton.css";

export default function MovieSkeleton() {
  return (
    <div className="movie-card skeleton">
      <div className="poster-skeleton shimmer" />
      <div className="info-skeleton">
        <div className="title-skeleton shimmer" />
        <div className="text-skeleton shimmer" />
      </div>
    </div>
  );
};
