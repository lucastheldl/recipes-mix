import { Figma, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center align-middle bg-lightBlue w-full p-10 mt-auto">
      <ul className="flex gap-10">
        <li className="text-violet">
          <Link
            href={
              "https://www.linkedin.com/in/lucas-emanoel-figueiredo-da-silva/"
            }
          >
            <Linkedin />
          </Link>
        </li>
        <li className="text-violet">
          <Link
            href={
              "https://www.linkedin.com/in/lucas-emanoel-figueiredo-da-silva/"
            }
          >
            <Figma />
          </Link>
        </li>
        <li className="text-violet">
          <Link
            href={
              "https://www.linkedin.com/in/lucas-emanoel-figueiredo-da-silva/"
            }
          >
            <Github />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
