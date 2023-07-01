import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../components/home/Banner";
import PopularMovie from "../components/home/PopularMovie";
import TopRated from "../components/home/TopRated";
import Promos from "../components/home/Promos";

const Home = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <PopularMovie />
        <Promos />
        <TopRated />
      </Layout>
    </div>
  );
};

export default Home;
