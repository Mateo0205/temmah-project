"use client"; // Add this directive at the top

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../app/context/AuthContest"; // Adjust the path to your auth hook
import { NAV_LINKS } from "@/constants";
// import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const { user, logOut, signIn } = useAuth(); // Assuming signIn is also provided by useAuth

  return (
    <nav
      id="top"
      className="flex justify-evenly padding-container z-30 py-4 px-2 bg-[rgba(199,200,203,0.18)] backdrop-blur-[16px] border-2"
    >
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>

      <div className="flex flexCenter gap-4">
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 font-extrabold text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:border-b-2 hover:border-blue-500 bottom-0"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          {user ? (
            <button
              onClick={logOut}
              className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 border-2 border-red-500 rounded-full hover:bg-red-600 transition-all duration-300"
            >
              <Image src="/logout.svg" alt="Logout" width={20} height={20} />
              <span className="font-semibold">Se Déconnecter</span>
            </button>
          ) : (
            <button
              onClick={signIn}
              className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 border-2 border-green-500 rounded-full hover:bg-green-600 transition-all duration-300"
            >
              <Image src="/login.svg" alt="Logout" width={20} height={20} />
              <span className="font-semibold">Se connecter</span>
            </button>
          )}
        </div>
        {/* <LanguageSelector /> */}

        <Image
          src="menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
