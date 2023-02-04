import React from "react";

const About = () => {
  const Members = [
    { name: "Ismail Abderrezague", id: 1, img: "" },
    { name: "Houdaifa Benouaklil", id: 2, img: "" },
    { name: "Houssem Talbi", id: 3, img: "" },
    { name: "Oussama Djelloul", id: 4, img: "" },
  ];

  return (
    <section className="w-full transition-all duration-500 ease-in" id="About" data-testid='about-1'>
      <h1 className="w-full h-12 bg-slate-200 flex items-center justify-center text-bold text-4xl py-12 font-serif">
        About Us
      </h1>
      <div className="w-full grid grid-cols-1 grid-rows-4 gap-y-3 md:gap-x-1 sm:grid-cols-2 sm:grid-rows-2 items-center justify-items-center bg-slate-400 py-8">
        {Members.map((Member) => (
          <div
            key={Member.id}
            className="w-3/4 sm:w-2/3 h-52 my-3 border-4 rounded-xl shadow-xl "
          >
            <h1>{Member.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
