import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSearchLocation,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* Contact Us Section */}
        <div className="mt-10">
          <h3 className="font-bold mb-4">Contact Us</h3>
          <p className="flex items-center mb-2">
            <MdLocationOn className="mr-2" /> Address: amet, consetetur
            sadipscing elitr
          </p>
          <p className="flex items-center mb-2">
            <MdEmail className="mr-2" /> Email: eirmod tempor invidunt ut labore
          </p>
          <p className="flex items-center mb-2">
            <MdPhone className="mr-2" /> Phone: 123456789
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="text-center mt-10">
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300 text-2xl ">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-300 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300 text-2xl">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-300 text-2xl">
              <FaSearchLocation />
            </a>
          </div>
        </div>

        {/* Head Office Section */}
        <div className="mt-10">
          <h3 className="font-bold mb-4">Head Office</h3>
          <p className="flex items-center mb-2">
            <MdLocationOn className="mr-2" /> Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr
          </p>
          <p className="flex items-center mb-2">
            <MdLocationOn className="mr-2" /> Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr
          </p>
          <p className="flex items-center mb-2">
            <MdLocationOn className="mr-2" /> Lorem ipsum asd asdsaww Lorem
            Ipsum
          </p>
        </div>
      </div>

      <div className="text-center mt-10 p-4 bg-[#092958]">
        <p className="text-sm">© 2021 All Rights Reserved. Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
