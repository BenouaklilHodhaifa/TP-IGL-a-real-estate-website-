import {
  BsFillTelephoneOutboundFill,
  BsFillHouseDoorFill,
  BsHouseDoorFill,
} from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { RxRulerSquare } from "react-icons/rx";
//npm install reactjs-popup --save for the popup
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import { FaUnderline } from "react-icons/fa";

const Ai = ({ annonce }) => {
  const {
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
    uploaded_images = [],
  } = annonce;
  const [showModal, setShowModal] = useState(false);
  const [slides, setSlides] = useState(0);

  return (
    <div
      className="bg-[#F5FBFF] shadow-1  rounded-lg min-h-[375px] w-[370px] cursor-pointer  hover:shadow-2xl  p-1"
      onClick={() => setShowModal(!showModal)}
    >
      <img
        src={
          uploaded_images[0] != undefined
            ? "http://127.0.0.1:8000/" + uploaded_images[0]
            : "http://127.0.0.1:8000/"
        }
        alt="imggg"
        className="w-full h-[230px] rounded-lg"
      />

      <div className="grid grid-cols-2 grid-rows-2 mt-3">
        <div className="flex flex-row p-4 items-center justify-start">
          <AiFillDollarCircle size={20} className="text-[#4A60A1]" />
          <h6 className="ml-2">{prix}</h6>
          <h6 className="ml-1">DINARS</h6>
        </div>
        <div className="flex flex-row p-2 items-center justify-start">
          <BsFillTelephoneOutboundFill size={20} className="text-[#4A60A1]" />
          <h6 className="ml-2">{information_tel}</h6>
        </div>
        <div className="flex flex-row p-4 items-center justify-start">
          <RxRulerSquare size={20} className="text-[#4A60A1]" />
          <h6 className="ml-2">{surface}</h6>
          <h6 className="ml-1">m^2</h6>
        </div>
        <div className="flex flex-row p-4 items-center justify-start">
          {type_ai != null ? (
            <>
              <BsFillHouseDoorFill size={20} className="text-[#4A65A1] " />
              <h6 className="ml-2">{type_ai}</h6>
            </>
          ) : (
            <>
              <BsFillHouseDoorFill size={20} className="text-[#4A65A1] " />
              <h6 className="ml-2">inconnu</h6>
            </>
          )}
        </div>
      </div>

      {showModal ? (
        <>
          <div
            className="flex flex-col inset-0 z-50 bg-[#F5FBFF] scroll-auto absolute"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-row justify-center w-full my-2 ">
              <AiOutlineArrowLeft
                className="relative mt-40 "
                size={30}
                onClick={() => {
                  if (slides > 0) {
                    setSlides(slides - 1);
                  }
                }}
              />
              <img
                src={uploaded_images[slides]}
                className="mx-5 h-[350px] w-[800px] select-none rounded-lg"
                onClick={() => {
                  setSlides((slides + 1) % uploaded_images.length);
                }}
              />
              <AiOutlineArrowRight
                className="relative mt-40 "
                size={30}
                onClick={() => {
                  if (slides < uploaded_images.length - 1) {
                    setSlides(slides + 1);
                  }
                }}
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="bg-violet-700 flex-1">
                <h6>{titre}</h6>
                <p>{description}</p>
                <div className="flex flex-row p-4 items-center justify-start">
                  <AiFillDollarCircle size={20} className="text-[#4A60A1]" />
                  <h6 className="ml-2">{prix}</h6>
                  <h6 className="ml-1">DINARS</h6>
                </div>
                <div className="flex flex-row p-4 items-center justify-start">
                  <BsFillTelephoneOutboundFill
                    size={20}
                    className="text-[#4A60A1]"
                  />
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

              <div className="bg-violet-300 flex-1 flex justify-center">
                maps
              </div>
            </div>
            <div>
              <form>
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  faire un offre
                </label>
                <input
                  class="shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-[250px]"
                  type="text"
                  placeholder=""
                />
                <button />
              </form>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Ai;
