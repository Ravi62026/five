"use client";

import Image from "next/image";
import { useState } from "react";
import ContactUs from "@/components/contactus";

export default function Header() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleOpenContact = () => {
    setShowContactForm(true);
  };

  const handleCloseContact = () => {
    setShowContactForm(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="block lg:hidden relative flex items-center justify-between px-4 sm:px-5 md:px-6 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 bg-white z-20 z-50">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pl-3">
          <div className="h-9 w-fit">
            <Image
              src="/logo.svg"
              alt="Five Logo"
              width={56}
              height={56}
              className="w-fit h-9 object-contain "
              priority
            />
          </div>
        </div>

        {/* Contact Us Button */}
        <button
          onClick={handleOpenContact}
          className="px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-all hover:opacity-90 flex-shrink-0 cursor-pointer"
          style={{
            background: "linear-gradient(180deg, #957242 0%, #957242 100%), linear-gradient(#fff, #fff)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            border: "1.6px solid transparent",
            color: "#ffffff",
          }}
        >
          Contact Us
        </button>
      </nav>

      {/* Desktop Navbar */}
      <nav className="lg:flex hidden max-w-7xl mx-auto  justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 md:py-6 z-20 absolute top-0 left-0 right-0 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Five Logo"
            width={56}
            height={56}
            className="w-fit h-12  sm:h-14 md:h-12"
            priority
          />
        </div>

        {/* Contact Us Button */}
        <button
          onClick={handleOpenContact}
          className="px-6 cursor-pointer sm:px-8 md:px-10 lg:px-12 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all hover:opacity-90"
          style={{
            background: "linear-gradient(180deg, #957242 0%, #957242 100%), linear-gradient(#fff, #fff)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            border: "1.6px solid transparent",
            color: "#ffffff",
          }}
        >
          Contact us
        </button>
      </nav>

      {/* Contact Us Modal */}
      {showContactForm && (
        <ContactUs onClose={handleCloseContact} isModal={true} />
      )}
    </>
  );
}