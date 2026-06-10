"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.dietcare.app";
  const APP_STORE_URL =
    "https://apps.apple.com/in/app/soaraat/id6756238208";

  return (
    <div className="bg-[#141414] flex flex-col overflow-x-hidden text-white min-w-screen min-h-screen w-full mx-auto">
      <Header />
      <section className="relative flex flex-col min-h-screen bg-white mx-auto w-full">
        {/* Hero section */}
        <div className="relative w-full bg-white md:pt-[20vh]  ">
          <section className="block lg:hidden w-full ">
            <div className="w-full h-[25vh] bg-white max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6 lg:px-10 xl:px-12 flex flex-col items-center sm:items-start">

              <div className="absolute top-[2%] sm:top-[2%] md:top-[3%] left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 w-full sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] max-w-[600px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] z-10">
                <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 tracking-tight">
                  <span className="block">You Deserve Things</span>
                  <span className="block relative inline-block">
                    That Feel Good...
                  </span>
                </h1>
              </div>
            </div>

            <Image
              src="/Rectangle1490.webp"
              alt="Healthy meal platter"
              width={1280}
              height={720}
              className="absolute top-[7%] md:top-[9%] -translate-x-1/2 left-1/2 h-[20vh] md:h-[40vh] object-cover max-w-7xl w-[90%] z-40"
              priority
            />
            {/* </div> */}
          </section>

          {/* Desktop view section 1 */}
          <section className="hidden lg:block relative h-[88vh] 2xl:h-[60vh] max-w-7xl mx-auto w-full ">


            <Image
              src="/Rectangle1490.webp"
              alt="decoration"
              width={1280}
              height={720}
              className="absolute top-[21%] -translate-x-1/2 left-1/2 max-w-7xl w-[90%] z-20"
              priority
            />

            <div className="absolute top-[2%] sm:top-[12%] md:top-[-7%] lg:top-[-10%] sm:left-8 md:left-12 lg:left-10 xl:left-20 w-[1%]  lg:w-[90%] lg:h-[50%] z-10">
              <h1 className="text-black  text-6xl font-bold leading-tight mb-4 sm:mb-6 tracking-tight">
                <span className="block">You Deserve Things</span>
                <span className="block relative inline-block">
                  That Feel Good...
                </span>
              </h1>
            </div>
          </section>

          {/* Mobile view section 2 */}
          <section className="block lg:hidden w-full mt-10"
            style={{
              background: "linear-gradient(180deg, #202020 25.16%, #957242 128.13%)",
            }}
          >
            <div
              className="relative w-full pt-10 sm:pt-45 md:pt-45 lg:pt-45 pb-0 overflow-hidden flex flex-col items-center min-h-screen h-full"
              style={{
                background: "linear-gradient(180deg, #202020 25.16%, #957242 128.13%)",
              }}
            >
              {/* Top Section - Logo, Title, Tagline (Centered) */}
              <div className="relative z-2 w-full flex flex-col items-center mt-[8vh] md:mt-[2vh]  px-4 sm:px-6">
                {/* Logo - Centered at top */}

                {/* Title - Centered */}
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight text-center">
                  Discover Luxury, Thoughtfully Curated
                </h2>

                {/* Tagline - Centered */}
                <p className="text-white text-sm sm:text-base md:text-base opacity-90 leading-relaxed text-center max-w-md mb-8">
                  Shop elegant gifts, beauty essentials, and curated collections all in one place.
                </p>
              </div>

              {/* Process Steps with Icons in Black Circles */}
              <div className="relative w-full max-w-md  mb-0 sm:mb-0 md:mb-0">
                {/* Vertical Dashed Line - Connects all icons */}
                {/* <div className="absolute left-6 sm:left-8 md:left-10 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-white opacity-60"></div> */}

                <div className="relative mx-auto px-4 sm:px-6 mb-[40vh]">
                  {/* Step 1 - Find Your Favorites */}
                  <div className="relative flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/image.png"
                        alt="Find Your Favorites"
                        width={72}
                        height={72}
                        className="w-12 h-12 sm:w-11 sm:h-11 md:w-18 md:h-18"
                      />
                      {/* Dashed Line Below */}
                      {/* <div className="absolute left-1/2 top-full mt-[1] sm:mt-0 h-8 sm:h-10 md:h-12 w-0.5 border-l-2 border-dashed border-white opacity-50 transform -translate-x-1/2"></div> */}
                    </div>
                    <div className="flex flex-col flex-1 pt-1 sm:pt-2">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                        Find Your Favorites
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
                        Explore curated luxury picks.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 - Personalize Every Order */}
                  <div className="relative flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/image2.png"
                        alt="Personalize Every Order"
                        width={72}
                        height={72}
                        className="w-12 h-12 sm:w-11 sm:h-11 md:w-18 md:h-18"
                      />
                      {/* Dashed Line Below */}
                      {/* <div className="absolute left-1/2 top-full mt-1 sm:mt-0 h-8 sm:h-10 md:h-12 w-0.5 border-l-2 border-dashed border-white opacity-50 transform -translate-x-1/2"></div> */}
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                        Personalize Every Order
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
                        Add thoughtful custom touches.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 - Delivered with Elegance */}
                  <div className="relative flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="relative flex-shrink-0">
                       {/* //<div className="w-12 h-12 sm:w-11 sm:h-11 rounded-full bg-[#1a1a1a] border-2 border-white/30 flex items-center justify-center flex-shrink-0"> */}
                         <Image
                           //src="/gift-box-icon.svg"
                           src="/deliveredWithElegance.png"
                           alt="Delivered with Elegance"
                           width={72}
                           height={72}
                           className="w-12 h-12 sm:w-11 sm:h-11 md:w-18 md:h-18"
                         />
                       
                      {/* Dashed Line Below */}
                      {/* <div className="absolute left-1/2 top-full mt-1 sm:mt-0 h-8 sm:h-10 md:h-12 w-0.5 border-l-2 border-dashed border-white opacity-50 transform -translate-x-1/2"></div> */}
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                        Delivered with Elegance
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
                        Beautifully packed and delivered.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 - Shop Anytime, Anywhere */}
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src="/image4.png"
                        alt="Shop Anytime, Anywhere"
                        width={72}
                        height={72}
                        className="w-12 h-12 sm:w-11 sm:h-11 md:w-18 md:h-18"
                      />
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                        Shop Anytime, Anywhere
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
                        Browse and order with ease.
                      </p>
                    </div>
                  </div>

                </div>


              </div>

              <Image
                src="/iphone.png"
                alt="Mobile App Mockup"
                width={1000}
                height={1200}
                className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 h-[50vh] w-auto z-10 object-contain"
                loading="lazy"
              />
            </div>
          </section>

          {/* Desktop view section 2 */}
          {/* The Five Way Section */}
          <section
            className="hidden lg:block relative w-full  overflow-hidden pt-[150px]"
            style={{
              background: "linear-gradient(180deg, #202020 25.16%, #957242 128.13%)"
            }}
          >
            <div className="relative w-full max-w-7xl mx-auto min-h-fit flex flex-row lg:flex-row items-start lg:items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 lg:pb-24">
              {/* Left Side - Text Content */}
              <div className="relative z-10 w-full lg:w-[52%] mb-12 lg:mb-0">
                {/* Logo */}

                {/* Title */}
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                  style={{
                    background: "linear-gradient(180deg, #FFFFFF 0%, #999999 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                  }}
                >
                  Discover Luxury, Thoughtfully Curated
                </h2>

                {/* Tagline */}
                <p className="text-white/60 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 md:mb-16 opacity-90 leading-relaxed">
                  From choosing meals to getting them delivered — we make it
                  effortless.
                </p>

                {/* Process Steps */}
                <div className="relative">
                  {/* Step 1 - Find Your Favorites */}
                  <div className="relative flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/image.png"
                        alt="Find Your Favorites"
                        width={72}
                        height={72}
                        className="w-8 h-8 sm:w-11 sm:h-11 md:w-18 md:h-18"
                        loading="lazy"
                      />
                      {/* Dashed Line Below */}
                      {/* <div className="absolute left-1/2 top-full mt-1 sm:mt-0 h-8 sm:h-10 md:h-12 w-0.5 border-l-2 border-dashed border-white opacity-50 transform -translate-x-1/2"></div> */}
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                        Find Your Favorites
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
                        Explore curated luxury picks.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 - Personalize Every Order */}
                  <div className="relative flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/image2.png"
                        alt="Personalize Every Order"
                        width={72}
                        height={72}
                        className="w-8 h-8 sm:w-11 sm:h-11 md:w-18 md:h-18"
                      />
                      {/* Dashed Line Below */}
                      {/* <div className="absolute left-1/2 top-full mt-1 sm:mt-0 h-8 sm:h-10 md:h-12 w-0.5 border-l-2 border-dashed border-white opacity-50 transform -translate-x-1/2"></div> */}
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                        Personalize Every Order
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
                        Add thoughtful custom touches.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 - Delivered with Elegance */}
                  <div className="relative flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="relative flex-shrink-0">
                       {/* <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#1a1a1a] border-2 border-white/30 flex items-center justify-center flex-shrink-0"> */}
                         <Image
                           //src="/gift-box-icon.svg"
                           src="/deliveredWithElegance.png"
                           alt="Delivered with Elegance"
                           width={72}
                           height={72}
                           className="w-8 h-8 sm:w-11 sm:h-11 md:w-18 md:h-18"
                         />
                       
                      {/* Dashed Line Below */}
                      {/* <div className="absolute left-1/2 top-full mt-1 sm:mt-0 h-8 sm:h-10 md:h-12 w-0.5 border-l-2 border-dashed border-white opacity-50 transform -translate-x-1/2"></div> */}
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                        Delivered with Elegance
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
                        Beautifully packed and delivered.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 - Shop Anytime, Anywhere */}
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src="/image4.png"
                        alt="Shop Anytime, Anywhere"
                        width={72}
                        height={72}
                        className="w-8 h-8 sm:w-11 sm:h-11 md:w-18 md:h-18"
                      />
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                        Shop Anytime, Anywhere
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
                        Browse and order with ease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Mobile App Mockup and Food Boxes */}
              <div className="z-10 w-full lg:w-[45%] flex items-center justify-center lg:justify-end py- lg:py-0 ">
                <Image
                  //src="/iPhone 15 Pro - White Titanium Right.webp"
                  //src = "/home_screen.png"
                  src="/iphone.png"
                  alt="Mobile App Mockup"
                  width={1000}
                  height={1200}
                  className="absolute w-[150%] translate-x-[12%] top-[calc(-8%+6rem)] sm:w-[170%] md:w-[200%] lg:w-[220%] xl:w-[250%] h-auto object-contain scale-30 lg:scale-90"
                  loading="lazy"
                />

              </div>
            </div>
          </section>



          {/* Mobile view section 4 */}
          <section className="block lg:hidden w-full">
            {/* The Five Way - mobile-first responsive section */}
            {/* Your Goal Shapes Your Plan section */}
            <div className="h-[70vh] w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-5 md:px-6 lg:px-10 xl:px-12">
              <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
                {/* Heading */}
                <h2 className="text-center font-bold tracking-tight leading-tight text-2xl sm:text-3xl md:text-4xl"
                  style={{
                    color: "#363636",
                  }}
                >
                  Smart Personalized Picks!
                </h2>

                {/* Subheading */}
                <p
                  className="mt-3 text-center text-base sm:text-lg md:text-xl leading-relaxed max-w-md"
                  style={{
                    color: "#363636",
                  }}
                >
                  Choose preferences that match your lifestyle, style, and special occasions.
                </p>

                {/* Phone + background illustration */}
              </div>
              <div className="relative w-full h-full flex justify-center allign-center">
                {/* <Image
                  src="/Vector (2).webp"
                  alt="Phone Mockup"
                  width={400}
                  height={400}
                  className="absolute -top-[10vh] -left-[14vw] w-[40%] h-[40%] object-contain overflow-hidden"
                  loading="lazy"
                /> */}
                <Image
                  src="/right_phone.png"
                  alt="Phone Mockup"
                  width={700}
                  height={700}
                  className="absolute -top-[5vh]  w-[80vw] h-[70vh] object-cover z-20"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Border Box */}
            <div className="relative w-full flex items-center justify-center overflow-visible mt-[10vh] md:mt-[10vh]">
              <div
                className="relative px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 transform rotate-[-2deg] sm:rotate-[-1.5deg] md:rotate-[-5deg] shadow-2xl overflow-visible z-20"
                style={{
                  background: 'linear-gradient(135deg, #2a2a2a 0%, #111111 100%)',
                  borderTop: '2px solid white',
                  borderBottom: '2px solid white',
                  width: '110%',
                }}
              >
                <p className="text-white text-lg sm:text-lg md:text-lg lg:text-xl font-bold text-center tracking-wide whitespace-nowrap">
                  Made for People with Taste! ✨ Handpicked. Curated. Delivered.
                </p>
              </div>
            </div>
            {/* App Download CTA Section */}
            <div className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 flex items-center justify-center"

            >
              <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-linear-to-b from-[#A4522A] -from-37% to-[#000000] to-100% rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden">
                {/* Orange gradient shape on right */}
                {/* <Image
                  src="/Vector (5).webp"
                  alt="Decorative gradient shape"
                  width={600}
                  height={600}
                  className="absolute bottom-0 sm:top-[-5%] right-0 sm:right-[-5%] w-[70%] sm:w-[60%] md:w-[55%] lg:w-[50%] h-auto object-contain opacity-80 pointer-events-none z-0"
                  loading="lazy"
                /> */}


                {/* Content */}
                <div className="relative z-10 flex flex-col">
                  {/* Heading with gradient */}
                  <h2
                    className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight"

                  >
                    Everything You Love, <br /> Delivered
                  </h2>

                  {/* Sub-heading with 60% opacity white */}
                  <p
                    className="text-lg text-center sm:text-4xl md:text-2xl mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-md"
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Shop elegant gifts, beauty essentials, and curated collections all in one place.
                  </p>

                  {/* App Store Buttons */}
                  <div className="flex flex-row sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
                    {/* Google Play Button */}
                    <a
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105 cursor-pointer inline-block"
                    >
                      <Image
                        src="/Google_Play_Store_badge_EN 1.webp"
                        alt="Get it on Google Play"
                        width={162}
                        height={64}
                        className="h-12 sm:h-14 md:h-16 w-auto"
                        loading="lazy"
                      />
                    </a>

                    {/* App Store Button */}
                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105 cursor-pointer inline-block"
                    >
                      <Image
                        src="/Group.webp"
                        alt="Download on the App Store"
                        width={162}
                        height={64}
                        className="h-12 sm:h-14 md:h-16 w-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Desktop view section 4 */}
          <section className="relative max-lg:hidden overflow-hidden relative lg:block relative w-full h-fit flex justify-center items-center py-10 px-4 sm:px-8 bg-white">
            <div className="flex flex-col text-center text-xl sm:text-2xl md:text-2xl lg:text-2xl leading-tight mb-6">
              <h1 className="text-7xl font-bold leading-tight mb-6"
                style={{
                  color: "#363636",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >Smart Personalized Picks!</h1>
              <p className="text-lg sm:text-xl mb-10 max-w-xxl"
                style={{
                  color: "#363636",
                }}
              >Choose preferences that match your lifestyle, style, and special occasions.</p>
            </div>

            <div
              className="relative mt-[-3] w-full max-w-7xl mx-auto h-auto min-h-[650px] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between pl-8 sm:pl-16 pr-8 sm:pr-16 py-12 md:py-0">
              {/* Left Content */}

              <Image
                src="/left_phone.png"
                alt="App Screenshot"
                width={400}
                height={800}
                className="absolute w-[70%] md:w-[70%] lg:w-[70%] max-w-[400px] md:max-w-none object-contain absolute top-[5%] left-[0%] pointer-events-none"
                loading="lazy"
              />
              <Image
                src="/right_phone.png"
                alt="App Screenshot"
                width={400}
                height={800}
                className="absolute w-[80%] md:w-[80%] lg:w-[100%] max-w-[400px] md:max-w-none object-contain absolute top-[-20%] left-[5%] z-15 pointer-events-none"
                loading="lazy"
              />
              <Image
                src="/middle_phone.png"
                alt="App Screenshot"
                width={400}
                height={800}
                className="absolute w-[70%] md:w-[70%] lg:w-[70%] max-w-[400px] md:max-w-none object-contain absolute top-[5%] left-[40%] z-10 pointer-events-none"
                loading="lazy"
              />


            </div>

            <div className="absolute bottom-0 inset-x-0 h-[20vh] bg-linear-to-t from-white
            via-white/60 via-60%  to-transparent z-110" />


          </section>

          <div className="absolute  w-full h-[10vh] overflow-hidden py-1 mt-12 z-200 overflow-visible">
            {/* Slanted Banner */}
            <div className="relative w-full max-lg:hidden flex items-center justify-center">
              <div className="relative px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 transform rotate-[-2deg] sm:rotate-[-1.5deg] md:rotate-[-4deg] shadow-[0_-18px_35px_rgba(0,0,0,0.35),_0_18px_35px_rgba(0,0,0,0.35)] "
                style={{
                  background: 'linear-gradient(135deg, #2a2a2a 0%, #111111 100%)',
                  borderTop: '2px solid white',
                  borderBottom: '2px solid white',
                  width: '110%',
                }}
              >
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-wide whitespace-nowrap">
                  Made for People with Taste! ✨ Handpicked. Curated. Delivered
                </p>
              </div>
            </div>
          </div>

          {/* Desktop view section 5 */}
          <section className="hidden mt-50 lg:block relative w-full min-h-fit flex justify-center items-center py-20 px-4 sm:px-8">
            <div
              className="relative w-full max-w-7xl mx-auto h-auto flex flex-col items-start justify-center pl-8 sm:pl-16 pr-0 py-12 md:py-0"
              style={{
                background: "linear-gradient(90.45deg, #957242 -14.66%, #000000 73.27%)",
                borderRadius: "30px",
                minHeight: "621px",
              }}
            >
              {/* Left Content */}
              <div className="relative z-10 w-[55%] flex flex-col items-start text-left justify-center">
                <h2
                  className="text-white font-extrabold leading-tight mb-6"
                  style={{
                    background: "linear-gradient(180deg, #FFFFFF 17%, #999999 189.56%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: "clamp(2rem, 5vw, 80px)",
                    lineHeight: "clamp(2.5rem, 6vw, 100px)",
                  }}
                >
                  Everything You Love,<br />Delivered
                </h2>
                <p className="mb-10 max-w-xl"
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "clamp(1rem, 1.5vw, 24px)",
                    lineHeight: "clamp(1.5rem, 2vw, 31px)",
                    fontWeight: 500,
                  }}
                >
                  Shop elegant gifts, beauty essentials, and curated collections all in one place.
                </p>

                <div className="flex flex-row gap-4">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105 cursor-pointer inline-block"
                  >
                    <Image
                      src="/Google_Play_Store_badge_EN 1.webp"
                      alt="Get it on Google Play"
                      width={288}
                      height={85}
                      className="h-14 sm:h-16 md:h-[85px] w-auto"
                      loading="lazy"
                    />
                  </a>

                  {/* App Store Button */}
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105 cursor-pointer inline-block"
                  >
                    <Image
                      src="/Group.webp"
                      alt="Download on the App Store"
                      width={288}
                      height={85}
                      className="h-14 sm:h-16 md:h-[85px] w-auto"
                    />
                  </a>
                </div>
              </div>

            </div>
          </section>

        </div>
      </section>
      <Footer />
    </div>
  );
}
// deploy trigger
