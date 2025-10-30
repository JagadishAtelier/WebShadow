import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HomeAbout() {
  const sectionRef = useRef(null);
  const circlesRef = useRef([]);

useEffect(() => {
  const ctx = gsap.context(() => {
    // 🔹 Match different screens
    ScrollTrigger.matchMedia({
      // ======== Desktop / Large screens ========
      "(min-width: 1024px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=900",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.from(circlesRef.current, {
          opacity: 0,
          y: 100,
          stagger: 0.1,
          duration: 1.5,
          ease: "power2.out",
        });

        tl.to(
          circlesRef.current,
          {
            x: (i) =>
              i === 0
                ? -520
                : i === 1
                ? -320
                : i === 2
                ? -120
                : i === 3
                ? 120
                : i === 4
                ? 320
                : 520,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 2,
            ease: "power3.inOut",
          },
          "+=0.5"
        );
      },

      // ======== Mobile / Small screens ========
      "(max-width: 1023px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100",
            end: "+=900",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.from(circlesRef.current, {
          opacity: 0,
          y: 100,
          stagger: 0.1,
          duration: 1.5,
          ease: "power2.out",
        });

                tl.to(
          circlesRef.current,
          {
            x: (i) =>
              i === 0
                ? -320
                : i === 1
                ? -200
                : i === 2
                ? -80
                : i === 3
                ? 40
                : i === 4
                ? 160
                : 280,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 2,
            ease: "power3.inOut",
          },
          "+=0.5"
        );
      },
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <div  className="hidden lg:mt-60 md:mt-10 mt-10 lg:mx-20 mx-10">
      <p className="font-semibold text-sm text-center">
        (Some achievements we’ve recently achieved)
      </p>
      <h1 className="title font-medium text-5xl md:text-8xl lg:text-[8rem] text-center mb-10 border-b w-fit mx-auto">Our Values</h1>
    <div className="relative">
      <div className="flex justify-center gap-6 mx-auto w-full mb-40 relative z-50">
        <p
          ref={(el) => (circlesRef.current[0] = el)}
          className="border-2 border-[#ff5623] rounded-full lg:h-50 lg:w-50 h-30 w-30  flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%]"
        >
          Fogdog
        </p>
        <p
          ref={(el) => (circlesRef.current[1] = el)}
          className="border-2 border-[#ff5623] rounded-full lg:h-50 lg:w-50 h-30 w-30 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%]"
        >
          Spark
        </p>
        <p
          ref={(el) => (circlesRef.current[2] = el)}
           className="border-2 border-[#ff5623] rounded-full lg:h-50 lg:w-50 h-30 w-30 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%]"
        >
          Lumos
        </p>
        <p
          ref={(el) => (circlesRef.current[3] = el)}
 className="border-2 border-[#ff5623] rounded-full lg:h-50 lg:w-50 h-30 w-30 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%]"
        >
          Aster
        </p>
        <p
          ref={(el) => (circlesRef.current[4] = el)}
           className="border-2 border-[#ff5623] rounded-full lg:h-50 lg:w-50 h-30 w-30 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%]"
        >
          Glow
        </p>
        <p
          ref={(el) => (circlesRef.current[5] = el)}
 className="border-2 border-[#ff5623] rounded-full lg:h-50 lg:w-50 h-30 w-30 flex justify-center items-center text-lg font-semibold text-black 
                backdrop-blur-xl bg-white/10 shadow-lg shadow-[#ff5623]/40 absolute top-0 left-[45%]"
        >
          Nova
        </p>
      </div>
      <div>
        <h1 className="absolute top-0 lg:right-10 text-5xl md:text-8xl lg:text-[11rem]">WEB SHADOW</h1>
      </div>
      </div>
      <div className=" mt-10 lg:mt-80">
        <p className="lg:text-[3rem] text-[1.5rem] text-center">We combine talent, creativity, and cultural fluency—working across disciplines and geographies to deliver  
            <span className="bg-[#ff5623] text-white mx-2"> ideas that move </span> people and brands.</p>
      </div>
    </div>
  );
}

export default HomeAbout;
