
import AboutContent from "@/components/sections/AboutContent";
import CallToAction from "@/components/sections/CallToAction";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">

            <div className="pt-20">
                <AboutContent />
            </div>
            <CallToAction />

        </main>
    );
}
