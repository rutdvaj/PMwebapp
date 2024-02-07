"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { account, ID } from "../appwrite";

// Assuming Session is a variable of any type
type Session = any;

interface User {
  id: string;
  email: string;
  // ... other properties
}

interface UserContextProps {
  current: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export function useUser(): UserContextProps {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export function UserProvider(props: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string): Promise<void> {
    try {
      const session: Session = await account.createEmailSession(
        email,
        password
      );
      // Adjust based on the actual structure of the session variable
      const loggedInUser: User = { id: session.userId, email: session.email };
      setUser(loggedInUser);
    } catch (error) {
      console.error("Login failed", error);
      setUser(null);
    }
  }

  async function logout(): Promise<void> {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(email: string, password: string): Promise<void> {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      console.error("Registration failed", error);
      setUser(null);
    }
  }

  useEffect(() => {
    // Initialize user on component mount
    init();
  }, []);

  async function init(): Promise<void> {
    try {
      const userFromAccountGet: any = await account.get(); // Adjust the type if needed
      const loggedInUser: User = {
        id: userFromAccountGet.id, // Adjust these properties based on what 'account.get()' returns
        email: userFromAccountGet.email,
        // ... other properties
      };
      setUser(loggedInUser);
    } catch (error) {
      setUser(null);
    }
  }

  const contextValue: UserContextProps = {
    current: user,
    login,
    logout,
    register,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
}
