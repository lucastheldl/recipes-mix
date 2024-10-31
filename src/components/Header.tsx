"use client";
import Image from "next/image";
import logo from "../../public/Logo.png";
import Link from "next/link";
import { Soup, SquarePen } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export function Header() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex py-5 px-24 content-center justify-between bg-lightBlue">
      <Image src={logo} alt="logo" />
      <ul className="flex gap-10 list-none text-lg">
        <li className="flex gap-2 justify-center items-center text-violet font-semibold ">
          <Soup />
          <Link href={user ? "#" : "/auth/register"}>Minhas Receitas</Link>
        </li>
        {!user && (
          <li className="flex gap-2 justify-center items-center text-violet font-semibold">
            <SquarePen />
            <Link href={"/auth/register"}>Registrar</Link>
          </li>
        )}
        {user && (
          <li className="flex gap-2 justify-center items-center text-violet font-semibold">
            <SquarePen />
            <Link href={"/auth/login"}>Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
