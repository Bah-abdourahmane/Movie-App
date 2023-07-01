import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../../data";

const Footer = () => {
  return (
    <div className="bg-dry py-4 border-t-2 border-black overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 lg:gap-8 justify-between">
          {footerLinks.map((link, index) => (
            <div
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
              key={index}
            >
              <h3 className="text-lg font-medium mb-4 pb-0.5 sm:mb-5 lg:mb-6 lg:leading-7 ">
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col gap-3">
                {link.links.map((item, id) => (
                  <li className="" key={item.name+id}>
                    <Link
                      to={item.link}
                      className="w-full text-border inline-block hover:text-subMain "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-1 pb-3.5 sm:pb-0 md:col-span-2 lg:col-span-3 ">
            <Link to="/">
              <span className="text-2xl tracking-wider skew-x-12 inline-block text-subMain font-bold">
                BahStream
              </span>
            </Link>
            <p className="leading-7 text-sm text-border mt-3">
              <span>
                {" "}
                Lorem 258 Tilila Souss Massa, suite 200, <br /> Agadir, Maroc
                80000
              </span>
              <br />
              <span>Tell: +212 629 430 540</span>
              <br />
              <span>Email: bahdev@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
