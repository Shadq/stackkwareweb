import React from "react";
import images from "../images";

const Projects = () => {
  return (
    <div
      className="mt-56 flex flex-col text-center justify-center items-center"
      id="projects"
    >
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-indigo-500 to-slate-900 bg-clip-text text-transparent">
        LET US SHOW WHAT <br /> CAN WE DO
      </h1>

      <div className="md:grid md:grid-cols-2 md:gap-2">
        {images.map((image) => (
          <div className="p-10">
            <a href={image.link}>
              <img
                src={image.projectImage}
                alt="image"
                className="sm:w-full sm:h-full object-cover rounded-3xl cursor-pointer transition-transform ease-linear hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
