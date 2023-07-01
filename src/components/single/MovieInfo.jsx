import React from "react";
import FlexMovieItems from "../FlexMovieItems";
import { FaPlay, FaShare, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const MovieInfo = ({ movie }) => {
  return (
    <div className="w-full text-white relative xl:h-screen">
      <img
        src={`/src/assets/${movie?.image}`}
        alt={movie.name}
        className="w-full h-full object-cover hidden xl:inline-block"
      />
      <div className="bg-dry flex-column xl:bg-main/90 xl:absolute top-0 left-0 right-0 bottom-0">
        <div className="container mx-auto flex-column gap-8 px-5 py-10 xl:grid grid-cols-3 2xl:px-32 lg:py-20">
          {/* left */}
          <div className="w-full h-header bg-dry border border-gray-800 rounded-lg overflow-hidden xl:col-span-1 order-last xl:order-none">
            <img
              src={`/src/assets/${movie.titleImage}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* right */}
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center ">
            <div className="col-span-3 flex flex-col gap-10">
              {/* title */}
              <h1 className="font-bold font-sans capitalize text-2xl xl:text-4xl">
                {movie?.name}
              </h1>
              <div className="flex items-center gap-4 text-dryGray font-medium">
                <h6 className="text-center bg-subMain text-xs px-2 py-1">
                  HD 4K
                </h6>
                <FlexMovieItems movie={movie} />
              </div>
              {/* description */}
              <p className="text-text text-sm leading-7">{movie?.desc}</p>
              {/* detail wrapper */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-main border border-gray-800 sm:grid-cols-5">
                {/* share */}
                <div className="col-span-1 flex-column border-r border-border">
                  <button className="w-10 h-10 rounded-lg flex-column bg-white/20">
                    <FaShareAlt />
                  </button>
                </div>
                {/* language */}
                <div className="col-span-2 flex-column text-sm">
                  <p>
                    Language :{" "}
                    <span className="ml-2 truncate">{movie?.language}</span>
                  </p>
                </div>
                {/* watch button */}
                <div className="col-span-3 flex justify-end items-center font-medium text-sm sm:col-span-2">
                  <Link
                    to={`/watch/${movie?.name}`}
                    className="bg-dry hover:bg-subMain transitions border-2 border-subMain rounded-full w-full flex-rows gap-4 py-3"
                  >
                    <FaPlay /> Watch
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex justify-end mt-2 md:mt-0">
              <button className="relative w-full h-20 rounded font-medium bg-subMain hover:bg-transparent transitions border-2 border-subMain md:w-1/4 md:h-64">
                <div className="absolute inset-0  flex-rows gap-6 uppercase tracking-widest md:rotate-90">
                  DownLaod <FiLogIn className="w-6 h-6 shrink-0" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
