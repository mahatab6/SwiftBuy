"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="w-11/12 mx-auto justify-items-center px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div className="space-y-2">
          <Logo/>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for premium chairs and furniture. Quality guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <Link href="/" className="hover:text-[#239BA7] transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#239BA7] transition-colors">Products</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#239BA7] transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#239BA7] transition-colors">Contact</Link>
            </li>
          </ul>
        </div>


        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <Link href="https://www.facebook.com/"><FaFacebookF className="hover:text-[#239BA7] transition-colors" /></Link>
            <Link href="https://x.com/"><FaTwitter className="hover:text-[#239BA7] transition-colors" /></Link>
            <Link href="https://www.instagram.com/"><FaInstagram className="hover:text-[#239BA7] transition-colors" /></Link>
            <Link href="https://www.linkedin.com/"><FaLinkedinIn className="hover:text-[#239BA7] transition-colors" /></Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-800 pt-4">
        &copy; {new Date().getFullYear()} SwiftBuy. All rights reserved.
      </div>
    </footer>
  );
}
