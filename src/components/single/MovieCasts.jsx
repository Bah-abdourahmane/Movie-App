import React from "react";
import Titles from "../Titles";
import { FaUserFriends } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { UsersData } from "../../data";

const MovieCasts = () => {
  return (
    <div className="my-12">
      <Titles title={"Cast"} Icon={FaUserFriends} />
      <div className="mt-10">
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          speed={1000}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            400: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {UsersData.map((user, index) => (
            <SwiperSlide key={index}>
              <div className="w-full p-3 bg-dry text-text rounded text-xs flex-column border border-gray-800 italic">
                <img
                  loading="lazy"
                  src={`/src/assets/users/${user.image}`}
                  alt={user.Fullname}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p>{user.Fullname}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieCasts;
