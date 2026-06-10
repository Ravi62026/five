"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import ContactUs from "@/components/contactus";
import { getAllCMSPages, getCMSPageRoute } from "@/lib/cms";

export default function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [cmsPages, setCmsPages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOpenContact = () => {
    setShowContactForm(true);
  };

  const handleCloseContact = () => {
    setShowContactForm(false);
  };

  useEffect(() => {
    const fetchCMSPages = async () => {
      try {
        const pages = await getAllCMSPages();
        // Sort by CMS ID to maintain consistent order
        const sortedPages = pages.sort((a, b) =>
          parseInt(a.cmsId) - parseInt(b.cmsId)
        );
        setCmsPages(sortedPages);
      } catch (error) {
        console.warn("Error fetching CMS pages:", error.message || error);
        // Fallback to default links if API fails
        setCmsPages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCMSPages();
  }, []);

  return (
    <>
      {/* Mobile view section 4 */}
      <section className="block lg:hidden w-full bg-white">
        {/* Footer Section */}
        <footer className="relative w-full pt-2 bg-[#F0F0F0] rounded-tl-[32px] rounded-tr-[32px] sm:py-1 md:py-2 px-4 sm:px-6 md:px-8 overflow-visible"
          style={
            {
              boxShadow: "0px -1.26px 2.09px 0px rgba(0, 0, 0, 0.1)"
            }
          }
        >
          {/* Background watermark - positioned at bottom */}

          {/* Footer Content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto mt-10 flex flex-col items-center">
            {/* Logo */}
            <div className="h-18 w-fit">
              <Image
                src="/logo.svg"
                alt="Five Logo"
                width={96}
                height={96}
                className="w-fit h-full object-contain"
              />
            </div>

            {/* Brand Name */}
            <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lowercase">
            </h3>

            {/* Social Media Buttons */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
              {/* TikTok Button */}
              <button className="bg-transparent border border-[#DCDCDC] rounded-full px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 flex items-center gap-2 sm:gap-2.5 hover:opacity-90 transition-opacity">
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/tiktok.svg"
                    alt="TikTok"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-black text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
                  TikTok
                </span>
              </button>

              {/* Instagram Button */}
              <button className="bg-transparent border border-[#DCDCDC] rounded-full px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 flex items-center gap-2 sm:gap-2.5 hover:opacity-90 transition-opacity">
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/instagram-2016-logo-svgrepo-com 1.webp"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-black text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
                  Instagram
                </span>
              </button>
            </div>

            {/* Descriptive Text */}
            <p className="text-black text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg md:max-w-xl mb-8 sm:mb-10 md:mb-12 px-4">
              At{" "}
              <span className="text-[#FF722D] font-semibold">Five</span>,
              we bring together perfumes, bouquets, cakes, beauty, and boutique
              essentials — thoughtfully curated for every special moment.
            </p>

            {/* Legal/Policy Links */}
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base whitespace-nowrap flex-wrap">
              {loading ? (
                <div className="text-[#7A7A7A]/70">Loading...</div>
              ) : cmsPages.length > 0 ? (
                cmsPages.map((page, index) => (
                  <span key={page.id || page.cmsId} className="flex items-center">
                    {index > 0 && <span className="text-[#7A7A7A]/30 mx-2">•</span>}
                    <Link
                      href={getCMSPageRoute(page.cmsId)}
                      className="text-[#7A7A7A]/70 hover:text-[#7A7A7A] transition-colors"
                    >
                      {page.nameEn || page.name}
                    </Link>
                  </span>
                ))
              ) : (
                // Fallback to default links if API fails
                <>
                  <Link
                    href="/terms-condition"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                  <span className="text-black/30">•</span>
                  <Link
                    href="/privacy-policy"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-black/30">•</span>
                  <Link
                    href="/data-deletion-policy"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Data Deletion Policy
                  </Link>
                </>
              )}
            </div>

            {/* Contact Us Button */}
            <button
              onClick={handleOpenContact}
              className="px-6 sm:px-8 md:px-10 py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:opacity-90 transition-opacity mb-8 cursor-pointer"
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

            {/* Copyright */}
          </div>
        </footer>

        {/* Bottom Footer Section with Copyright and Watermark */}
        <div className="flex flex-col items-center justify-center w-full bg-[#F0F0F0] pt-6 sm:py-8 md:pt-10 px-4 gap-15 overflow-hidden text-black">
          <p className="text-[#7A7A7A]">© 2026 Five. All rights reserved.</p>
          {/* Watermark - positioned at bottom */}

        </div>
      </section>

      {/* Desktop view section 4 */}
      <footer className="hidden lg:block relative w-full bg-[#F0F0F0] text-black pt-12 pb-6 overflow-hidden">
        {/* Main Footer Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row justify-between items-start mb-8 gap-1 lg:gap-0">
          {/* Left Column: Logo & Socials */}
          <div className="flex flex-col items-start gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Five Logo"
                width={80}
                height={80}
                className="w-fit h-18"
              />
            </div>

            {/* Social Media Buttons - TikTok and Instagram */}
            <div className="flex flex-wrap gap-3">
              {/* TikTok Button */}
              <button className="bg-none border border-black rounded-xl px-5 py-2.5 flex items-center gap-2.5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/tiktok.svg"
                    alt="TikTok"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-black text-sm font-semibold">
                  TikTok
                </span>
              </button>

              {/* Instagram Button */}
              <button className="bg-non border border-black rounded-xl px-5 py-2.5 flex items-center gap-2.5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/instagram-2016-logo-svgrepo-com 1.webp"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-black text-sm font-semibold">
                  Instagram
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Description & Contact */}
          <div className="flex flex-col items-start max-w-lg lg:items-start">
            <p className="text-md md:text-lg font-medium leading-relaxed mb-8 text-left">
              At <span className="text-[#FF722D]">Five</span>, we bring
              together perfumes, bouquets, cakes, beauty, and boutique
              essentials — thoughtfully curated for every special moment.
            </p>
            <button
              onClick={handleOpenContact}
              className="px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity cursor-pointer"
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
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-20 w-full max-w-[90%] mx-auto border-t border-black/10 mb-8"></div>

        {/* Bottom Section: Legal Links & Copyright */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-row justify-between mb-8">
          {/* Legal Links - Left Side */}
          <div className="flex flex-row align-center justify-center gap-3 sm:gap-4 md:gap-6 text-sm z-30 flex-wrap">
            {loading ? (
              <div className="text-black/70">Loading...</div>
            ) : cmsPages.length > 0 ? (
              cmsPages.map((page, index) => (
                <span key={page.id || page.cmsId} className="flex items-center">
                  {index > 0 && <span className="text-[#212121] mx-2">•</span>}
                  <Link
                    href={getCMSPageRoute(page.cmsId)}
                    className="text-[#212121] hover:text-black transition-colors"
                  >
                    {page.nameEn || page.name}
                  </Link>
                </span>
              ))
            ) : (
              // Fallback to default links if API fails
              <>
                <Link
                  href="/terms-condition"
                  className="text-[#212121] hover:text-black transition-colors"
                >
                  Terms & Conditions
                </Link>
                <span className="text-[#212121]">•</span>
                <Link
                  href="/privacy-policy"
                  className="text-[#212121] hover:text-black transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-[#212121]">•</span>
                <Link
                  href="/data-deletion-policy"
                  className="text-[#212121] hover:text-black transition-colors"
                >
                  Data Deletion Policy
                </Link>
              </>
            )}
          </div>

          {/* Copyright - Right Side */}
          <p className="relative z-30 text-black/60 text-sm">
            © 2026 Five. All rights reserved.
          </p>

          {/* Background Watermark */}
        </div>


      </footer>

      {/* Contact Us Modal */}
      {showContactForm && (
        <ContactUs onClose={handleCloseContact} isModal={true} />
      )}
    </>
  );
}