"use client";
import { UserProvider } from "../authorizaiton";
import { CardWithForm } from "./cards";

const loginFunction = () => {
  return (
    <div className="main">
      <UserProvider>
        <div className=" flex justify-center items-center  h-screen dark:bg-slate-900 ">
          <div className="">
            <CardWithForm></CardWithForm>
          </div>
        </div>
      </UserProvider>
    </div>
  );
};

export default loginFunction;
