import React from "react";
import BambiliWear from "./public/assets/logo.jpg";
import Link from "next/link";
import { EB_Garamond } from "@next/font/google";
// import tw from "twin.macro"; // Import twin.macro for TailwindCSS styling

// const Table = tw.table`w-full border-collapse`;
// const Th = tw.th`bg-orange-500 p-2 text-white font-bold`;
// const Td = tw.td`bg-orange-300 p-2`;
const ebGaramond = EB_Garamond({
  subsets: ["latin"], // Specify the subsets you need
  weight: "400", // You can specify weight or styles if needed
});
const Home = () => {
  return (
    <div
      className={`${ebGaramond.className} h-full md:pt-[7%] pt-[40%]  bg-[#FFFD0] pb-10`}
    >
      <h1 className="text-black text-center text-8xl font-bold mb-4 mt-10">
        {" "}
        The Awahsa'a Ngeniform Foundation (AN)
      </h1>
      <h1
        className={`px-[10%] text-center text-3xl md:text-4xl mb-8 font-bold text-black `}
      >
        <span className="text-[#6b8e23]">Empowering</span> At-Risk Youth and{" "}
        <span className="text-[#6b8e23]">Fostering</span> Community Development
        in Conflict-Affected Regions
      </h1>

      <div className=" flex flex-col gap-y-4 justify-center items-center text-xl text-center px-[10%] mb-10 mx-auto  my-auto ">
        <p className=" text-black">
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
          <button className="px-4 py-2 bg-black rounded-full text-[#d2691e] text-lg font-bold ">
            Learn More
          </button>
          <button className="px-4 py-2 bg-black rounded-full text-[#d2691e] text-lg font-bold border">
            Become A Partner
          </button>
        </div>
      </div>

      <div className="text-8xl text-black font-bold text-center mb-5">
        OUR <span className="text-[#6b8e23]">PILLARS</span>{" "}
      </div>

      <div className="grid grid-cols-5   text-center mx-10 rounded-md bg-[#d2691e]">
        <div className=" flex flex-col   ">
          <div className="text-white font-bold text-xl">
            Community Development
          </div>
          <div className="text-start bg-[#ec914f]">
            {" "}
            <h1 className="text-white pl-2">Bambili</h1>
            <div className="pl-4 text-white">
              <ul className="list-disc list-inside">
                <li className="pl-0">MBECUDA</li>
                <li className="pl-6">MBECUDA Bambili</li>
                <li className="pl-6">MBECUDA Buea</li>
                <li className="pl-6">MBECUDA Limbe</li>
                <li className="pl-6">MBECUDA Douala</li>
                <li className="pl-6">MBECUDA Yaounde</li>
                <li className="pl-6">MBECUDA USA</li>
                <li className="pl-6">MBECUDA Canada</li>
              </ul>
            </div>
            <div className="pl-4 text-white">
              <ul className="list-disc list-inside">
                <li>ORGANIZATIONS</li>
                <li className="pl-6"> Awahsa’a Ngeniform Foundation</li>
                <Link href=" https://www.facebook.com/share/g/Qu3m4i8mPcjca7fu/?mibextid=K35XfP ">
                  <li className="pl-6">Mbeligi Facebook</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex flex-col ">
          <div className="text-white font-bold text-xl">Skills+Livelihoods</div>
          <div className="text-start text-white bg-[#ec914f]">
            {" "}
            <h1 className="">Bambili</h1>
            <ul className="list-disc list-inside ">
              <li className="pl-4">Secondary Education</li>
              <li className="pl-4">Higher Education</li>
              <li className="pl-4">Agriculture</li>
              <li className="pl-4">Business and Trades</li>
              <li className="pl-4">Carpentry</li>
              <li className="pl-4">Welding</li>
              <li className="pl-4">Electrification incl. Solar</li>
              <li className="pl-4">Tailoring</li>
            </ul>
            <h1 className="pl-2">Online Learning</h1>
            <ul className="list-disc list-inside pl-2">
              <li className="pl-4">
                <Link href="https://www.edx.org/">EdX</Link>
              </li>
              <li className="pl-4">
                <Link href="https://chat.openai.com/">ChatGPT</Link>
              </li>
              <li className="pl-4">
                <Link href="https://www.khanacademy.org/">Khan Academy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col  ">
          <div className="text-white font-bold text-xl">Culture</div>
          <div className="text-start text-white bg-[#ec914f]">
            {" "}
            <div>
              <h1 className="text-white">Bambili</h1>
              <ul className="list-disc list-inside ">
                <li className="pl-4">Language</li>
                <li className="pl-8">
                  <Link href=" https://www.youtube.com/@prof_agwandi">
                    {" "}
                    Language Matters
                  </Link>
                </li>
                <li className="pl-8">Dictionary</li>
                <li className="pl-8">Anthem</li>
                <li className="pl-8">Calendar</li>
              </ul>
              <ul className="list-disc list-inside ">
                <li className="pl-4">Food & Drinks</li>
                <li className="pl-8">Achu & Yellow Soup</li>
                <li className="pl-8">Achu & Na'a (Garden Egg)</li>
                <li className="pl-8"> Achu & Black Soup</li>
                <li className="pl-8">Achu & Egusi Soup</li>
                <li className="pl-8">Palmwine</li>
              </ul>
              <ul className="list-disc list-inside ">
                <li className="pl-4">Tourism</li>
                <li className="pl-8">Bambili Palace</li>
                <li className="pl-8">Quarters</li>
                <li className="pl-8"> Lake Bambili</li>
                <li className="pl-8"> Ngo'fana</li>
                <li className="pl-8">Rivers & Waterfalls</li>
              </ul>
              <ul className="list-disc list-inside ">
                <li className="pl-4">Music, Dance & Crafts</li>
                <li className="pl-4">Traditional Practices</li>
                <li className="pl-4">Events</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex flex-col   ">
          <div className="text-white font-bold text-xl">Capacity-Building</div>
          <div className="text-start bg-[#ec914f] text-white">
            {" "}
            <h1 className="pl-4">Bambili</h1>
            <ul className="list-disc list-inside pl-2">
              <li className="pl-6">
                <Link href="https://forms.gle/SJ2KSig1sYrvvSCH8">
                  Growing Mbeligi Together Inaugural - 21st Sept 2024
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col   ">
          <div className="text-white font-bold text-xl">Resources</div>
          <div className="text-start bg-[#ec914f] text-white">
            {" "}
            <h1 className="pl-4">Bambili</h1>
            <ul className="list-disc list-inside pl-2">
              <li className="pl-4">Social Services</li>
              <li className="pl-6">Bambili Health Center</li>
              <li className="pl-6">University of Bamenda Health Center</li>
              <li className="pl-6">
                <Link href="#">Our Lady Of Fatima Parish Bambili</Link>
              </li>
              <li className="pl-6">St Francis Quasi Parish Ntewshi</li>
              <li className="pl-6">PC CCAST Complex</li>
            </ul>
            <h1 className="pl-4">Technical Resources</h1>
            <ul className="list-disc list-inside pl-2">
              <li className="pl-6">Experts</li>
              <li className="pl-6">Research</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
