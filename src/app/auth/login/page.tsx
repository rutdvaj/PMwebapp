import React from "react";
import { LoginCard } from "./logincard";
import { UserProvider } from "../authorizaiton";

function Login() {
  return (
    <div className="main">
      <UserProvider>
        <div className=" flex justify-center items-center  h-screen dark:bg-slate-900 ">
          <LoginCard></LoginCard>
        </div>
      </UserProvider>
    </div>
  );
}

export default Login;
