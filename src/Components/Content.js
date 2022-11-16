import React from "react";
import { FaEthereum } from "react-icons/fa";
function Content() {
  const items = [
    {
      url: "https://back.m3.games/video/1668350900_e7c127d48cd60b85f679.mp4",
      title: "Sweetclash 1st Edition Etherum",
      ethPrice: "0.712 ETH",
      Price: "891.0000",
    },
    {
      url: "https://back.m3.games/video/1668298285_f7215ea958831e67e03d.mp4",
      title: "God Of Gods 1st Edition Ethereum",
      ethPrice: "0.712 ETH",
      Price: "891.0000",
    },
  ];
  return (
    <div className=" mt-20  md:p-10">
      <h1 className=" dark:text-white md:text-[5rem] text-center text-[3rem] font-[800] text-purple ">
        {" "}
        Collect Gaming Assets{" "}
      </h1>
      <p className=" dark:text-gray md:text-[30px] md:mt-2 text-center text-[20px] mt-4   ">
        {" "}
        Buy And Sell NFTs From Our first Collection{" "}
      </p>
      <div className=" md:flex md:gap-4 mt-20 ">
        {items.map((item) => {
          return (
            <div className=" md:w-[25%] w-[80%] mx-auto md:mx-0  mt-8 rounded-[10px] overflow-hidden dark:shadow-none shadow-2xl  ">
              <a href="#">
                <video playsInline muted loop autoPlay>
                  <source src={item.url} />
                </video>
              </a>
              <div className=" dark:bg-purple p-4">
                <h3 className=" dark:text-white text-xl text-center text-purple font-[800] hover:text-purpleSecond cursor-pointer">
                  {" "}
                  {item.title}{" "}
                </h3>
                <div className=" mt-4 text-gray items-center flex justify-between">
                  <p className=" flex  items-center justify-center">
                    <span>
                      <FaEthereum className=" text-gray" />
                    </span>
                    <span className=" text-[1.2rem] text-green font-[800] ">
                      {item.ethPrice}
                    </span>
                  </p>
                  <span> ~$ {item.Price} </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
