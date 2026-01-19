import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black py-12 text-white/80">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative h-10 w-32">
                                <Image src="/logo.png" alt="DigyGo" fill className="object-contain" />
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground w-full max-w-xs">
                            DigyGo helps businesses generate, manage, and convert leads using AI-powered automation systems.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/services" className="text-sm hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-3">
                            <li className="text-sm">Coimbatore, India</li>
                            <li><a href="mailto:sivaraj@digygo.com" className="text-sm hover:text-primary transition-colors">sivaraj@digygo.com</a></li>
                            <li><a href="tel:+919894685308" className="text-sm hover:text-primary transition-colors">+91 98946 85308</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} DigyGo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
