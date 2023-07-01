import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieData } from "../../data";
import FlexMovieItems from "../FlexMovieItems";

const Banner = () => {
  return (
    <div className="w-full relative">
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={2000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full bg-dry h-48 lg:h-64 xl:h-96"
      >
        {MovieData.map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
            loading="lazy"
              src={`/src/assets/${movie.image}`}
              alt=""
              className="w-full h-full object-cover "
            />
            <div className="lenear_bg absolute top-0 bottom-0 left-0 right-0 w-full pl-8 flex flex-col justify-center gap-4 sm:pl-32 lg:gap-8  xl:pl-52">
              <h1 className="capitalize  py-2 font-sans font-bold text-xl sm:text-2xl xl:text-4xl truncate">
                {movie.name}
              </h1>
              <div className="flex gap-5 items-center text-dryGray">
                <FlexMovieItems movie={movie} />
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  to={`/movie/${movie.name}`}
                  className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium text-xs sm:text-sm"
                >
                  Watch
                </Link>
                <button className="bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30">
                  <FaHeart />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
