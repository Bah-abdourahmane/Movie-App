import React from "react";
import SideBar from "./sideBar";
import Uploader from "../../components/Uploader";
import { Input } from "../../components/CustomInput";

const Profile = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Profile</h2>
        <Uploader />
        <Input
          label={"FullName"}
          placeholder={"bah stream "}
          type={"text"}
          bg={true}
        />
        <Input
          label={"Email"}
          placeholder={"bahstream@gmail.com"}
          type={"email"}
          bg={true}
        />
        <div className="flex gap-2 flex-wrap flex-col-reverse justify-between items-center sm:flex-row">
          <button className="bg-subMain transitions hover:bg-main font-medium border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className="transitions hover:bg-subMain font-medium border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default Profile;
