import { BsCollectionFill } from "react-icons/bs";
import Titles from "../Titles";
import { MovieData } from "../../data";
import Movie from "../MovieCard";
import MovieCard from "../MovieCard";

const PopularMovie = () => {
  return (
    <div className="my-16 px-5">
      <Titles title={"Popular Movie"} Icon={BsCollectionFill} />
      <div className="grid grid-cols-1 gap-8 mt-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {MovieData.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
