import React from "react";
import { useParams } from "react-router-dom";
import { MovieData } from "../data";
import Layout from "../Layout/Layout";
import MovieInfo from "../components/single/MovieInfo";
import MovieCasts from "../components/single/MovieCasts";
import MovieRates from "../components/single/MovieRates";
import Titles from "../components/Titles";
import { BsCollectionFill } from "react-icons/bs";
import MovieCard from "../components/MovieCard";

const SingleMovie = () => {
  const { id } = useParams();
  const movie = MovieData.find((movie) => movie.name === id);
  const RelatedMovies = MovieData.filter((m) => m.category === movie.category);
  return (
    <Layout>
      <MovieInfo movie={movie} />
      <div className="container mx-auto min-h-screen px-5 my-6">
        <MovieCasts />
        <MovieRates movie={movie} />
        <div className="my-16">
          <Titles title={"Related Movies"} Icon={BsCollectionFill} />
          <div className="grid grid-cols-1 gap-6 mt-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {RelatedMovies?.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleMovie;
