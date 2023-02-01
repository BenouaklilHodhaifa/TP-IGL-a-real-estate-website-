import {
  BsFillTelephoneOutboundFill,
  BsFillHouseDoorFill,
  BsHouseDoorFill,
} from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { RxRulerSquare } from "react-icons/rx";
//npm install reactjs-popup --save for the popup
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";

const Ai = ({annonce}) => {
  const {
    information_tel = "",
    surface = "",
    prix = "",
    type_ai = "",
    uploaded_images = "",
  } = annonce;
  const [showModal,setShowModal] = useState(false);
  return (
    <div className="bg-[#F5FBFF] shadow-1  rounded-lg min-h-[375px] w-[350px] cursor-pointer  hover:shadow-2xl  p-1" onClick={()=>setShowModal(!showModal)}>
      <img
        src={uploaded_images}
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
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onClick={(e)=>{e.stopPropagation()}}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Ai;
