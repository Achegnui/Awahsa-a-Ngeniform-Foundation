import React from "react";
import BambiliWear from "../public/assets/bambiliwear.jpg";

const About = () => {
  return (
    <div
      className=" h-[100vh] md:pt-[7%] pt-[40%] "
      style={{
        background: `url(${BambiliWear.src}) lightgray 50% / cover no-repeat`,
      }}
    >
      <h1
        className={`flex justify-center text-4xl md:text-8xl mb-32 font-bold text-orange-900 `}
      >
        WHO WE ARE
      </h1>

      <div className="bg-white flex justify-center items-center md:w-1/2 mx-4 md:mx-auto my-auto shadow-4xl border border-b border-gray-400 rounded-md">
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          eaque quae ut quos labore perspiciatis incidunt commodi quod expedita
          non pariatur illum ad omnis eveniet dolor numquam nihil voluptas,
          ducimus doloribus laborum optio excepturi maiores nam! Maxime deleniti
          assumenda quaerat. Voluptatum, magni alias quaerat pariatur
          praesentium deserunt aliquam facere voluptas incidunt facilis harum,
        </p>
      </div>
    </div>
  );
};

export default About;
