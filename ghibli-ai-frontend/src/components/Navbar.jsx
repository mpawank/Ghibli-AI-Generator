import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Feature", href: "/feature" },
    { label: "Generate", href: "/generate" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-amber-700"
        >
          Ghibli<span className="text-black">.</span><span className="text-indigo-600">ai</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                to={href}
                className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-indigo-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link
          to="/generate"
          className="hidden rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-amber-700 md:block"
        >
          Create
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-20 flex h-10 w-10 items-center justify-center rounded md:hidden"
          aria-label="Toggle Menu"
        >
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 bg-gray-800 transition-all duration-300"
            style={{
              transform: isOpen
                ? "rotate(45deg) translateY(0)"
                : "translateY(-6px)",
            }}
          />
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 bg-gray-800 transition-all duration-300"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 bg-gray-800 transition-all duration-300"
            style={{
              transform: isOpen
                ? "rotate(-45deg) translateY(0)"
                : "translateY(6px)",
            }}
          />
        </button>

        {/* Mobile drawer */}
        {isOpen && (
          <div className="fixed inset-0 z-10 bg-white/90 backdrop-blur-md md:hidden">
            <ul className="mt-24 flex flex-col items-center gap-6">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold text-gray-800 hover:text-indigo-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <Link
                to="/generate"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-amber-600 px-6 py-2 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700"
              >
                Create
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
