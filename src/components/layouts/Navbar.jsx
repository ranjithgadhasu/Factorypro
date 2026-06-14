import { useState } from "react";
import { Link, NavLink, useLocation  } from "react-router-dom";
import Container from "../common/Container";
import logoFirst from "../../assets/images/logoFirst.png";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);

  const [desktopServiceOpen, setDesktopServiceOpen] = useState(false);
const [desktopPageOpen, setDesktopPageOpen] = useState(false);
const location = useLocation();
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <Container>
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/">
            <img
              src={logoFirst}
              alt="logo"
              className="w-[150px] md:w-[186px] h-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-white text-sm">
            <NavLink to="/"  
             className={({ isActive }) =>
    isActive
      ? "text-[#f59d0c] font-semibold"
      : "text-white hover:text-[#f59d0c] transition"
  }
>
              Home
            </NavLink>

            <NavLink to="/about"
            className={({ isActive }) =>
    isActive
      ? "text-[#f59d0c] font-semibold"
      : "text-white hover:text-[#f59d0c] transition"
  }
  >About Us</NavLink>

            {/* Services */}
          <div className="relative">
  <button
    onClick={() => setDesktopServiceOpen(!desktopServiceOpen)}
      className={`flex items-center gap-1 cursor-pointer ${
    location.pathname === "/solution-custom"
      ? "text-[#f59d0c] font-semibold"
      : "text-white"
  }`}
  >
    Services
    <IoChevronDownOutline size={14} />
  </button>

  {desktopServiceOpen && (
    <div className="absolute top-full left-0 bg-white rounded-md shadow-lg min-w-[280px] py-2 z-[9999]">
      <NavLink
        to="/solution-custom"
        className="block px-4 py-3 text-black hover:bg-gray-100"
      >
        Custom Manufacturing Solution
      </NavLink>
    </div>
  )}
</div>

            <NavLink to="/blog"
            className={({ isActive }) =>
    isActive
      ? "text-[#f59d0c] font-semibold"
      : "text-white hover:text-[#f59d0c] transition"
  }
  >Blog</NavLink>

            <NavLink to="/projects"
            className={({ isActive }) =>
    isActive
      ? "text-[#f59d0c] font-semibold"
      : "text-white hover:text-[#f59d0c] transition"
  }
  >Projects</NavLink>

            {/* Pages */}
         <div className="relative">
  <button
    onClick={() => setDesktopPageOpen(!desktopPageOpen)}
     className={`flex items-center gap-1 cursor-pointer ${
    location.pathname === "/our-pricing"
      ? "text-[#f59d0c] font-semibold"
      : "text-white"
  }`}
  >
    Pages
    <IoChevronDownOutline size={14} />
  </button>

  {desktopPageOpen && (
    <div className="absolute top-full left-0 bg-white rounded-md shadow-lg min-w-[280px] py-2 z-[9999]">
      <NavLink
        to="/our-pricing"
        className="block px-4 py-3 text-black hover:bg-gray-100"
      >
        Our Pricing
      </NavLink>
    </div>
  )}
</div>

            <NavLink 
            to="/contact-page" 
             className={({ isActive }) =>
    isActive
      ? "text-[#f59d0c] font-semibold"
      : "text-white hover:text-[#f59d0c] transition"
  }
  >Contact Us</NavLink>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <FiPhoneCall size={20} className="text-[#f59d0c]" />

              <span className="text-white">+01 123456789</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden text-white"
            >
              {mobileMenu ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden bg-black/95 rounded-xl p-5">
            <nav className="flex flex-col text-white">
              <Link
                to="/"
                className="py-3 border-b border-white/10"
                onClick={() => setMobileMenu(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                className="py-3 border-b border-white/10"
                onClick={() => setMobileMenu(false)}
              >
                About Us
              </Link>

              {/* Services */}
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center justify-between py-3 border-b border-white/10"
              >
                <span>Services</span>

                <IoChevronDownOutline
                  className={`transition-transform duration-300 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {serviceOpen && (
                <div className="pl-4">
                  <Link
                    to="/solution-custom"
                    className="block py-3 text-sm"
                    onClick={() => setMobileMenu(false)}
                  >
                    Custom Manufacturing Solution
                  </Link>
                </div>
              )}

              <Link
                to="/blog"
                className="py-3 border-b border-white/10"
                onClick={() => setMobileMenu(false)}
              >
                Blog
              </Link>

              <Link
                to="/projects"
                className="py-3 border-b border-white/10"
                onClick={() => setMobileMenu(false)}
              >
                Projects
              </Link>

              {/* Pages */}
              <button
                onClick={() => setPageOpen(!pageOpen)}
                className="flex items-center justify-between py-3 border-b border-white/10"
              >
                <span>Pages</span>

                <IoChevronDownOutline
                  className={`transition-transform duration-300 ${
                    pageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {pageOpen && (
                <div className="pl-4">
                  <Link
                    to="/our-pricing"
                    className="block py-3 text-sm"
                    onClick={() => setMobileMenu(false)}
                  >
                    Our Pricing
                  </Link>
                </div>
              )}

              <Link
                to="/contact-page"
                className="py-3"
                onClick={() => setMobileMenu(false)}
              >
                Contact Us
              </Link>

              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/20">
                <FiPhoneCall size={18} className="text-[#f59d0c]" />
                <span>+01 123456789</span>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
