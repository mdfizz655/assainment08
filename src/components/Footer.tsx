import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                
                {/* 1. Brand Info */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6">TileGallery</h2>
                    <p className="text-slate-400 leading-relaxed">
                        Redefining spaces with premium tiles. Your dream home deserves the best aesthetic and durability.
                    </p>
                </div>

                {/* 2. Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
                    <ul className="space-y-4 font-medium">
                        <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                        <li><Link href="/all-tiles" className="hover:text-blue-400 transition-colors">All Tiles</Link></li>
                        <li><Link href="/my-profile" className="hover:text-blue-400 transition-colors">My Profile</Link></li>
                    </ul>
                </div>

                {/* 3. Contact Us */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-blue-400" />
                            <span>info@tilegallery.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-blue-400" />
                            <span>+880 1234 567 890</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin size={18} className="text-blue-400" />
                            <span>Banani, Dhaka, Bangladesh</span>
                        </li>
                    </ul>
                </div>

                {/* 4. Newsletter */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Join Community</h3>
                    <p className="text-slate-400 mb-4">Get updates on new patterns.</p>
                    <div className="flex">
                        <input type="text" placeholder="Email" className="input input-bordered rounded-r-none w-full bg-slate-800 border-slate-700 text-white focus:outline-none" />
                        <button className="btn btn-primary rounded-l-none border-none">Join</button>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} TileGallery. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;