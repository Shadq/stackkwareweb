import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Hero = () => {
  return (
    <div
      className="h-screen flex justify-center items-center flex-col gap-14"
      id="hero"
    >
      <h1 className="text-7xl flex flex-col text-center items-center xl:flex xl:flex-row xl:gap-3 xl:text-8xl font-medium font-newFont">
        We are developing{" "}
        <h1 className="text-7xl md:text-8xl">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "SF Pro Display",
              color: "#0ea5e9",
              fontWeight: 500,
            }}
            startDelay={500}
            cursorColor="#0ea5e9"
            multiText={[" The Future.", " Trust.", " Dreams."]}
            multiTextDelay={1000}
            typeSpeed={100}
          />
        </h1>
      </h1>
    </div>
  );
};

export default Hero;
