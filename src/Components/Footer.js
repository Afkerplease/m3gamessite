import React from "react";
import logo from "../images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="flex flex-col mt-20  p-8  items-center md:grid md:grid-cols-4 md:place-items-center ">
        <div className=" flex flex-col gap-2">
          <img src={logo} className=" mx-auto w-[80px] " alt="" />
          <h2 className=" dark:text-gray text-center mt-4">
            First Freemium H5 NFT Games
          </h2>
          <div className=" mt-10 justify-center  flex gap-6">
            <a
              href="https://www.facebook.com/M3.games"
              className=" text-[25px] text-gray dark:hover:text-white  hover:text-purpleSecond "
              target="_blank"
            >
              <FaFacebook />{" "}
            </a>
            <a
              className=" text-[25px] text-gray  dark:hover:text-white  hover:text-purpleSecond "
              target="_blank"
              href="https://twitter.com/M3gamesofficial"
            >
              <FaTwitter />{" "}
            </a>
            <a
              className=" text-[25px] text-gray  dark:hover:text-white  hover:text-purpleSecond "
              target="_blank"
              href="https://discord.com/invite/kXpkkBcVeZ"
            >
              <FaDiscord />{" "}
            </a>

            <a
              className=" text-[25px] text-gray  dark:hover:text-white  hover:text-purpleSecond "
              target="_blank"
              href="https://www.instagram.com/m3.games/"
            >
              <FaInstagram />{" "}
            </a>
            <a
              className=" text-[25px] text-gray  dark:hover:text-white  hover:text-purpleSecond "
              target="_blank"
              href="https://t.me/M3_games_english"
            >
              <FaTelegramPlane />{" "}
            </a>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-2 mt-8 ">
          <h2 className="text-purple  dark:text-white text-2xl font-[800]">
            About
          </h2>
          <ul className="flex flex-col md:gap-2 items-center">
            <li>
              <a
                href="#"
                className="hover:text-purpleSecond dark:text-gray dark:hover:text-white "
              >
                {" "}
                What's M3{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purpleSecond  dark:text-gray dark:hover:text-white"
              >
                Whitepaper{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className=" mt-8 flex flex-col gap-2 items-center">
          <h2 className="text-purple  text-2xl font-[800] dark:text-white ">
            Contact
          </h2>
          <ul>
            <li>
              <a
                href="#"
                className=" hover:text-purpleSecond dark:text-gray dark:hover:text-white  "
              >
                {" "}
                Contact Us{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-2 mt-8">
          <h2 className=" text-purple  text-2xl font-[800] dark:text-white ">
            Play
          </h2>
          <ul>
            <li>
              <a
                href="#"
                className=" hover:text-purpleSecond  dark:text-gray dark:hover:text-white"
              >
                {" "}
                Play Now{" "}
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className=" pb-4 dark:text-gray text-center md:text-center ">
        {" "}
        Ⓒ 2022 M3 Games{" "}
      </p>
    </>
  );
}

export default Footer;
