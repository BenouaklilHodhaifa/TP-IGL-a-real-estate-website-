import React from "react";
import "./Header.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsTelephone } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineHome } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const Header = () => (
  <section>
    <div className="w-full h-[80px] flex flex-row items-center justify-between px-8">
      <div className="flex flex-row gap-2 max-w-[250px]">
        <AiOutlineMail size={25} />
        <h6>exemple@gmail.com</h6>
      </div>
      <div className="flex flex-row items-center justify-center gap-1">
        <div className="flex flex-row gap-3 cursor-pointer">
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
    <div className="h-[100px] bg-slate-400 mt-2"></div>
    <div className="w-full flex flex-col items-center justify-center mt-[100px] gap-4 px-3">
      <h1 className="text-3xl font-bold">Find your dream home</h1>
      <p className="text-bold text-center">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Proin sodales ultrices nulla blandit volutpat.
      </p>
    </div>
  </section>
);

export default Header;
