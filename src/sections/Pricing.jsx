// import { Element } from "react-scroll";
// import { useState } from "react";
// import clsx from "clsx";
// import CountUp from "react-countup";
// import { plans } from "../constants/index.jsx";
import { services } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Pricing = () => {
  

  return (
    <div className="mt-[60px] flex py-12 flex-col px-[5%] ">
    <h1 className="w-full pb-12 text-p3 text-center  h3">
      Our <span className="text-primary"></span> Services
    </h1>
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 ">
      {services.map((service) => (
        <div
          data-aos-duration="700"
          data-aos="fade-up"
          data-aos-delay={service.delay}
          className="flex flex-col overflow-hidden  shadow-xl rounded-3xl group bg-s2"
          key={service.title}
        >
          <div className="w-full overflow-hidden group">
            <img
              src={service.url}
              alt={service.alt}
              className="flex w-full duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="flex justify-center w-full py-4 mt-4 text-xl font-semibold font-poppins text-yellow-200 px-[7.5%] text-center">
            {service.title}
          </h3>
          <ul className="text-base font-manrope px-[7.5%] text-center divide-y pb-8">
            {service.list.map((item) => (
              <li
                className="py-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex justify-center pb-8">
            {/* Using the Button component with custom class */}
            <Button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-500 ease-in-out transform hover:bg-green-700 hover:-translate-y-1 hover:scale-110 hover:shadow-xl">
              Book Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Pricing;
