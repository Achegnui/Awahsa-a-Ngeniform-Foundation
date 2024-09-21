import React from "react";
import BambiliWear from "./public/assets/logo.jpg";
import Link from "next/link";
// import tw from "twin.macro"; // Import twin.macro for TailwindCSS styling

// const Table = tw.table`w-full border-collapse`;
// const Th = tw.th`bg-orange-500 p-2 text-white font-bold`;
// const Td = tw.td`bg-orange-300 p-2`;

const Home = () => {
  return (
    <div className=" h-full md:pt-[7%] pt-[40%] bg-black pb-10">
      <h1
        className={`px-[10%] text-center text-3xl md:text-6xl mb-12 font-bold text-white `}
      >
        <span className="text-[#6b8e23]">Empowering</span> At-Risk Youth and <span className="text-[#6b8e23]">Fostering</span> Community Development in
        Conflict-Affected Regions
      </h1>

      <div className=" flex flex-col gap-y-4 justify-center items-center text-center px-[10%] mb-10 mx-auto  my-auto ">
        <p className=" text-white">
          Supporting excellence, leadership, and resilience in youth
          livelihoods, scholarship, and community development, The Awahsa’a
          Ngeniform Foundation is dedicated to empowering at-risk and
          underserved youth. We focus on building life skills, offering
          mentorship, and providing access to education and vocational training.
          Our programs aim to cultivate future leaders who can uplift their
          communities and break cycles of poverty. By equipping young people
          with the tools they need to succeed, we also contribute to the growth
          of resilient and thriving communities, especially in fragile and
          conflict-affected regions.
        </p>
        <div className="flex justify-center items-center gap-x-8">
          <button className="px-4 py-2 bg-white rounded-full text-[#d2691e] text-lg font-bold ">
            Learn More
          </button>
          <button className="px-4 py-2 bg-black rounded-full text-[#d2691e] text-lg font-bold border">
            Become A Partner
          </button>
        </div>
      </div>

      <div className="text-8xl text-white font-bold text-center mb-5">OUR <span className="text-[#6b8e23]">PILLARS</span> </div>

      <div className="grid grid-cols-5   text-center mx-10 rounded-md bg-[#d2691e]">
        <div className=" flex flex-col   ">
          <div className="text-white font-bold text-2xl">Community Development</div>
          <div className="text-start bg-[#ec914f]">
            {" "}
            <h1 className="text-white"> >Bambili</h1>
            <div className="pl-4 text-white">
              <h1 className=""> >MBECUDA</h1>
              <p className="pl-6"> >MBECUDA Bambili</p>
              <p className="pl-6"> >MBECUDA Buea</p>
              <p className="pl-6"> >MBECUDA Limbe</p>
              <p className="pl-6"> >MBECUDA Douala</p>
              <p className="pl-6"> >MBECUDA Yaounde</p>
              <p className="pl-6"> >MBECUDA USA</p>
              <p className="pl-6"> >MBECUDA Canada</p>
            </div>
            <div className="pl-4 text-white">
              <h1>>ORGANIZATIONS</h1>
              <p className="pl-6"> >Awahsa’a Ngeniform Foundation</p>
              <p className="pl-6"> >Mbeligi Facebook</p>
              <p className="pl-6"><Link href="#"> >Our Lady Of Fatima Parish Bambili</Link></p>
            </div>
          </div>
        </div>
               <div className=" flex flex-col ">
          <div className="text-white font-bold text-2xl">Skills+Livelihoods</div>
          <div className="text-start text-white bg-[#ec914f]">
            {" "}
            <h1 className=""> >Bambili</h1>
            <p className="pl-4"> >Farming </p>
            <p className="pl-4"> >Business</p>
          </div>
        </div>
               <div className="flex flex-col  ">
          <div className="text-white font-bold text-2xl">Culture</div>
          <div className="text-start text-white bg-[#ec914f]">
            {" "}
            <div>
              <h1 className="text-white"> >Bambili</h1>
               <p className="pl-4"> > Language</p>
              <p className="pl-6"><Link href=" https://www.youtube.com/@prof_agwandi"> >Language Matters</Link></p>
              <p className="pl-6"> > Dictionary</p>
              <p className="pl-6"> > Anthem</p>
              <p className="pl-6"> > Calendar</p>
            </div>
          </div>
        </div>
               <div className=" flex flex-col   ">
          <div className="text-white font-bold text-2xl">Research</div>
          <div className="text-start bg-[#ec914f] text-white">
            {" "}
            <h1> >Bambili</h1>
          </div>
        </div>
               <div className="flex flex-col   ">
          <div className="text-white font-bold text-2xl">Resources</div>
          <div className="text-start bg-[#ec914f] text-white">
            {" "}
            <h1 className="pl-4"> >Bambili</h1>
            <h2 className="pl-5">Tourism</h2>
            <p className="pl-6"> >Bambili Lake</p>
            <p className="pl-6"> >Ngo'Fana</p>
            <p className="pl-6"> >Bambili Palace</p>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
