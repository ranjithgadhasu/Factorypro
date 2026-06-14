import {
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import Background from "../../assets/images/Background.png";
import logoFirst from "../../assets/images/logoFirst.png";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white relative overflow-hidden">

      {/* Background Building Image */}

      <div className="absolute bottom-0 left-0 opacity-[0.06]">
        <img
          src="/footer-bg.png"
          alt=""
          className="w-[500px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">

        {/* Top CTA */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">

          <div>

            <h2 className="text-4xl lg:text-6xl font-light">
              Ready to work with us?
            </h2>

            <p className="text-gray-400 mt-5">
              Join us to experience cutting-edge industrial
              solutions that drive innovation, lasting success.
            </p>

          </div>

          {/* Circle Button */}

          <div className="flex justify-center lg:justify-end">
           <img src={Background} alt="" className="w-[120px] h-[120px]" />
          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-[#3a3a3a] my-14"></div>

        {/* Footer Grid */}

        <div className="footer-movieleft grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div className="mobile-res">

            <div className="flex items-center gap-3">
              <div className="flex gap-2 ml-4 font-bold">
                <img src={logoFirst} alt="" />
              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-8">
              We are committed to providing
              personalized industrial solutions.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <button className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center text-[#FF9900] cursor-pointer">
                <FaPinterestP />
              </button>

              <button className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center text-[#FF9900] cursor-pointer">
                <FaFacebookF />
              </button>

              <button className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center text-[#FF9900] cursor-pointer">
                <FaInstagram />
              </button>
            </div>
          </div>

          {/* Quick Links */}

          <div className="ml-40 mobile-res">

            <h4 className="flex text-xl font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-gray-400">

              <li className="cursor-pointer hover:text-[#FF9900] transition">
                Home
              </li>

              <li className="cursor-pointer hover:text-[#FF9900] transition">
                About Us
              </li>

              <li className="cursor-pointer hover:text-[#FF9900] transition">
                Blog
              </li>

              <li className="cursor-pointer hover:text-[#FF9900] transition">
                Services
              </li>

            </ul>

          </div>

          {/* Security */}

          <div className="ml-28 mobile-res">

            <h4 className="text-xl font-semibold mb-6">
              Security
            </h4>

            <ul className="space-y-4 text-gray-400">

              <li className="cursor-pointer hover:text-[#FF9900] transition">
                Term & Condition
              </li>

              <li className="cursor-pointer hover:text-[#FF9900] transition">
                Privacy Policy
              </li>

              <li className="cursor-pointer hover:text-[#FF9900] transition">
                Help
              </li>

              <li className="cursor-pointer hover:text-[#FF9900] transition">
                Contact Us
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="ml-19 mobile-res">

            <h4 className="text-xl font-semibold mb-6">
              Contact
            </h4>

            <ul className="space-y-4 text-gray-400">

              <li className="cursor-pointer">
                +91 123654789
              </li>

              <li className="cursor-pointer">
                info@domainname.com
              </li>

              <li className="leading-7">
                520, West Valley,
                Amin and <br/>minim
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Divider */}

        <div className="border-t border-[#3a3a3a] mt-14 pt-8 text-center text-gray-500">

          Copyright © 2024 All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};
export default Footer;