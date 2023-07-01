import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex-column gap-6 w-full min-h-screen text-white bg-main lg:py-20 py-10">
      {/* <img
        src="/src/assets/404.jpg"
        alt="not found"
        className="w-full h-96 object-contain"
      /> */}
      <h1 className="lg:text-4xl font-bold">Page Not Foound</h1>
      <p className="font-medium text-border italic leading-6">
        The page you are looking for does not exist. You may have mistyped the
        URL
      </p>
      <Link
        to={"/"}
        className="bg-subMain flex-rows gap-2 text-white font-medium py-2 px-4 rounded-md"
      >
        <BiHomeAlt className="text-xl" /> Back Home
      </Link>
    </div>
  );
};

export default NotFound;
