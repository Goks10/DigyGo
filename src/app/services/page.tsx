import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesDetailed from "@/components/sections/ServicesDetailed";
import CallToAction from "@/components/sections/CallToAction";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
            <Navbar />
            <div className="pt-20">
                <ServicesDetailed />
            </div>
            <CallToAction />
            <Footer />
        </main>
    );
}
