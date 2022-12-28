import React from "react";
import "./Header.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsTelephone } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineHome } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Navbar from "./Navbar";

const Header = () => (
  <section className="h-[752px]">
    <div className="w-full h-[80px] flex flex-row items-center justify-between px-8">
      <div className="flex flex-row gap-2 max-w-[250px]">
        <AiOutlineMail size={25} />
        <h6>exemple@gmail.com</h6>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 max-w-lg">
        <div className="hidden md:flex md:flex-row gap-3 cursor-pointer">
          <BsFacebook size={20} />
          <AiFillLinkedin size={20} />
          <AiFillInstagram size={20} />
        </div>
        <div className="flex flex-row items-center justify-center gap-1 border-l-[3px] pl-[6px]">
          <BsTelephone size={15} />
          <h5>123-234</h5>
        </div>
      </div>
    </div>
    <hr></hr>
    <div className="w-full h-[60px] flex flex-row md:hidden items-center justify-center px-10 gap-8">
      <BsFacebook size={30} />
      <AiFillLinkedin size={30} />
      <AiFillInstagram size={30} />
    </div>
    <Navbar />
    <div className="w-full flex flex-col items-center justify-center mt-[170px] gap-4 px-3">
      <h1 className="md:text-5xl text-3xl font-semibold text-slate-200">
        Find your dream home
      </h1>
      <p className="text-bold text-center text-lg md:text-xl text-slate-50">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae, Proin sodales ultrices nulla blandit volutpat.
      </p>
    </div>
  </section>
);

export default Header;
