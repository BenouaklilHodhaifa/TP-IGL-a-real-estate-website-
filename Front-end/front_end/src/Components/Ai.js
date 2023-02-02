import {
  BsFillTelephoneOutboundFill,
  BsFillHouseDoorFill,
  BsHouseDoorFill,
} from "react-icons/bs";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
import { AiFillDollarCircle } from "react-icons/ai";
import { RxRulerSquare } from "react-icons/rx";
//npm install reactjs-popup --save for the popup
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";

const Ai = ({annonce}) => {
  const {
    titre="",
    description="",
    date_Publication="",
    type_ai="",
    category="",
    surface="",
    prix="",
    wilaya="",
    commune="",
    adresse_ai="",
    information_tel="",
    information_email="",
    information_nom="",
    information_prenom="",
    information_adresse="",
    user="",
    uploaded_images=[],
  } = annonce;
  const [showModal,setShowModal] = useState(false);
  const [slides,setSlides] = useState(0)
  console.log(uploaded_images[0])
  return (
    <div className="bg-[#F5FBFF] shadow-1  rounded-lg min-h-[375px] w-[350px] cursor-pointer  hover:shadow-2xl  p-1" onClick={()=>setShowModal(!showModal)}>
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
            className="flex fixed inset-0 z-50 bg-yellow-700" onClick={(e)=>{e.stopPropagation()}}
          >
            <div className="flex flex-row justify-center w-full">
                <AiOutlineArrowLeft className="relative mt-40 mx-5 " onClick={()=>setSlides((slides - 1)%uploaded_images.length)}/>
                <img src={uploaded_images[slides]} className=" h-[350px] w-[800px]"/>
                <AiOutlineArrowRight className="relative mt-40 mx-5" onClick={()=>setSlides((slides + 1)%uploaded_images.length)}/>

            </div>
            

            
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Ai;
