import React from "react";
import logo from "../images/logo.png";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ click }) {
  return (
    <div className="absolute md:hidden top-0 z-20 bg-white w-full h-[100%] ">
      <div className=" px-4 py-8 flex justify-between ">
        <img src={logo} className=" w-[50px] h-[50px] " alt="" />
        <button
          onClick={() => {
            click();
          }}
          className=" hover:text-white hover:bg-purpleSecond bg-white border-[1px] border-gray rounded-full p-4  "
        >
          {" "}
          <AiOutlineClose className=" h-4 w-4  " />{" "}
        </button>
      </div>

      <button className=" w-[80%] bg-purpleSecond hover:bg-purpleSecond2 text-white ml-10  p-4 rounded-[30px] mt-20  ">
        {" "}
        Connect wallet{" "}
      </button>
    </div>
  );
}

export default Modal;
