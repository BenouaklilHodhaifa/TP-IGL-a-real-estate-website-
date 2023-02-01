import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navuser = () => {
  let Links = [
    { name: "Submit an ad", link: "Ajouter", id: 1 },
    { name: "Search an add", link: "Search", id: 2 },
    { name: "Messages", link: "message", id: 3 },
  ];

  let [Open, setOpen] = useState(false);
  const navigation = useNavigate();
  const Logout = () => {
    navigation("/");
    localStorage.setItem("Recent_token", null);
    localStorage.setItem("Recent_user", null);
  };

  return (
    <div className="shadow-md w-full sticky left-0  md:w-auto">
      <div className="md:flex items-center justify-between py-4 md:px-4 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center justify-start  font-[poppins] text-gray-800">
          <div
            className="text-3xl text-indigo-500 mr-1 pt-2"
            onClick={() => {
              navigation("/");
            }}
          >
            <AiOutlineUser size={40} />
          </div>
          <div className="lowercase mt-3">
            {localStorage.getItem("Recent_user")}
          </div>
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
            <li
              key={link.id}
              className="md:ml-8 text-xl md:my-0 my-7 cursor-pointer"
              onClick={() => {
                navigation(link.link);
              }}
            >
              {link.name}
            </li>
          ))}
          <button
            onClick={() => Logout()}
            className="w-[100px] h-10 bg-slate-500 text-stone-900 font-bold md:ml-5"
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navuser;
