import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import WhyDifferent from "@/components/sections/WhyDifferent";
import Proof from "@/components/sections/Proof";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <WhyDifferent />
      <Proof />
      <WhoWeWorkWith />
      <CallToAction />
      <Footer />
    </main>
  );
}
