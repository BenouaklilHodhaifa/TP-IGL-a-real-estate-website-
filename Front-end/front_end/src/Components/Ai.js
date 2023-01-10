import {BsFillTelephoneOutboundFill,BsFillHouseDoorFill, BsHouseDoorFill} from 'react-icons/bs';
import {AiFillDollarCircle} from 'react-icons/ai';
import {RxRulerSquare} from 'react-icons/rx';
//npm install reactjs-popup --save for the popup
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Ai = ({annonce}) => {
  const {information_tel,surface,prix,type_ai,uploaded_images} = annonce
  return (
      <div className="bg-[#F5FBFF] shadow-1  rounded-lg min-h-[375px] w-[350px] cursor-pointer  hover:shadow-2xl  p-1" >
        <img src={uploaded_images}  alt="imggg" className="w-full h-[230px] rounded-lg"/>

        <div className="grid grid-cols-2 grid-rows-2 mt-3">
          <div className="flex flex-row p-4 items-center justify-start">
            <AiFillDollarCircle size={20} className="text-[#4A60A1]"/>
            <h6 className="ml-2">
              {prix}
            </h6>
            <h6 className="ml-1">
                DINARS
            </h6>
          </div>
          <div className="flex flex-row p-4 items-center justify-start">
            <BsFillTelephoneOutboundFill size={20} className="text-[#4A60A1]"/>
            <h6 className="ml-2">
              {information_tel}
            </h6>
          </div>
          <div className="flex flex-row p-4 items-center justify-start">
            <RxRulerSquare size={20} className="text-[#4A60A1]"/>
            <h6 className="ml-2">
              {surface}
            </h6>
            <h6 className="ml-1">
                m^2
            </h6>
          </div>
          <div className="flex flex-row p-4 items-center justify-start">
            <BsFillHouseDoorFill size={20} className="text-[#4A65A1] "/>
            <h6 className="ml-2">
              {type_ai}
            </h6>
          </div>
        </div>
      </div>
  );
};

export default Ai;
