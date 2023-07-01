import React from "react";
import Layout from "../Layout/Layout";
import Filters from "../components/Filters";
import { MovieData } from "../data";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

const Movies = () => {
  const maxPage = 4;
  const [page, setPage] = useState(maxPage);
  const handleLoadingMore = () => {
    setPage(page + maxPage);
  };
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-5 my-6">
        <Filters />
        <p className="text-lg font-medium">
          Total{" "}
          <span className="font-bold text-subMain">{MovieData?.length} </span>{" "}
          items Found
        </p>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {MovieData.slice(0,page)?.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
        <div className="w-full flex-column md:my-20 my-10">
          <button onClick={handleLoadingMore} className="flex-rows gap-3 text-white font-semibold border-2 border-subMain py-3 px-8 rounded">
            Loading More
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Movies;
