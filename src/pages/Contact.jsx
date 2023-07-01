import React from "react";
import Layout from "../Layout/Layout";
import Head from "../components/home/Head";
import { ContactData } from "../data";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-5 md:px-0 my-6">
        <Head title={"Contact Us"} />
        <div className="grid gap-6 my-10 md:grid-cols-2 lg:grid-cols-3 lg:my-20 xl:gap-8 px-5">
          {ContactData.map((item, index) => (
            <div
              className="border border-border flex-column p-10 bg-dry rounded-lg text-center"
              key={index}
            >
              <span className="flex-column w-20 h-20 rounded-full bg-main text-subMain text-2xl">
                <item.icon />
              </span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-0 text-sm text-text leading-7">
                <a href={`mailto:${item.contact}`} className="text-blue-600">
                  {item.contact}
                </a>{" "}
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
