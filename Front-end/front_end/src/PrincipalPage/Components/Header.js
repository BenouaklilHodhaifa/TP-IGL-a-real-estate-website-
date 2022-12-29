import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => (
  <section className="h-[752px]" id="Hero">
    <Navbar />
    <div className="w-full flex flex-col items-center justify-center mt-[170px] gap-4 px-3">
      <h1 className="md:text-5xl text-3xl font-semibold text-slate-400">
        Find your dream home
      </h1>
      <p className="text-bold text-center text-lg md:text-xl text-slate-500">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae, Proin sodales ultrices nulla blandit volutpat.
      </p>
    </div>
  </section>
);

export default Header;
