import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../../assets/Logo.png";
import { Link, NavLink } from 'react-router';

const ROUTES = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/team', label: 'Team' },
  { to: '/events', label: 'Events' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solidBg = isMenuOpen || isScrolled;

  const navLinkClass = ({ isActive }) =>
    `relative group font-display text-lg uppercase tracking-wider transition-colors duration-300 ${
      isActive ? 'text-f1-red' : 'text-white hover:text-f1-red'
    }`;

  const navLinks = (
    <>
      {ROUTES.map(({ to, label }) => (
        <li className="list-none" key={to}>
          <NavLink to={to} end={to === '/'} className={navLinkClass}>
            {({ isActive }) => (
              <>
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-f1-red transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        solidBg
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent bg-linear-to-b from-black/80 to-black/0'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-10xl">
        <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
          <div>
            <Link to="/">
              <img src={logo} className="w-36 sm:w-40 h-auto" alt="Formula IUT" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-f1-red transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">{navLinks}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
