import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  return (
    <div className="w-full bg-[#002424] text-white">
      <div className="px-5 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 px-5">
          {/* Left section: Logo */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBolt} />
            <h1 className="font-bold text-xl sm:text-2xl">Energy Track</h1>
          </div>

          {/* Center section: Copyright */}
          <div className="text-center md:text-left">
            <p className="py-5 text-sm sm:text-base">© 2025 Energy Track. All Rights Reserved.</p>
          </div>

          {/* Right section: Social Media Links */}
          <div className="flex gap-5 justify-center md:justify-end items-center">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[20px] sm:text-[25px] cursor-pointer hover:scale-110 transition-transform"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[20px] sm:text-[25px] cursor-pointer hover:scale-110 transition-transform"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-[20px] sm:text-[25px] cursor-pointer hover:scale-110 transition-transform"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-3xl sm:text-[25px] cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
