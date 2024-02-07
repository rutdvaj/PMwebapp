import React from "react";
import { CalendarDemo } from "./calendar";
import { ButtonDemo } from "./meeting";
import Image from "next/image";

export default function DBherosection2() {
  return (
    <div className="main">
      <div className="setup-meeting mt-7 ml-16">
        <ButtonDemo />
      </div>
      <div className="w-[350px] h-[900px] bg-projecttask bg-opacity-25 rounded-xl mr-6 mt-16 ">
        <div className="calender bg-verydark   mr-7 rounded-lg  ml-6  ">
          <CalendarDemo />
        </div>
        <div className="objectives flex flex-col justify-between">
          <div className="objective-title text-white font--poppins font-bold text-[28px] p-7">
            <h1>Objectives :-</h1>
          </div>
          <div className="objective-1 text-white font--poppins  text-[28px] font-regular p-7">
            <h1>1. Objective One</h1>
          </div>
          <div className="objective-2 text-white font--poppins font-regular text-[28px] p-7">
            <h1>2. Objective two</h1>
          </div>
          <div className="objective-3 text-white font--poppins font-regular text-[28px] p-7">
            <h1>3. Objective three</h1>
          </div>
          <div className="objective-4 text-white font--poppins font-regular text-[28px] p-7">
            <h1>4. Objective four</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
