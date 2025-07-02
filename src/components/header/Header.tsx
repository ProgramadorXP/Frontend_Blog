import { Link, NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="w-full bg-background shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col gap-2 xs:flex-row xs:items-center xs:justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 font-bold text-xl text-foreground">
          {/* Puedes reemplazar este SVG por tu logo */}
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
          BlogPERN
        </Link>

        {/* Navbar - hidden in mobile */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? "text-primary" : "text-foreground  hover:text-primary"}`
          }>
            Home
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`
          }>
            Blog
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`
          }>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`
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
      <nav className="flex md:hidden justify-center gap-4 py-2 bg-white border-t">
        <NavLink to="/" className={({ isActive }) =>
          `font-medium text-sm transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`
        }>
          Home
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) =>
          `font-medium text-sm transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`
        }>
          Blog
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>
          `font-medium text-sm transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`
        }>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
          `font-medium text-sm transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`
        }>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}