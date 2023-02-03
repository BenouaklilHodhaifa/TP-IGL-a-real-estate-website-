import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { data } from "autoprefixer";
import Ai from "../Components/Ai";

function Adds(props) {
  const infos = {
    information_tel: "",
    surface: "",
    prix: "",
    type_ai: "",
  };

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
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-8 px-3 items-center justify-center m-auto">
      {arr &&
        arr.map((ai) => (
          <div key={ai.id}>
            <Ai annonce={ai} />
          </div>
        ))}
    </div>
  );
}

export default Adds;