import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutContent from "@/components/sections/AboutContent";
import CallToAction from "@/components/sections/CallToAction";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />
            <div className="pt-20">
                <AboutContent />
            </div>
            <CallToAction />
            <Footer />
        </main>
    );
}
