"use client";
import React from "react";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import BambiliWear from "../public/assets/logo.jpg";
import Logo from "../public/assets/logoN.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className="fixed w-full  h-24 shadow-xl z-50 bg-black opacity-70 "
      style={{
        background: `url(${BambiliWear.src}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 ">
        <div className="font-bold ">
          <Link href="/" className="flex gap-3">
            <Image src={Logo.src} width={100} height={100} />
            <p className="text-white text-2xl">
              Awahsa'a Ngeniform Foundation (AN)
            </p>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl text-green-500">
                About
              </li>
            </Link>
            <Link href="/mbecuda">
              <li className="ml-10 uppercase hover:border-b text-xl text-white"></li>
            </Link>
            <Link href="/community">
              <li className="ml-10 uppercase hover:border-b text-xl text-white">
                Community Initiatives
              </li>
            </Link>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer text-slate-800 pl-24 "
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 easee-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-10 items-center justify-center">
          <ul className="flex-col">
            <Link href="/about">
              <li
                onClick={() => setNav(false)}
                className=" py-4 cursor-pointer"
              >
                ABOUT
              </li>
            </Link>
            <Link href="/mbecuda">
              <li onClick={() => setNav(false)} className="py-4 cursor-pointer">
                MBECUDA
              </li>
            </Link>
            <Link href="/">
              <li onClick={() => setNav(false)} className="py-4 cursor-pointer">
                Community Initiatives
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-row justify-around pt-10 items-center bg-red-500">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
        <div>Logo</div>
      </div>
    </nav>
  );
};

export default Navbar;
