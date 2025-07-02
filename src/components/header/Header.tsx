import { useEffect, useRef, useCallback, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY.current && currentY > 100) {
      setVisible(false); // scroll hacia abajo
    } else {
      setVisible(true); // scroll hacia arriba
    }
    lastScrollY.current = currentY;
    ticking.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="container mx-auto px-4 py-3 flex flex-col gap-2 xs:flex-row xs:items-center xs:justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 font-bold text-xl text-text-primary">
          {/* Puedes reemplazar este SVG por tu logo */}
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
          BlogPERN
        </Link>

        {/* Navbar - hidden in mobile */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) =>
            `font-bold transition-colors ${isActive ? "text-gold-accent" : "text-muted-gray  hover:text-gold-accent"}`
          }>
            Home
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) =>
            `font-bold transition-colors ${isActive ? "text-gold-accent" : "text-muted-gray hover:text-gold-accent"}`
          }>
            Blog
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `font-bold transition-colors ${isActive ? "text-gold-accent" : "text-muted-gray hover:text-gold-accent"}`
          }>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            `font-bold transition-colors ${isActive ? "text-gold-accent" : "text-muted-gray hover:text-gold-accent"}`
          }>
            Contact
          </NavLink>
        </nav>

        {/* Search + Theme Switch */}
        <div className="flex items-center justify-center gap-2">
          <SearchInput />
          <ThemeSwitch />
        </div>
      </div>
      {/* Navbar for mobile */}
      <nav className="flex md:hidden justify-center gap-4 py-2 border-b border-muted-gray">
        <NavLink to="/" className={({ isActive }) =>
          `font-bold text-sm transition-colors ${isActive ? "text-gold-accent" : "text-muted-gray hover:text-gold-accent"}`
        }>
          Home
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) =>
          `font-bold text-sm transition-colors ${isActive ? "text-gold-accent" : "text-muted-gray hover:text-gold-accent"}`
        }>
          Blog
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>
          `font-bold text-sm transition-colors ${isActive ? "text-gold-accent" : "text-muted-gray hover:text-gold-accent"}`
        }>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
          `font-bold text-sm transition-colors ${isActive ? "text-gold-accent" : "text-muted-gray hover:text-gold-accent"}`
        }>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}