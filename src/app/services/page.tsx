
import ServicesDetailed from "@/components/sections/ServicesDetailed";
import CallToAction from "@/components/sections/CallToAction";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">

            <div className="pt-20">
                <ServicesDetailed />
            </div>
            <CallToAction />

        </main>
    );
}
