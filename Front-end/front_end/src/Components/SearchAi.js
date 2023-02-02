import React, { useState } from "react";
import Recherche from "./Recherche";
import { MdVerifiedUser } from "react-icons/md";
function SearchAi(props) {
  const [type_1, setType1] = useState(false);
  const [type_2, setType2] = useState(false);
  const [type_3, setType3] = useState(false);
  const [type_4, setType4] = useState(false);
  const [type_5, setType5] = useState(false);

  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center">
      <h1 className="font-bold text-2xl text-center text-slate-500 my-6">
        Choisir le type de recherche
      </h1>
      <div className="w-full flex flex-col sm:flex-row gap-2 items-center justify-center">
        <div
          className="h-12 w-[150px] flex flex-row gap-2 items-center justify-center bg-indigo-500 rounded-lg px-2 py-4 text-bold text-white text-lg cursor-pointer"
          onClick={() => setType1(!type_1)}
        >
          Commune
          {type_1 ? <MdVerifiedUser size={20} /> : console.log("")}
        </div>
        <div
          className="h-12 w-[150px] flex flex-row gap-2 items-center justify-center bg-indigo-500 rounded-lg px-2 py-4 text-bold text-white text-lg cursor-pointer"
          onClick={() => setType2(!type_2)}
        >
          wilaya
          {type_2 ? <MdVerifiedUser size={20} /> : console.log("")}
        </div>
        <div
          className="h-12 w-[150px] flex flex-row gap-2 items-center justify-center bg-indigo-500 rounded-lg px-2 py-4 text-bold text-white text-lg cursor-pointer"
          onClick={() => setType3(!type_3)}
        >
          Date
          {type_3 ? <MdVerifiedUser size={20} /> : console.log("")}
        </div>
        <div
          className="h-12 w-[150px] flex flex-row gap-2 items-center justify-center bg-indigo-500 rounded-lg px-2 py-4 text-bold text-white text-lg cursor-pointer"
          onClick={() => setType4(!type_4)}
        >
          Type
          {type_4 ? <MdVerifiedUser size={20} /> : console.log("")}
        </div>
        <div
          className="h-12 w-[150px] flex flex-row gap-2 items-center justify-center bg-indigo-500 rounded-lg px-2 py-4 text-bold text-white text-lg cursor-pointer"
          onClick={() => setType5(!type_5)}
        >
          Mots Cle
          {type_5 ? <MdVerifiedUser size={20} /> : console.log("")}
        </div>
      </div>
      <div>
        <Recherche types={{ type_1, type_2, type_3, type_4, type_5 }} />
        <h1>bbuknkmkn</h1>
      </div>
    </div>
  );
}

export default SearchAi;
