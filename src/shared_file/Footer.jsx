import React from 'react';
import logo from '../assets/Picsart_24-12-18_17-11-57-456.png'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative w-full bg-black text-white pt-20">
      {/* Floating "SA Online Zone" title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[70%] z-30">
<div className="card">
  <div
    className="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center"
  >
    <div
      className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16"
    >
      <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
        Thank You
      </p>
      <p className="px-10 text-[10px] sm:text-[12px] text-gray-700">
        It’s so nice that you had the time to view this idea
      </p>
      <p className="font-serif text-[10px] sm:text-[12px text-gray-700">
        Wishing you a fantastic day ahead!
      </p>
      <p className="font-sans text-[10px] text-gray-700 pt-5">SA Online Zone</p>
    </div>
    <button
      className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
    >
      SA Zone
    </button>
    <div
      className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
    ></div>
    <div
      className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
    ></div>
    <div
      className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
    ></div>
    <div
      className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
    ></div>
  </div>
</div>

  
      </div>

      {/* Footer content */}
      <footer className=" pb-10">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us */}
     <div className=' '>
         <img className=' w-12 mx-auto h-12' src={logo}/>
        <div className="text-2xl mx-auto w-fit font-extrabold text-white rounded-md shadow-lg ">
          SA Online Zone
        </div>
     </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-400">Email: support@saonlinezone.com</p>
            <p className="text-sm text-gray-400">Phone: +880-1234-567890</p>
            <p className="text-sm text-gray-400">Address: Dhaka, Bangladesh</p>
          </div>

          {/* Privacy Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Privacy Policy</h3>
            <p className="text-sm text-gray-400">
              We care about your privacy. Read our terms and conditions to
              understand how your data is protected.
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-blue-500 hover:text-blue-400 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400 transition">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} SA Online Zone. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
