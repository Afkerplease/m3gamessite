import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { BsFillSunFill } from "react-icons/bs";

import { BsWallet2 } from "react-icons/bs";
import { RiMenu5Fill } from "react-icons/ri";
import { IoIosMoon } from "react-icons/io";

function NavBar({ click, theme, modal }) {
  const [iconClicked, setIconClicked] = useState(false);
  const clickHandle = () => {
    setIconClicked(!iconClicked);
  };
  const [stick, setStick] = useState(false);
  useEffect(() => {
    const settingstick = () => {
      if (window.scrollY >= 300) {
        setStick(true);
      } else {
        setStick(false);
      }
    };
    window.addEventListener("scroll", settingstick);
  }, [stick]);

  return (
    <div
      className={` ${
        stick ? " fixed  bg-whitness   " : ""
      } "  backdrop:blur    ease-out duration-[.25s]  transition-all     w-full top-0  z-10  "  `}
    >
      <nav className=" md:px-10 md:py-5 p-4  relative   z-[1] ">
        <div className="  pt-4 flex justify-between items-center">
          <img
            className=" w-[50px] md:w-[70px] cursor-pointer "
            src={logo}
            alt=""
          />
          <div className=" flex gap-4">
            <button
              className=" transition ease-out duration-300   dark:bg-gray dark:text-white dark:hover:bg-purpleSecond  bg-white hover:text-white md:hidden  border-[1px] border-gray hover:bg-purpleSecond p-2 rounded-full "
              onClick={clickHandle}
            >
              {theme === "light" ? (
                <IoIosMoon onClick={click()} lassName="  h-4 w-4 " />
              ) : (
                <BsFillSunFill onClick={click()} lassName="  h-4 w-4 " />
              )}
            </button>
            <button
              onClick={() => {
                modal();
              }}
              className=" dark:hover:bg-purpleSecond transition ease-out duration-300  dark:bg-gray dark:text-white bg-white border-[1px]  hover:bg-purpleSecond hover:text-white border-gray rounded-full p-2 md:hidden"
            >
              {" "}
              <RiMenu5Fill className="  h-4 w-4 " />
            </button>
          </div>
          <div className="  hidden md:flex gap-4 ">
            <button className=" transition ease-out duration-300   bg-white   hover:bg-purpleSecond hover:text-white p-4 rounded-full ">
              <BsWallet2 />
            </button>
            <button
              className=" transition ease-out duration-300  bg-white hover:text-white  hover:bg-purpleSecond p-4 rounded-full "
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
    </div>
  );
}

export default NavBar;
