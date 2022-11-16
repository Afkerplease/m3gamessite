import React, { useState } from "react";
import logo from "../images/logo.png";
import { MdClose } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

import { BsWallet2 } from "react-icons/bs";
import { RiMenu5Fill } from "react-icons/ri";
import { IoIosMoon } from "react-icons/io";

function NavBar({ click, theme }) {
  const [iconClicked, setIconClicked] = useState(false);
  const clickHandle = () => {
    setIconClicked(!iconClicked);
  };

  return (
    <nav className=" p-4  ">
      <div className="  pt-4 flex justify-between items-center">
        <img className=" w-[50px] cursor-pointer " src={logo} alt="" />
        <div className=" flex gap-4">
          <button
            className="  dark:bg-gray dark:text-white  bg-white hover:text-white md:hidden  border-[1px] border-gray hover:bg-purpleSecond p-2 rounded-full "
            onClick={clickHandle}
          >
            {theme === "light" ? (
              <IoIosMoon onClick={click()} lassName="  h-4 w-4 " />
            ) : (
              <BsFillSunFill onClick={click()} lassName="  h-4 w-4 " />
            )}
          </button>
          <button className="  dark:bg-gray dark:text-white bg-white border-[1px]  hover:bg-purpleSecond hover:text-white border-gray rounded-full p-2 md:hidden">
            {" "}
            <RiMenu5Fill className="  h-4 w-4 " />
          </button>
        </div>
        <div className="  hidden md:flex gap-4 ">
          <button className="  bg-white   hover:bg-purpleSecond hover:text-white p-4 rounded-full ">
            <BsWallet2 />
          </button>
          <button
            className=" bg-white hover:text-white  hover:bg-purpleSecond p-4 rounded-full "
            onClick={clickHandle}
          >
            {theme === "light" ? (
              <IoIosMoon onClick={click()} lassName="  h-4 w-4 " />
            ) : (
              <BsFillSunFill onClick={click()} lassName="  h-4 w-4 " />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
