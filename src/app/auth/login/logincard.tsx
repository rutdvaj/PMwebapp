"use client";
import * as React from "react";
import { useState, useEffect, createContext, useContext } from "react";
import { account } from "../../appwrite";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUser } from "../authorizaiton";
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

export function LoginCard() {
  const { current: loggedInUser, login } = useUser();
  const [loginClicked, setLoginClicked] = useState<boolean>(false);
  const router = useRouter();
  // const userContext = createContext(null);

  const handleLogin = async (email: string, password: string) => {
    setLoginClicked(true);
    await login(email, password);
  };

  useEffect(() => {
    // Check if the user is logged in and the login button has been clicked
    if (loggedInUser && loginClicked) {
      // Redirect to the main dashboard page
      router.push("../dashboard1");
    } else {
      console.log(loggedInUser);
    }
  }, [loggedInUser, loginClicked]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="test">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle className="font--poppins font-bold text-4xl">
            Login
          </CardTitle>
          <CardDescription>
            Login to your account to gain access.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  id="name"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Password</Label>
                <Input
                  id="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => router.push("../../auth/register")}
          >
            Sign up
          </Button>
          <Button type="button" onClick={() => handleLogin(email, password)}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
