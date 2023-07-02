import React from "react";
import Layout from "../../Layout/Layout";
import { SideLinks } from "../../data";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-5">
        <div className="xl:grid grid-cols-8 gap-10 items-start py-6 md:py-12">
          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md mb-5 xl:mb-0">
            {SideLinks.map((item, index) => (
              <NavLink
                to={item.link}
                key={item.name + index}
                className={({ isActive }) =>
                  `rounded font-medium text-sm transitions flex gap-3 items-center p-4 hover:text-white hover:bg-main ${
                    isActive && "bg-dryGray text-subMain"
                  }`
                }
              >
                <item.icon /> <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="col-span-6 rounded bg-dry border border-gray-800 p-6"
          >
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SideBar;
