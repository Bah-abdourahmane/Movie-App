import React from "react";
import SideBar from "../sideBar";
import { DashboardData, MovieData } from "../../../data";
import Table from "../../../components/Table";

const Dashboard = () => {
  return (
    <SideBar>
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {DashboardData.map((data, index) => (
          <div
            key={index}
            className="p-4 bg-main border border-border grid grid-cols-4 gap-2"
          >
            <div
              className={` ${data.bg} col-span-1 rounded-full h-12 w-12 flex-column`}
            >
              <data.icon />
            </div>
            <div className="col-span-3">
              <h2>{data.title}</h2>
              <p className="mt-2 font-bold">{data.total}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="font-medium text-border my-6">Recent Movies</h3>
      <Table data={MovieData.slice(0, 5)} admin={true} />
    </SideBar>
  );
};

export default Dashboard;
