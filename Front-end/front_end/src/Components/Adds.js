import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { data } from "autoprefixer";
import Ai from "./Ai";

const Adds = (props) => {
  const [arr, setArr] = useState([]);

  const url = "http://127.0.0.1:8000/ai/";
  const token = JSON.parse(localStorage.getItem("Recent_token"))?.token;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setArr(response.data);
      });
  }, []);

  return (
    <div className="w-full flex flex-col gap-3 md:grid md:grid-cols-2 md:pl-20 lg:grid-cols-3 lg:pl-10 xl:grid-cols-4 xl:pl-12 md:gap-y-4  py-8 px-3 items-center justify-center m-auto bg-transparent">
      {arr &&
        arr.map((ai) => (
          <div key={ai.id}>
            <Ai annonce={ai} />
          </div>
        ))}
    </div>
  );
};

export default Adds;
