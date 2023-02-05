import React, { useState } from "react";

function Scrapping(props) {
  const [scrap, setScrap] = useState(false);
  const [data, setDta] = useState([]);

  const Scrapping = () => {};

  return (
    <div className="w-full flex py-10 items-center justify-center m-auto bg-transparent">
      {!scrap ? (
        <button className="w-[220px] h-10 bg-slate-500 text-stone-900 font-bold hover:bg-slate-300 rounded-xl">
          Web Scrapping
        </button>
      ) : (
        <div>Scrapping</div>
      )}
    </div>
  );
}

export default Scrapping;
