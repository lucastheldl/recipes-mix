import Image from "next/image";
import logo from "../../public/Logo.png";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex py-5 px-24 content-center justify-between bg-lightBlue">
      <Image src={logo} alt="logo" />
      <ul className="flex gap-10 list-none text-lg">
        <li className="text-violet font-semibold ">
          <Link href={"#"}>Minhas Receitas</Link>
        </li>
        <li className="text-violet font-semibold">
          <Link href={"#"}>Registrar</Link>
        </li>
      </ul>
    </div>
  );
}
