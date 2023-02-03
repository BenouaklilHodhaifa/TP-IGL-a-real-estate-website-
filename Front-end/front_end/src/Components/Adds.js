import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { data } from "autoprefixer";
import Ai from "./Ai";

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
  const [user_id, setUser_id] = useState(
    JSON.parse(localStorage.getItem("Recent_id")).id
  );
  const [favorite_datates, Setfavorite_datates] = useState([]);
  const [favorite_ai, SetFavorite_ai] = useState([]);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setArr(response.data);
      });
    axios({
      method: "put",
      url: "http://127.0.0.1:8000/favorite",
      data: {
        user: user_id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((e) => {
      SetFavorite_ai([...e.data]);
    });
    axios({
      method: "put",
      url: "http://127.0.0.1:8000/favorite_user",
      data: {
        user: user_id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((e) => {
      Setfavorite_datates([...e.data]);
    });
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-8 px-3 items-center justify-center m-auto">
      {arr.length > 0 &&
        arr.map((ai) => (
          <div key={ai.id}>
            <Ai
              annonce={ai}
              favorites_ai={favorite_ai}
              favorites={favorite_datates}
            />
          </div>
        ))}
    </div>
  );
}

export default Adds;
