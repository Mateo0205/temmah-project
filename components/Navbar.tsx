import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container z-30 py-5 rounded-3xl border-2 border-black ">
      
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>

      <div className="flex flexCenter gap-4">
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 font-extrabold text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:border-b-2 hover:border-blue-500 "
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden   ">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
          
        </div>

        <Link href="/login" className="text-black hover:text-blue-200">Sign Up</Link>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </nav>
    
  );
};

export default Navbar;
