import React from "react";

const Titles = ({ title, Icon }) => {
  return (
    <div className="w-full flex items-center gap-4 sm:gap-8 px-4">
      <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-subMain "/>
      <h2 className="font-bold text-lg sm:text-xl">{title}</h2>
    </div>
  );
};

export default Titles;
