import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="mt-10 text-[#8d8d8d]">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto  py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Useful Links</h2>

          <div className="grid grid-cols-3 gap-10 text-sm">
            <div>
              <p className="mb-1.5">Blog</p>
              <p className="mb-1.5">Privacy</p>
              <p className="mb-1.5">Terms</p>
              <p className="mb-1.5">FAQs</p>
              <p className="mb-1.5">Security</p>
              <p className="mb-1.5">Contact</p>
            </div>

            <div>
              <p className="mb-1.5">Partner</p>
              <p className="mb-1.5">Franchise</p>
              <p className="mb-1.5">Seller</p>
              <p className="mb-1.5">Warehouse</p>
              <p className="mb-1.5">Deliver</p>
              <p className="mb-1.5">Resources</p>
            </div>

            <div>
              <p className="mb-1.5">Recipes</p>
              <p className="mb-1.5">Bistro</p>
              <p className="mb-1.5">District</p>
              <p className="mb-1.5">Blinkit</p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-lg font-semibold text-black">Categories</h2>
            <span className="text-green-600 text-sm cursor-pointer">see all</span>
          </div>

          {/* FIXED → 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <p>Vegetables & Fruits</p>
            <p>Dairy & Breakfast</p>
            <p>Munchies</p>
            <p>Cold Drinks & Juices</p>

            <p>Bakery & Biscuits</p>
            <p>Instant & Frozen Food</p>
            <p>Tea, Coffee & Milk Drinks</p>
            <p>Atta, Rice & Dal</p>

            <p>Dry Fruits, Masala & Oil</p>
            <p>Sweet Tooth</p>
            <p>Chicken, Meat & Fish</p>
            <p>Baby Care</p>

            <p>Paan Corner</p>
            <p>Sauces & Spreads</p>
            <p>Home Furnishing & Decor</p>
            <p>Beauty & Cosmetics</p>

            <p>Pharma & Wellness</p>
            <p>Organic & Premium</p>
            <p>Fashion & Accessories</p>
            <p>Books</p>

            <p>Personal Care</p>
            <p>Cleaning Essentials</p>
            <p>Kitchen & Dining</p>
            <p>E-Gift Cards</p>

            <p>Magazines</p>
            <p>Pet Care</p>
            <p>Stationery Needs</p>
            <p>Print Store</p>

            <p>Electronics & Electricals</p>
            <p>Toys & Games</p>
            <p>Rakhi Gifts</p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-gray-500">
            © Blink Commerce Private Limited, 2016-2026
          </p>

          {/* App Download */}
          <div className="flex items-center gap-4">
            <p className="font-medium text-black">Download App</p>

            {/* Better Buttons */}
            <div className=" w-23 h-7.5   rounded-lg">
             <img className="w-full h-full" src="../public/app.webp" alt="" />
            </div>
            <div className="w-23 h-7.5 rounded-lg">
             <img className="w-full h-full" src="../public/play.webp" alt="" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <div className="bg-black text-white p-2 rounded-full"><FaFacebook size={16} /></div>
            <div className="bg-black text-white p-2 rounded-full"><FaSquareXTwitter size={16} /></div>
            <div className="bg-black text-white p-2 rounded-full"><FaInstagramSquare size={16} /></div>
            <div className="bg-black text-white p-2 rounded-full"><FaLinkedin size={16} /></div>
             <div className="bg-black text-white p-2 rounded-full"><BsFillThreadsFill size={16} /></div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-7xl mx-auto pb-6 text-xs text-gray-500">
        <p>
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related,
          linked or interconnected in whatsoever manner or nature.
        </p>
      </div>
    </div>
  );
}

export default Footer;