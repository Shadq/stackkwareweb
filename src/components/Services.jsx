import React from "react";
import services from "../services.js";

const Services = () => {
  return (
    <div
      className="flex flex-col gap-40 justify-center text-center"
      id="services"
    >
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-green-500 to-indigo-600 bg-clip-text text-transparent">
        WHAT WE OFFER TO IMPROVE <br /> YOUR BRAND.
      </h1>
      <div className="flex flex-col w-full gap-44">
        {services.map((service) => (
          <div className="ml-10 mr-10 flex justify-center text-center flex-col items-center">
            <h2 className="text-4xl font-semibold">{service.title}</h2>
            <span className="text-2xl text-slate-600 mt-3">
              {service.content}
            </span>
            <div className="relative mx-auto mt-10">
              <img
                src={service.image}
                alt="image"
                className="object-cover h-500 w-96 rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
