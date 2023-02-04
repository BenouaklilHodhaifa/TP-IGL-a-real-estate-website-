import {
  BsFillTelephoneOutboundFill,
  BsFillHouseDoorFill,
  BsHouseDoorFill,
} from "react-icons/bs";
import { FaUser, FaHouseUser } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillDollarCircle, AiFillMail } from "react-icons/ai";
import { RxRulerSquare } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
//npm install reactjs-popup --save for the popup

import "leaflet/dist/leaflet.css";
import { Map, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerPosition from "./MarkerPosition";
import { useState } from "react";

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
    information_email = "annonceur@email.dz",
    information_nom = "nom_annonceur",
    information_prenom = "prenom_annonceur",
    information_adresse = "adresse_annonceur",
    user = "",
    uploaded_images = [],
  } = annonce;
  const [showModal, setShowModal] = useState(false);
  const [slides, setSlides] = useState(0);
  const [message, setMessage] = useState("");
  const [messageChanged, setMessageChanged] = useState(false);

  console.log(uploaded_images[0]);
  return (
    <div
      className="bg-[#F5FBFF] shadow-1  rounded-lg h-full w-[350px] cursor-pointer  hover:shadow-2xl  p-1"
      onClick={() => setShowModal(!showModal)}
    >
      <img
        src={uploaded_images[0]}
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

      {showModal ? (
        <>
          <div
            className="flex flex-col h-[1000px] inset-0 z-50 bg-indigo-200 scroll-auto absolute"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex justify-end w-full p-5">
              <TfiClose
                size={30}
                className="text-[#4A65A1]"
                onClick={() => {
                  setShowModal(!showModal);
                }}
              />
            </div>

            <div className="flex flex-row justify-center w-full my-2 rounded-2xl">
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
            <div className="w-full px-4 md:px-2 md:gap-1 flex flex-col md:flex-row justify-between bg-white">
              <div className="md:w-1/2 w-full flex-1 px-4 py-4">
                <h6 className="text-xl font-extrabold text-[#000000] my-2 mx-5">
                  {titre}
                </h6>
                <p className="text-lg  my-2 mx-5">{description}</p>
                <div className="flex flex-row ml-5">
                  <div>
                    <div className="flex flex-row p-4 items-center justify-start">
                      <AiFillDollarCircle
                        size={20}
                        className="text-[#4A60A1]"
                      />
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
                      <BsFillHouseDoorFill
                        size={20}
                        className="text-[#4A65A1] "
                      />
                      <h6 className="ml-2">{type_ai}</h6>
                    </div>
                  </div>
                  <div className="ml-20">
                    <div className="flex flex-row p-4 items-center justify-start">
                      <FaUser size={20} className="text-[#4A60A1]" />
                      <h6 className="ml-2">{information_nom}</h6>
                    </div>
                    <div className="flex flex-row p-4 items-center justify-start">
                      <FaUser size={20} className="text-[#4A60A1]" />
                      <h6 className="ml-2">{information_prenom}</h6>
                    </div>
                    <div className="flex flex-row p-4 items-center justify-start">
                      <AiFillMail size={20} className="text-[#4A60A1]" />
                      <h6 className="ml-2">{information_email}</h6>
                    </div>
                    <div className="flex flex-row p-4 items-center justify-start">
                      <FaHouseUser size={20} className="text-[#4A65A1] " />
                      <h6 className="ml-2">{information_adresse}</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full flex-1 flex justify-center mt-4">
                <MapContainer
                  attributionControl={false}
                  center={[35, 3]}
                  zoom={6}
                  scrollWheelZoom={true}
                  style={{ width: "500px", height: "300px" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/*ENTER THE COORDINATES IN POS*/}
                  <MarkerPosition pos={[35, 3]} />
                </MapContainer>
              </div>
            </div>

            <div className="flex justify-center flex-row mt-10">
              <form
                className="flex flex-row "
                onSubmit={(e) => {
                  /*ENVOYER MESSAGE ICI*/
                }}
              >
                <h6 className="text-xl font-extrabold text-[#4A65A1] my-3">
                  faire une offre :
                </h6>
                <textarea
                  onChange={() => {
                    setMessageChanged(true);
                  }}
                  class="resize-y shadow appearance-none border rounded py-4 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline mx-5"
                  placeholder="Entrer Votre message"
                  required
                />
                <button className="bg-[#4A65A1] rounded-lg text-white p-2 h-[45px] my-2">
                  envoyer
                </button>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Ai;
