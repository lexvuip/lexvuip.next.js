import AboutSection from '../components/sections/AboutSection';
import OurSection from '../components/sections/OurSection';
import BlogSection from '../components/sections/BlogSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';

export const metadata = {
  title: "LexVu - Precision in Every Filing, Clarity in Every Design",
  description: "Expert IP Solutions, Patent Design, and Paralegal services for legal professionals. Specializing in utility and design patent drawings, eFiling, and trial preparation.",
};

export default function Home() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <OurSection />
      <BlogSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

