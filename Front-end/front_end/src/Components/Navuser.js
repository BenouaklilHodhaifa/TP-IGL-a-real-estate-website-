import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navuser = () => {
  let Links = [
    { name: "Submit an ad", link: "/", id: 1 },
    { name: "Search an ad", link: "/", id: 2 },
    { name: "view posted ads", link: "/", id: 3 },
    { name: "Messages", link: "/", id: 4 },
  ];

  let [Open, setOpen] = useState(false);
  const navigation = useNavigate();
  const Logout = () => {
    navigation("/");
  };

  return (
    <div className="shadow-md w-full sticky left-0  md:w-auto">
      <div className="md:flex items-center justify-between py-4 md:px-4 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center justify-start font-[poppins] text-gray-800">
          <div className="text-3xl text-indigo-300 mr-1 pt-2">
            <AiOutlineUser size={40} />
          </div>
          <div className="pt-2">User name</div>
        </div>
        <div
          onClick={() => setOpen(!Open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {Open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            Open ? "top-20" : "left-[-990px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.id} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-600 hover:border-b-4 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            onClick={() => Logout()}
            className="w-[100px] h-10 bg-slate-500 text-stone-900 font-bold"
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navuser;
