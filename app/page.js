import Blogs from "@/components/Blogs";
import Carousel from "@/components/crousel";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import React, { Suspense } from "react";

export default function page() {
  return (
    <>
      <Carousel />
      <div className="min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Blogs />
        </Suspense>
      </div>
      <section className="md:max-h-screen">
        <Discover />
      </section>
      <footer className="max-h-screen">
        <Footer />
      </footer>
    </>
  );
}
