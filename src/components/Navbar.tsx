import { useEffect, useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { cn } from "../utils/helpers";

export enum NavLinkSlugs {
  HOME = "/",
  ABOUT = "about",
  SERVICES = "services",
  PORTFOLIO = "portfolio",
  PRICING = "pricing",
  TEAM = "team",
  BLOG = "blog",
  CONTACT = "contact",
  DROPDOWN = "dropdown",
}

interface INavLinkItem {
  title: string;
  slug: string;
}

const NavLinkItems: INavLinkItem[] = [
  { title: "Home", slug: "" },
  { title: "About", slug: NavLinkSlugs.ABOUT },
  { title: "Services", slug: NavLinkSlugs.SERVICES },
  { title: "Portfolio", slug: NavLinkSlugs.PORTFOLIO },
  { title: "Pricing", slug: NavLinkSlugs.PRICING },
  { title: "Team", slug: NavLinkSlugs.TEAM },
  { title: "Blog", slug: NavLinkSlugs.BLOG },
  { title: "Dropdown", slug: NavLinkSlugs.DROPDOWN },
  { title: "Contact", slug: NavLinkSlugs.CONTACT },
];

const Navbar = ({ isOtherRoute }: { isOtherRoute?: Boolean }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const handleScroll = () => {
    window.scrollY > navHeight ? setIsScrolled(true) : setIsScrolled(false);
  };

  const toggleNavbar = () => {
    open && setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const navHeight: number = (document.querySelector("#nav") as HTMLDivElement)
      .offsetHeight;
    setNavHeight(navHeight);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="nav"
      className={cn(
        "fixed top-0 left-0 right-0 flex justify-between items-center py-5 px-3 duration-300 z-50 md:h-24",
        (isOtherRoute || isScrolled) && "bg-white shadow-lg"
      )}
    >
      {/* Logo */}
      <div className="flex gap-1 text-2xl font-semibold">
        <h1
          className={cn(
            isOtherRoute || isScrolled ? "text-primary" : "text-white"
          )}
        >
          Append
        </h1>
        <span className="text-accent">.</span>
      </div>

      {/* Links */}
      <div>
        <ul
          className={cn(
            "sm:text-default xl2:flex",
            !(isOtherRoute || isScrolled) && "xl2:text-[#ffffff80]",
            open
              ? "bg-white flex flex-col gap-5 absolute w-[90vw] top-16 items-start -translate-x-1/2 left-1/2 rounded p-4 z-40"
              : "hidden gap-7"
          )}
        >
          {NavLinkItems.map((navLinkItem: INavLinkItem) => {
            return (
              <NavHashLink
                to={"/#" + navLinkItem.slug}
                className={cn(
                  location.pathname === "/" &&
                    location.hash.slice(1) === navLinkItem.slug
                    ? isOtherRoute || isScrolled
                      ? "text-accent"
                      : "sm:text-accent xl2:text-white"
                    : ""
                )}
              >
                <li onClick={toggleNavbar}>{navLinkItem.title}</li>
              </NavHashLink>
            );
          })}
        </ul>
      </div>

      {/* For overlay in small devices */}
      {open && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-30"></div>
      )}

      {/* Get started Button and Hamburger Menu */}
      <div className="flex justify-center items-center gap-3">
        <Button className="text-sm py-2 px-[26px] font-opensans">
          Get Started
        </Button>

        <div className="xl2:hidden z-40">
          {!open ? (
            <GiHamburgerMenu
              className={cn(
                "text-2xl",
                isOtherRoute || isScrolled ? "text-primary" : "text-white"
              )}
              onClick={() => {
                setOpen(!open);
              }}
            />
          ) : (
            <IoMdClose
              className="text-2xl text-white"
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
