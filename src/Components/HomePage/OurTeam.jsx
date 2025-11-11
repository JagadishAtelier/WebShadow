import React from 'react'

const data = [
  { image: "https://www.oroya.fr/wp-content/uploads/2025/08/2025-07-24_OROYA_PHOTOFRANCOIS.webp", name: "our Name", hoverText: "Php developer" },
  { image: "https://www.oroya.fr/wp-content/uploads/2025/08/2025-07-24_OROYA_PHOTOFRANCOIS.webp", name: "our Name", hoverText: "Php developer" },
  { image: "https://www.oroya.fr/wp-content/uploads/2025/08/2025-07-24_OROYA_PHOTOFRANCOIS.webp", name: "our Name", hoverText: "Php developer" },
];

function OurTeam() {
  return (
    <div className='mt-10'>
      <p className="font-semibold text-sm text-center">
        (Some achievements we’ve recently achieved)
      </p>
      <h1 className="title font-medium text-5xl md:text-8xl lg:text-[8rem] text-center mb-10 border-b w-fit mx-auto">
        Our Team
      </h1>

      <div className='bg-black text-white pt-20 px-5 md:px-10 lg:px-15 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10'>
        {/* Left section */}
        <div className='text-center lg:text-left'>
          <h1 className='text-4xl md:text-5xl'>THE</h1>
          <h1 className='text-5xl md:text-7xl font-bold'>WEB SHADOW</h1>
          <h1 className='text-4xl md:text-5xl'>TEAM</h1>
          <p className='text-gray-200 mt-5 text-sm md:text-base'>"Without heart, we would be just machines" — Alfa Romeo</p>
          <p className='text-base md:text-lg mt-5 mx-auto lg:mx-0 w-full md:w-3/4 lg:w-1/2'>
            The team is made up of three pillars, each bringing unique and essential expertise to the agency:
          </p>
        </div>

        {/* Right section (images) */}
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          {data.map((item, index) => (
            <div key={index} className='relative group'>
              <div className={`relative ${index === 1 ? "lg:-bottom-15" : ""}`}>
                
                {/* Image */}
                <img
                  src={item.image}
                  className='w-64 sm:w-60 md:w-72 object-cover transition-transform duration-500 rounded-md'
                  alt={item.name}
                />

                {/* Overlay (visible only on hover for desktop) */}
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center'>
                  <p className='text-white text-lg font-semibold'>{item.hoverText}</p>
                </div>

                {/* Name */}
                <h1 className='absolute bottom-6 left-1/4 text-xl md:text-2xl font-bold capitalize'>
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
