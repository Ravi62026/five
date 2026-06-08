"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsCondition() {
  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Terms & Conditions
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Your terms and conditions content goes here...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

