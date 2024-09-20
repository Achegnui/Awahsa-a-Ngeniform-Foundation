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

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full  h-24 shadow-xl bg-white z-50 ">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className="font-bold text-4xl bg-red-500">
          <Link href="/">Akwo's Foundation</Link>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">About</li>
            </Link>
            <Link href="/mbecuda">
              <li className="ml-10 uppercase hover:border-b text-xl">
                MBECUDA
              </li>
            </Link>
            <Link href="/community">
              <li className="ml-10 uppercase hover:border-b text-xl">
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
          <Link href="/about">
            <li
              onClick={() => setNav(false)}
              className="text-white py-4 cursor-pointer"
            >
              ABOUT
            </li>
          </Link>
          <Link href="/">
            <li onClick={() => setNav(false)} className="py-4 cursor-pointer">
              MBECUDA
            </li>
          </Link>
          <Link href="/">
            <li onClick={() => setNav(false)} className="py-4 cursor-pointer">
              Community Initiatives
            </li>
          </Link>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
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
