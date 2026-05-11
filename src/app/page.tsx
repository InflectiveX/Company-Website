import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Mission from "@/components/Mission";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import AboutUs from "@/components/AboutUs";
import Tools from "@/components/Tools";
import Works from "@/components/Works";
import IndustryInsight from "@/components/IndustryInsight";
import Comparison from "@/components/Comparison";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Results from "@/components/Results";
import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000319] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoSection />
      <Mission />
      <WhyUs />
      <Process />
      <AboutUs />
      <Tools />
      <Works />
      <IndustryInsight />
      <Comparison />
      <Services />
      <Pricing />
      <Features />
      <Results />
      <Blogs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
