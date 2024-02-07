"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../authorizaiton";

import { account } from "../../appwrite";
import { ID } from "../../appwrite";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardWithForm() {
  const { current: loggedInUser, register } = useUser();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registerClicked, setRegisterClicked] = useState<boolean>(false);
  const handleRegister = async () => {
    setRegisterClicked(true);
    await register(email, password);
  };
  useEffect(() => {
    // Check if the user is logged in and the register button has been clicked
    if (loggedInUser && registerClicked) {
      // Redirect to the main dashboard page
      router.push("../dashboard1");
    } else {
      console.log(loggedInUser);
    }
  }, [loggedInUser, registerClicked]);
  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle className="font--poppins font-bold text-3xl">
          Create Account
        </CardTitle>
        <CardDescription>Create your Account to gain acceess.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input
                id="name"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5"></div>
            <Label htmlFor="name">Password</Label>
            <Input
              id="name"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <div>
          <Button type="button" onClick={handleRegister}>
            Create
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
