import React from "react";
import SideBar from "../sideBar";
import Table from "../../../components/Table";
import { MovieData } from "../../../data";

const MovieList = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-betw gap-2">
          <h1>Movie Liste</h1>
          <button className="bg-main font-medium hover:bg-subMain transitions border border-subMain text-white rounded py-3 px-6">
            Delete All
          </button>
        </div>
        <Table data={MovieData} admin={false} />
      </div>
    </SideBar>
  );
};

export default MovieList;
