"use client";
import { createContext, ReactNode, useState } from "react";

interface User {
  username: "";
  email: "";
}
interface AuthContextType {
  user: User | null;
  updateUser: (user: User | null) => void;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  function updateUser(user: User | null) {
    setUser(user);
  }
  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
