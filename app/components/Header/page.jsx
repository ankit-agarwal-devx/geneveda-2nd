"use client";
import { useState, useEffect } from "react";
import "./style.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll is more than 50px, change background
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  return (
    <header
      className="bg-transparent text-secondary mt-15 w-full shadow-md h-[20vh] md:h-[30vh] mb-[1px]"
      style={{
    backgroundImage: "url('/images/header.png')",
    backgroundSize: "cover",
    backgroundPosition: "50% 30%",
    backgroundRepeat: "no-repeat"
  }}
    >
    </header>
  );
};

export default Header;
