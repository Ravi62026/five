"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getCMSPage, getCMSIdFromRoute } from "@/lib/cms";

export default function CMSPageContent() {
  const pathname = usePathname();
  const [cmsData, setCmsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lang, setLang] = useState("en"); // Default to English

  useEffect(() => {
    const fetchCMSContent = async () => {
      setLoading(true);
      setError(null);

      // Get current route
      const currentRoute = pathname || window.location.pathname;
      const cmsId = getCMSIdFromRoute(currentRoute);

      if (!cmsId) {
        setError("CMS page not found");
        setLoading(false);
        return;
      }

      try {
        const data = await getCMSPage(cmsId, lang);
        
        if (!data) {
          setError("CMS page not found or is inactive");
        } else {
          setCmsData(data);
        }
      } catch (err) {
        console.warn("Error fetching CMS content:", err.message || err);
        setError("Failed to load content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCMSContent();
  }, [lang, pathname]);

  // Get display content based on language
  const getTitle = () => {
    if (!cmsData) return "";
    return lang === "ar" && cmsData.titleAr
      ? cmsData.titleAr
      : cmsData.titleEn || cmsData.title || "";
  };

  const getContent = () => {
    if (!cmsData) return "";
    return lang === "ar" && cmsData.contentAr
      ? cmsData.contentAr
      : cmsData.contentEn || cmsData.content || "";
  };

  const getSubtitle = () => {
    if (!cmsData) return "";
    if (cmsData.cmsId === "1") {
      return lang === "ar"
        ? "يرجى قراءة هذه الشروط بعناية قبل استخدام Soaraat. بالاشتراك أو تقديم طلب، أنت توافق على الشروط أدناه."
        : "Please read these terms carefully before using Soaraat. By subscribing or placing an order, you agree to the conditions below.";
    }
    return "";
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen text-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF722D] mx-auto mb-4"></div>
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !cmsData) {
    return (
      <div className="bg-white min-h-screen text-black">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold mb-4">Error</h1>
            <p className="text-lg opacity-90 mb-6">
              {error || "CMS page not found or is inactive"}
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              style={{
                background: "linear-gradient(180deg, #FF722D 0%, #B34712 100%)",
              }}
            >
              Go to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-white">
      
      <div className="h-[4rem] lg:h-[7rem]">
      <Header /></div>      
      {/* Header Section with Background Image */}
      <section className="relative max-w-6xl mx-auto h-[40vh] sm:h-[50vh] md:h-[60vh] 2xl:h-[40vh] rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/termsConditions.webp"
            alt="CMS Page Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end px-4 sm:px-6 md:px-8 lg:px-12 pb-8 sm:pb-12 md:pb-16">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
              {getTitle()}
            </h1>
            
            {/* Language Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  lang === "en"
                    ? "bg-[#FF722D] text-white"
                    : "bg-white/20 text-white/70 hover:bg-white/30"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  lang === "ar"
                    ? "bg-[#FF722D] text-white"
                    : "bg-white/20 text-white/70 hover:bg-white/30"
                }`}
              >
                AR
              </button>
            </div>
          </div>
          
          {getSubtitle() && (
            <p className="text-base sm:text-lg md:text-xl max-w-3xl opacity-90">
              {getSubtitle()}
            </p>
          )}
        </div>
      </section>

      {/* Main Content Section */}
      <main className="w-full bg-white  text-black py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl">
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-p:text-white/90 prose-li:text-white/90
              prose-a:text-[#FF722D] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-ul:text-white/90 prose-ol:text-white/90
              prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8
              prose-h3:text-xl prose-h3:font-bold prose-h3:mb-3
              prose-p:leading-relaxed prose-p:mb-4
              prose-ul:list-disc prose-ul:ml-6 prose-ul:space-y-2
              prose-ol:list-decimal prose-ol:ml-6 prose-ol:space-y-2"
            dangerouslySetInnerHTML={{ 
              // Note: Content is from trusted CMS backend source
              // For production, consider adding DOMPurify for additional sanitization
              __html: getContent() 
            }}
            dir={lang === "ar" ? "rtl" : "ltr"}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

