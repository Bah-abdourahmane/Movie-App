import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { Input } from "../components/CustomInput";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  return (
    <Layout>
      <div className="container mx-auto px-5 my-24 flex-column">
        <div className="w-full flex-column gap-8 p-14 bg-dry rounded-lg border border-border 2xl:w-2/5 md:w-3/5">
          <div className="skew-x-12 text-subMain font-bold">
            <Link to="/">
              <span className="text-2xl tracking-wider">BahStream</span>
            </Link>
          </div>
          <Input
            label={"Email"}
            placeholder={"bahstream@gmail.com"}
            type={"email"}
            bg={true}
          />
          <Input
            label={"Password"}
            placeholder={"*********"}
            type={"password"}
            bg={true}
          />
          <Link
            to={"/dashboard"}
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign In
          </Link>
          <p className="text-center text-border">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
