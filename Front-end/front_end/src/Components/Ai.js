import {
  BsFillTelephoneOutboundFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";

import { AiFillDollarCircle, AiFillMail } from "react-icons/ai";
import { RxRulerSquare } from "react-icons/rx";

import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import image from "./photo.png";
//npm install reactjs-popup --save for the popup
import "reactjs-popup/dist/index.css";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";

import axios from "axios";

const Ai = ({ annonce, favorites, favorites_ai }) => {
  const token = JSON.parse(localStorage.getItem("Recent_token"))?.token;
  const {
    id = "",
    titre = "",
    description = "",
    date_Publication = "",
    type_ai = "",
    category = "",
    surface = "",
    prix = "",
    wilaya = "",
    commune = "",
    adresse_ai = "",
    information_tel = "",
    information_email = "",
    information_nom = "",
    information_prenom = "",
    information_adresse = "",
    user = "",
    images = [],
  } = annonce;
  const [favorite, setFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [slides, setSlides] = useState(0);
  const [message, setMessage] = useState("");
  const [messageChanged, setMessageChanged] = useState(false);
  const [user_id, setUser_id] = useState(
    JSON.parse(localStorage.getItem("Recent_id")).id
  );
  const [favorite_id, SetFavorite_id] = useState("");

  // if (favorites_ai.length > 0) {
  //   favorites_ai.map((e) => {
  //     if (e.id == id) {
  //       setFavorite(true);
  //       // SetFavorite_id(.id);
  //     }
  //   });
  // }

  React.useEffect(() => {
    if (favorites_ai.length > 0) {
      const isFavorite = favorites_ai.some((e) => e.id === id);
      setFavorite(isFavorite);
    }
    if (favorites.length > 0) {
      favorites.map((e) => {
        if (e.ai == id) {
          SetFavorite_id(e.id);
        }
      });
    }
  }, []);

  return (
    annonce && (
      <div
        className="bg-[#F5FBFF] shadow-1  rounded-lg min-h-[375px] w-[350px] cursor-pointer  hover:shadow-2xl  p-1"
        // onClick={() => setShowModal(!showModal)}
      >
        <div
          className="absolute"
          id={favorite_id}
          onClick={(e) => {
            setFavorite(!favorite);
            if (favorite) {
              if (favorite_id != "") {
                axios({
                  method: "delete",
                  url: `http://127.0.0.1:8000/favorite/${favorite_id}`,
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                  .then((e) => {})
                  .catch((e) => {});
              }
            } else {
              axios({
                method: "post",
                url: "http://127.0.0.1:8000/favorite",
                data: {
                  ai: id,
                  user: user_id,
                },
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
                .then((e) => {
                  SetFavorite_id(e.data.id);
                })
                .catch((e) => {});
            }
          }}
        >
          {favorite ? (
            <BsFillHeartFill size={20} className="text-red-500" />
          ) : (
            <BsHeart size={20} className="text-red-500" />
          )}
        </div>
        <img
          src={images[0] ? "http://127.0.0.1:8000/" + images[0].image : image}
          alt="imggg"
          className="w-full h-[230px] rounded-lg"
        />

        <div className="grid grid-cols-2 grid-rows-2 mt-3">
          <div className="flex flex-row p-4 items-center justify-start">
            <AiFillDollarCircle size={20} className="text-[#4A60A1]" />
            <h6 className="ml-2">{prix}</h6>
            <h6 className="ml-1">DINARS</h6>
          </div>
          <div className="flex flex-row p-4 items-center justify-start">
            <BsFillTelephoneOutboundFill size={20} className="text-[#4A60A1]" />
            <h6 className="ml-2">{information_tel}</h6>
          </div>
          <div className="flex flex-row p-4 items-center justify-start">
            <RxRulerSquare size={20} className="text-[#4A60A1]" />
            <h6 className="ml-2">{surface}</h6>
            <h6 className="ml-1">m^2</h6>
          </div>
          <div className="flex flex-row p-4 items-center justify-start">
            <BsFillHouseDoorFill size={20} className="text-[#4A65A1] " />
            <h6 className="ml-2">{type_ai}</h6>
          </div>
        </div>
      </div>
    )
  );
};

export default Ai;
