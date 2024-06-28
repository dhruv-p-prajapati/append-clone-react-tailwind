import { useEffect, useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavLinks: string[] = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Pricing",
  "Team",
  "Blog",
  "Dropdown",
  "Contact",
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    const navHeight: number = (document.querySelector("#nav") as HTMLDivElement)
      .offsetHeight;
    window.scrollY > navHeight ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="nav"
      className={`fixed top-0 left-0 right-0 ${
        isScrolled ? "bg-white" : ""
      } flex justify-between items-center py-8 px-4 duration-500 z-10`}
    >
      {/* Logo */}
      <div className="flex gap-1 text-2xl font-semibold">
        <h1 className={`${isScrolled ? "text-primary" : "text-white"}`}>
          Append
        </h1>
        <span className="text-accent">.</span>
      </div>

      {/* Links */}
      <div>
        <ul
          className={`${isScrolled ? "" : "text-white"} lg:flex ${
            open
              ? "bg-white flex flex-col gap-5 text-black absolute w-[90vw] h-screen top-16 items-start -translate-x-1/2 left-1/2 rounded p-4"
              : "hidden gap-7 text-black"
          }`}
        >
          {NavLinks.map((navLink) => {
            return <li>{navLink}</li>;
          })}
        </ul>
      </div>

      {/* Get started Button and Hamburger Menu */}
      <div className="flex justify-center items-center gap-3">
        <Button>Get Started</Button>

        <div className="lg:hidden">
          {!open ? (
            <GiHamburgerMenu
              className={`text-2xl ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              onClick={() => {
                setOpen(!open);
              }}
            />
          ) : (
            <IoMdClose
              className={`text-2xl ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              onClick={() => {
                setOpen(!open);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
