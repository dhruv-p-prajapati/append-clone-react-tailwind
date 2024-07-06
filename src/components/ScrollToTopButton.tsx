import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import Button from "./Button";
import { cn, scrollToTop } from "../utils/helpers";

const ScrollToTopButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [navHeight, setNavHeight] = useState(0);

  const handleScroll = () => {
    window.scrollY > navHeight ? setIsScrolled(true) : setIsScrolled(false);
  };

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
    <Button
      className={cn(
        "fixed bottom-4 right-4 p-2 text-2xl duration-500",
        isScrolled ? "visible opacity-100" : "invisible opacity-0"
      )}
      onClick={scrollToTop}
    >
      <BsArrowUpShort />
    </Button>
  );
};

export default ScrollToTopButton;
