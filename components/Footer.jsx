import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="border-t-4 border-gray-300 w-full md:flex  block justify-between py-2 px-4">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold mb-3">Horizon</h1>
          <p className="text-gray-700 max-w-[400px] mb-3">
            Our mission is to equip modern explorer with cuttiong edge.
            functional, and stylish bage that elevate every adventure
          </p>
        </div>
        <p>©️ 2025 Horizon. All rights reserved.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 my-3">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-3">About</h3>
          <p>About Us</p>
          <p>Blog</p>
          <p>Career</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <div className="flex flex-col gap-2">
            <p>Contact Us</p>
            <p>Return</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-between">
        <h1 className="font-semibold">Get Updates</h1>

        <div className="flex justify-between md:block">
          <div className="border border-gray-500 pl-4 overflow-hidden rounded-md w-fit h-fit">
            <input
              type="text"
              placeholder="Enter your email"
              className="outline-none"
            />
            <button className="bg-gray-800 p-2 text-white ">Subscribe</button>
          </div>
          <div className="flex gap-4 my-2">
            <div className="overflow-hidden rounded-lg outline">
              <Instagram className="bg-gray-800 text-white p-1" size={35} />
            </div>
            <div className="overflow-hidden rounded-lg outline">
              <Twitter className="bg-gray-800 text-white p-1" size={35} />
            </div>
            <div className="overflow-hidden rounded-lg outline">
              <Facebook className="bg-gray-800 text-white p-1" size={35} />
            </div>
            <div className="overflow-hidden rounded-lg outline">
              <Linkedin className="bg-gray-800 text-white p-1" size={35} />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
