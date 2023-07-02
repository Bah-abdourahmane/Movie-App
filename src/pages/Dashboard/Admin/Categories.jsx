import React from "react";
import SideBar from "../sideBar";
import { MovieData, UsersData } from "../../../data";
import Table from "../../../components/Table";
import { HiPlus } from "react-icons/hi";
import CategoryTable from "../../../components/CategoryTable";

const Categories = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-betw gap-2">
          <h1>Categories</h1>
          <button className="bg-subMain flex-rows gap-4 font-medium hover:bg-transparent transitions border border-subMain text-white rounded py-2 px-4">
            <HiPlus /> Create
          </button>
        </div>
        <CategoryTable data={UsersData} users={true} />
      </div>
    </SideBar>
  );
};

export default Categories;
