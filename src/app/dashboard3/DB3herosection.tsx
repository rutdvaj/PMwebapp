import React from "react";
import rinput from "./rrinput";
import { Input } from "@/components/ui/input";

function DB3herosection() {
  return (
    <div className="main h-screen w-[950px]">
      <div className="h1">
        <h1 className="text-white text-[24px] font-semibold font--poppins mt-60">
          Available Redesign Request
        </h1>
      </div>
      <div className="rr mt-16">
        <div className="flex-col rr-1 w-[760px] h-[215px] bg-redesigntask text-white flex justify-around rounded-[32px] ">
          <h1 className="text-white text-[24px] font-medium mt-5 mr-60 ml-16">
            Redesign Request 1
          </h1>
          <div className="desc text-black bg-inputrr w-[650px] h-[120px] rounded-[26px] ml-10">
            <Input placeholder="Description" />
          </div>
        </div>
        <div className="rr-2 flex w-[760px] h-[75px] bg-redesigntask text-white rounded-[32px] mt-10">
          <h1 className="font--poppins font-semibold text-[20px] text-white ml-10 mt-5 items-center">
            Redesign Request 2
          </h1>
        </div>
        <div className="rr-2 flex w-[760px] h-[75px] bg-redesigntask text-white rounded-[32px] mt-10">
          <h1 className="font--poppins font-semibold text-[20px] text-white ml-10 mt-5 items-center">
            Redesign Request 3
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DB3herosection;
