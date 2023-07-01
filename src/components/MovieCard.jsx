import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative hover:scale-95 border border-border p-1 transitions rounded overflow-hidden">
      <Link to={`/movie/${movie?.name}`} className="w-full">
        <img
          src={`/src/assets/${movie?.image}`}
          loading="lazy"
          alt={movie?.name}
          className="w-full object-cover h-64 "
        />
      </Link>
      <div className="absolute left-0 right-0  bottom-0 flex-betw gap-2 px-4 py-3 bg-main/60 text-white">
        <h3 className="font-bold truncate">{movie?.name}</h3>
        <button className="w-9 h-9 text-sm flex-column transitions bg-subMain hover:bg-transparent border-2 border-subMain text-white rounded ">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
