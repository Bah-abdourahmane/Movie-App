import React from "react";
import { Link, useParams } from "react-router-dom";
import { MovieData } from "../data";
import Layout from "../Layout/Layout";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart, FaPlay } from "react-icons/fa";
import { useState } from "react";

const WatchPage = () => {
  const { id } = useParams();
  const movie = MovieData.find((movie) => movie.name === id);
  const [play, setPlay] = useState(false);
  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        <div className="flex-betw flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to={`/movie/${movie.name}`}
            className="text-sm flex gap-3 items-center font-bold text-dryGray md:text-xl"
          >
            <BiArrowBack /> {movie.name}
          </Link>
          <div className="flex-betw w-full gap-5 sm:w-auto">
            <button className="bg-white/30 px-4 py-3 rounded-md hover:text-subMain transitions ">
              <FaHeart />
            </button>
            <button className="bg-subMain flex-rows gap-2 px-8 py-3 font-medium rounded-md hover:text-main transitions">
              <FaCloudDownloadAlt /> Download
            </button>
          </div>
        </div>
        {play ? (
          <video controls autoPlay={play} className="w-full h-screen rounded">
            <source
              src={`/src/assets/video-1.mp4`}
              type="video/mp4"
              title={movie?.name}
            />
          </video>
        ) : (
          <div className="w-full h-screen rounded-lg overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-main/30 flex-column">
              <button
                onClick={() => setPlay(true)}
                className="bg-white text-subMain w-20 h-20 rounded-full px-8 font-medium py-3 text-xl flex-column border border-subMain transitions"
              >
                <FaPlay />
              </button>
            </div>
            <img
              src={`/src/assets/${movie?.image}`}
              alt={movie?.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WatchPage;
