import {
  BsFillTelephoneOutboundFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { RxRulerSquare } from "react-icons/rx";
import image from "./photo.png";

import "leaflet/dist/leaflet.css";
import { Map, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerPosition from "./MarkerPosition";
// import { useState } from "react";
//npm install reactjs-popup --save for the popup
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";

const Ai = ({ annonce, favorites, favorites_ai }) => {
  const token = JSON.parse(localStorage.getItem("Recent_token"))?.token;
  const {
    titre = "",
    description = "",
    date_Publication = "",
    type_ai = "",
    surface = "",
    prix = "",
    information_tel = "",
    images = [],
  } = annonce;
  const [favorite, setFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [slides, setSlides] = useState(0);
  console.log(showModal)

  return (
    annonce && (
      <div
        className="bg-[#F5FBFF] shadow-1  rounded-lg min-h-[375px] w-[350px] cursor-pointer  hover:shadow-2xl  p-1"
        onClick={() => setShowModal(!showModal)}
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
