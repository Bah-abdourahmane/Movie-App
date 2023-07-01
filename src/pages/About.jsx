import React from "react";
import Layout from "../Layout/Layout";
import Head from "../components/home/Head";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-5 md:px-0 my-6">
        <Head title={"About Us"} />
        <div className="px-5 py-10 xl:py-20">
          <div className="grid grid-flow-row items-center gap-4 xl:gap-16 xl:grid-cols-2">
            {/* left side */}
            <div>
              <h3 className="text-xl font-semibold lg:text-3xl">
                Welcom to our BahStream
              </h3>
              <div className="text-text text-sm mt-3 leading-8">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia sunt nostrum molestiae harum nobis explicabo
                  enim voluptatem beatae neque perferendis, eum sint sequi ullam
                  suscipit, tempore quae itaque. At? mollitia sunt nostrum
                  molestiae harum nobis explicabo enim voluptatem beatae neque
                  perferendis, eum sint sequi ullam suscipit, tempore quae
                  itaque. At? voluptatem beatae neque perferendis, eum sint
                  sequi ullam suscipit, tempore quae itaque. At?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia sunt nostrum molestiae harum nobis explicabo
                  enim voluptatem beatae neque perferendis, eum sint sequi ullam
                  suscipit, tempore quae itaque. At? mollitia sunt nostrum
                  molestiae harum nobis explicabo enim voluptatem beatae neque
                  perferendis, eum sint sequi ullam
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">10K</span>
                  <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                  <p>Contrairement à une opinion répandue</p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">8K</span>
                  <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                  <p>
                    Completely free, without registration! lorem Ipsum is simply
                  </p>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="mt-10 lg:mt-0">
              <img src="/src/assets/1.jpg" alt="about us" className="w-full h-header object-cover rounded-lg hidden xl:block "/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
