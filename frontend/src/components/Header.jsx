import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BrandMark from "./visuals/BrandMark";

const WEBSITE_NAME = import.meta.env.VITE_WEBSITE_NAME || "LifeLine";

export default function Header({ currentUser }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-parchment-deep bg-linen/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-linen/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo + Title */}
          <Link to="/" className="group flex items-center gap-3">
            <BrandMark size={38} className="transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <h1 className="font-display text-lg leading-none text-ink transition-colors group-hover:text-oxblood">
                {WEBSITE_NAME}
              </h1>
              <p className="-mt-0.5 text-xs font-medium text-ink-faint">
                Blood Bank Management
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActiveLink(link.path)
                    ? "bg-oxblood-soft text-oxblood"
                    : "text-ink-soft hover:bg-parchment hover:text-oxblood"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mx-2 h-6 w-px bg-parchment-deep" />

            {currentUser ? (
              <Link
                to="/login"
                className="rounded-lg bg-oxblood px-4 py-2 text-sm font-semibold text-linen shadow-sm transition-all hover:bg-oxblood-dark"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActiveLink("/login")
                      ? "bg-oxblood-soft text-oxblood"
                      : "text-ink-soft hover:bg-parchment hover:text-oxblood"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-lg bg-oxblood px-4 py-2 text-sm font-semibold text-linen shadow-sm transition-all hover:bg-oxblood-dark hover:shadow-md"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-xl p-2 transition-all duration-200 md:hidden ${
              mobileOpen ? "bg-oxblood-soft text-oxblood" : "text-ink-soft hover:bg-parchment"
            }`}
            aria-label="Toggle menu"
          >
            <div className="relative h-6 w-6">
              <span
                className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 transform bg-current transition-all duration-200 ${
                  mobileOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 transform bg-current transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 transform bg-current transition-all duration-200 ${
                  mobileOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-b-2xl border-t border-parchment-deep bg-linen/95 px-3 pb-6 pt-4 shadow-lg backdrop-blur-sm">
            <div className="mb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                    isActiveLink(link.path)
                      ? "border-l-4 border-oxblood bg-oxblood-soft text-oxblood"
                      : "text-ink-soft hover:bg-parchment hover:text-oxblood"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2 border-t border-parchment-deep pt-4">
              {currentUser ? (
                <Link
                  to="/login"
                  className="block rounded-xl bg-oxblood px-4 py-3 text-center text-base font-semibold text-linen shadow-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className={`block rounded-xl px-4 py-3 text-center text-base font-medium transition-all duration-200 ${
                      isActiveLink("/login")
                        ? "border-l-4 border-oxblood bg-oxblood-soft text-oxblood"
                        : "text-ink-soft hover:bg-parchment hover:text-oxblood"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block rounded-xl bg-oxblood px-4 py-3 text-center text-base font-semibold text-linen shadow-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
