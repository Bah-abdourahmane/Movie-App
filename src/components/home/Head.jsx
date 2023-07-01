import React from "react";

const Head = ({ title }) => {
  return (
    <div className="w-full h-40 relative bg-dryGray overflow-hidden rounded-md lg:h-64 ">
      <img
        loading="lazy"
        src="/src/assets/1.jpg"
        alt="about us banner image"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-16 w-full lg:top-24 flex-column">
        <h1 className="text-white text-2xl text-center font-bold lg:text-h1">
          {title}{" "}
        </h1>
      </div>
    </div>
  );
};

export default Head;
