import React from "react";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-[#12141D] font-inter pt-20 px-4">
      <section className="max-w-[1240px] mx-auto">
        <section className="flex flex-col lg:flex-row justify-between gap-10 items-center lg:items-start text-center lg:text-left">
          {/* Left Section */}
          <div className="flex flex-col gap-8 items-center lg:items-start lg:w-[308px]">
            <img
              src="/img/Logo.webp"
              alt="Logo"
              className="w-[200px] md:w-[250px] lg:w-[308px]"
            />
            <p className="text-sm text-[#B9B3B3] max-w-sm">
              The purpose of a FAQ is generally to provide information on
              frequent questions or concerns.
            </p>
            <div className="flex gap-3 justify-center">
              {/* <img src="/img/x.png" alt="X" className="w-5 h-5" />
              <img src="/img/facebook.png" alt="Facebook" className="w-5 h-5" />
              <img src="/img/insta.png" alt="Instagram" className="w-5 h-5" /> */}
              <a href=""><BsTwitterX className="text-[3.5vw] md:text-[1.2vw] text-white" /></a>
              <a href=""><FaFacebookSquare className="text-[3.5vw] md:text-[1.2vw] text-white"/></a>
              <a href=""><FaInstagram className="text-[3.5vw] md:text-[1.2vw] text-white"/></a>
              <a href=""><FaLinkedin className="text-[3.5vw] md:text-[1.2vw] text-white"/></a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-[140px] items-center lg:items-start">
            {/* Tools */}
            <div className="flex flex-col gap-8 items-center lg:items-start">
              <p className="text-lg text-[#fafafa] font-semibold">Tools</p>
              <ul className="flex flex-col gap-4 text-sm text-[#B9B3B3]">
                <li>AI Resume</li>
                <li>AI Cover Letter</li>
                <li>AI Specified Job Resume</li>
                <li>AI Resume Optimization</li>
                <li>LinkedIn Optimization</li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-8 items-center lg:items-start">
              <p className="text-lg text-[#fafafa] font-semibold">Company</p>
              <ul className="flex flex-col gap-4 text-sm text-[#B9B3B3]">
                <li>Blogs</li>
                <li>Resources</li>
                <li>About us</li>
              </ul>
            </div>

            {/* Help */}
            <div className="flex flex-col gap-8 items-center lg:items-start">
              <p className="text-lg text-[#fafafa] font-semibold">Help</p>
              <ul className="flex flex-col gap-4 text-sm text-[#B9B3B3]">
                <li>Customer Support</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Bottom */}
        <section className="mt-10 w-full border-t-2 border-[#8A8A8A] pt-8">
          <p className="text-sm text-[#B9B3B3] text-center px-4">
            © Copyright 2024, All Rights Reserved by ResumeNex AI
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
