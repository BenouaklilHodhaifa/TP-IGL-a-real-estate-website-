import React from "react";

const About = () => {
  const Members = [
    { name: "Ismail Abderrezague", id: 1, img: "" },
    { name: "Houdaifa Benouaklil", id: 2, img: "" },
    { name: "Houssem Talbi", id: 3, img: "" },
    { name: "Oussama Djelloul", id: 4, img: "" },
  ];

  return (
    <section className="w-full">
      <h1 className="w-full h-12 bg-slate-200 flex items-center justify-center text-bold text-4xl py-12 mb-4 font-serif">
        About Us
      </h1>
      <div className="w-full grid grid-cols-1 grid-rows-4 gap-3 md:grid-cols-2 md:grid-rows-2 items-center justify-items-center">
        {Members.map((Member) => (
          <div
            key={Member.id}
            className="w-3/4 md:w-2/3 h-40 my-3 border-4 rounded-xl"
          >
            <h1>{Member.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
