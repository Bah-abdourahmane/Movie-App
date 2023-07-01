import React from "react";
import Titles from "../Titles";
import { BsBookmarkStar } from "react-icons/bs";
import { Message, Select } from "../CustomInput";
import { useState } from "react";
import Star from "../home/Star";
import { UsersData } from "../../data";

const MovieRates = ({ movie }) => {
  const Ratings = [
    { title: "0 - Poor", value: 0 },
    { title: "1 - Fair", value: 1 },
    { title: "2 - Good", value: 2 },
    { title: "3 - Very Good", value: 3 },
    { title: "4 - Excellent", value: 4 },
    { title: "5 - Masterpiece", value: 5 },
  ];
  const [rating, setRating] = useState(0);
  return (
    <div className="my-16">
      <Titles title={"Reviews"} Icon={BsBookmarkStar} />
      <div className="bg-dry flex-column grid-cols-5 gap-12 py-10 px-2 mt-10 sm:p-20 xs:p-10 xl:grid">
        <div className="w-full flex flex-col gap-8 xl:col-span-2">
          <h3 className="text-xl text-text font-semibold">
            Review "{movie?.name}"
          </h3>
          <p className="text-sm leading-7 font-medium text-border">
            Write a review for this movie. It will be posted on this page. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
            reprehenderit?
          </p>
          <div className="w-full overflow-hidden text-sm">
            <Select
              label={"Select Rating"}
              options={Ratings}
              onChange={(e) => setRating(e.target.value)}
            />
            <div className="flex mt-4 text-lg gap-2 text-star">
              <Star value={rating} />
            </div>
          </div>
          <Message
            label={"Message"}
            placeholder={"Make it short and sweet..."}
          />
          <button className="bg-subMain text-white py-3 w-full rounded">
            Submit
          </button>
        </div>
        <div className="col-span-3 flex flex-col gap-6">
          <h3 className="text-xl text-text font-semibold">Reviews (56)</h3>
          <div className="w-full h-header flex flex-col gap-6 rounded-lg p-6 bg-main md:p-12 overflow-y-auto">
            {UsersData.map((user, index) => (
              <div key={index} className="flex flex-col gap-6 w-full p-4 bg-dry border border-gray-800 rounded-lg grid-cols-12 md:grid">
                <div className="col-span-2 bg-main hidden md:block">
                  <img
                    src={`/src/assets/users/${user.image}`}
                    alt={user.Fullname}
                    className="w-full h-24 rounded-lg object-cover"
                  />
                </div>
                <div className="col-span-7 flex flex-col gap-2">
                  <h2>{user?.Fullname}</h2>
                  <p className="text-xs leading-6 font-medium text-text">
                    {user.message}
                  </p>
                </div>
                <div className="col-span-3 flex-rows border-l text-xs gap-1 text-star">
                  <Star value={user.rate}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRates;
