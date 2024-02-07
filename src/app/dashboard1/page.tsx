import React from "react";
import AvatarDemo from "./avatar";
import DBdivs from "./DBdivs";
import DBherosection from "./DBherosection";
import DBherosection2 from "./DBherosection2";
import { UserProvider } from "../auth/authorizaiton";
export default function DashboardOne() {
  return (
    <div className="main">
      <UserProvider>
        <div className="maindiv flex justify-between">
          <div className="h-screen ml-5  w-screen">
            <div className="div-avatar mt-16">
              <AvatarDemo />
            </div>
            <div className="dashboard-div mt-12">
              <DBdivs />
            </div>
          </div>
          <div className="dashboard-herosection">
            <DBherosection />
          </div>
          <div className="dashboard-herosection-2">
            <DBherosection2 />
          </div>
        </div>
      </UserProvider>
    </div>
  );
}
