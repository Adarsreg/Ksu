import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Mission = () => {
  return (
    <>
      {/* Div contains the following sub divs respectively:Mission*/}
      <div className=" ">
        {/* The Mission Div*/}
        <div
          className="shadow-sm hover:text-white flex flex-col justify-center
         hover:bg-sky-800 transition-all rounded-md items-center
         p-10 md:p-16 lg:p-20 space-y-6"
        >
          <div className=" flex justify-center">
            <p className=" font-sanserif font-semibold text-bottom text-3xl md:text-5xl">
              Vision and Mission
            </p>
          </div>
          <div className="font-sanserif w-[80%] text-justify md:text-md lg:text-lg font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            veniam! A magnam amet sunt esse nostrum minima perferendis qui in.
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
