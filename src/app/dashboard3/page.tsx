import React from "react";
import DBdivs from "../dashboard1/DBdivs";
import AvatarDemo from "../dashboard1/avatar";
import DBherosection2 from "../dashboard1/DBherosection2";
import DB3herosection from "./DB3herosection";
import { UserProvider } from "../auth/authorizaiton";
function page() {
  return (
    <div>
      <UserProvider>
        <div>
          <div className="maindiv flex justify-between">
            <div className="h-screen ml-5  w-screen">
              <div className="div-avatar mt-16">
                <AvatarDemo />
              </div>
              <div className="dashboard-div mt-12">
                <DBdivs />
              </div>
            </div>
            <div className="dashboard-herosection-3">
              <DB3herosection />
            </div>
            <div className="dashboard-herosection-2">
              <DBherosection2 />
            </div>
          </div>
        </div>
      </UserProvider>
    </div>
  );
}

export default page;
