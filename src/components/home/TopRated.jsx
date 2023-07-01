import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { BsCaretRight, BsCaretLeft } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import Titles from "../Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { MovieData } from "../../data";
import Star from "./Star";

const TopRated = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames =
    "transitons text-sm text-white bg-subMain hover:bg-dry rounded w-8 h-8 flex-column cursor-pointer ";
  return (
    <div className="my-16 px-5">
      <Titles title={"Top Rated"} Icon={BsBookmarkFill} />
      <div className="my-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={3000}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            368: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            990: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          {MovieData.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered transitions  border border-border bg-dry rounded-lg overflow-hidden">
                <img
                  loading="lazy"
                  src={`/src/assets/${movie.image}`}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute hovers  top-0 left-0 right-0 bottom-0 px-4 flex-column gap-6 text-center bg-black/70 overflow-hidden">
                  <button className="text-white w-12 h-12 flex-column transitions hover:bg-subMain rounded-full bg-white/30">
                    <FaHeart />
                  </button>
                  <Link
                    to={`/movies/${movie.name}`}
                    className="font-bold truncate"
                  >
                    {movie.name}
                  </Link>
                  <div className="flex items-center gap-2 text-star">
                    <Star value={movie.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex-rows px-1 gap-6 pt-12">
            <button className={classNames} ref={(node) => setPrevEl(node)}>
              <BsCaretLeft />
            </button>
            <button className={classNames} ref={(node) => setNextEl(node)}>
              <BsCaretRight />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
