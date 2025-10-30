import React from "react";
import "./HeroSection.css";
import { ArrowDown, Facebook, Globe2, Instagram, Linkedin, Star, Twitter } from "lucide-react";
import HomeAbout from "./HomeAbout";

function HeroSection() {
  const images = [
    "https://img.freepik.com/free-photo/male-indian-programmer-working-desktop-computer-white-desk-office_231208-3636.jpg?w=740&q=80",
    "https://img.freepik.com/free-photo/close-up-young-indian-programmer-using-computer-office_231208-3638.jpg?w=740&q=80",
    "https://img.freepik.com/free-photo/indian-developer-coding-laptop-office_231208-3641.jpg?w=740&q=80",
    "https://img.freepik.com/free-photo/indian-programmer-typing-laptop-modern-office_231208-3640.jpg?w=740&q=80",
  ];

  return (
    <div className="lg:ms-30 md:ms-0 md:me-0 relative lg:mt-10 md:mt-10 mt-0 mx-5 w-full md:px-10">
      <div className="flex justify-between items-start">
        <div className="lg:w-[900px] w-full">
          {/* Row 1 */}
          <div className="flex items-center gap-3">
            <h1 className="font-medium m-0 lg:text-[8rem] md:text-8xl text-5xl">We</h1>
            <img
              src={images[0]}
              className="lg:w-80 md:w-80 lg:h-[25vh] md:h-[20vh] h-20 w-40  rounded-md object-cover"
              alt="main"
            />
            <h1 className="font-medium lg:text-[8rem] md:text-8xl text-5xl">Tell</h1>
            <p
              className="text-[#ff5623] font-bold lg:text-[8rem] md:text-8xl text-5xl lg:block md:block hidden"
              style={{
                animation: "spin 3s linear infinite",
              }}
            >
              *
            </p>
          </div>

          {/* Row 2 */}
          <div className="flex lg:justify-end">
            <h1 className="font-medium text-[#ff5623] lg:text-[8rem] md:text-8xl text-5xl">Web Shadows</h1>
            <p
              className="text-black font-bold lg:text-[8rem] md:text-8xl text-5xl lg:block md:block hidden"
              style={{
                animation: "spin 3s linear infinite",
              }}
            >
              *
            </p>
          </div>

          {/* Row 3 - Stacked Photo Pile before "Story" */}
          <div className="flex items-center lg:gap-8 md:gap-8 gap-0 mt-6">
            <div className="relative lg:w-[220px] md:w-[220px] w-50 md:h-[220px] h-[100px] photo-stack group">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`stack-${index}`}
                  className={`absolute inset-0 lg:w-full md:w-full w-40 h-20 md:h-[20vh] lg:h-full object-cover rounded-xl transition-transform duration-700 ease-out stack-${index}`}
                />
              ))}
            </div>
            <h1 className="font-medium lg:text-[8rem] md:text-8xl text-5xl">Story</h1>
            <p
              className="text-[#ff5623] font-bold lg:text-[8rem] md:text-8xl text-5xl lg:block md:block hidden"
              style={{
                animation: "spin 3s linear infinite",
              }}
            >
              *
            </p>

          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-3 items-center mt-10">
          <p className="rotate-90 mb-10">FOLLOW US</p>
          <ArrowDown />
          <div className="bg-[#ff5623] text-white px-3 py-2 rounded-full"><i class="bi bi-instagram"></i></div>
          <div className="bg-[#ff5623] text-white px-3 py-2 rounded-full"><i class="bi bi-facebook"></i></div>
          <div className="bg-[#ff5623] text-white px-3 py-2 rounded-full"><i class="bi bi-whatsapp"></i></div>
          <div className="bg-[#ff5623] text-white px-3 py-2 rounded-full"><i class="bi bi-linkedin"></i></div>
        </div>
      </div>
      <div className="hidden ms-auto lg:w-1/2 lg:absolute lg:-bottom-50 lg:right-0 w-full ">
        <p className="text-lg text-gray-700">
          <span className="text-[#ff5623]">(*)</span>We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team <span className="text-[#ff5623]">(*)</span> We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team <span className="text-[#ff5623]">(*)</span> We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team <span className="text-[#ff5623]">(*)</span> We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team <span className="text-[#ff5623]">(*)</span> We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team <span className="text-[#ff5623]">(*)</span> We are a communications ecosystem built to rethink how communication happens. Six agencies. One integrated team|
          Explore our ecosystem

        </p>

      </div>
    </div>
  );
}

export default HeroSection;
