import React from 'react'

const data = [
    {image: "https://www.oroya.fr/wp-content/uploads/2025/08/2025-07-24_OROYA_PHOTOFRANCOIS.webp",name : "our Name"},
    {image: "https://www.oroya.fr/wp-content/uploads/2025/08/2025-07-24_OROYA_PHOTOFRANCOIS.webp",name : "our Name"},
    {image: "https://www.oroya.fr/wp-content/uploads/2025/08/2025-07-24_OROYA_PHOTOFRANCOIS.webp",name : "our Name"},
]
function OurTeam() {
    return (
        <div className='mt-10'>
            <p className="font-semibold text-sm text-center">
                (Some achievements we’ve recently achieved)
            </p>
            <h1 className="title font-medium text-5xl md:text-8xl lg:text-[8rem] text-center mb-10 border-b w-fit mx-auto">Our Team</h1>
        
        <div className='bg-black text-white pt-20 px-15 flex justify-between'>
            <div>
                <h1 className='text-5xl'>THE</h1>
                <h1 className='text-7xl font-bold'>WEB SHADOW</h1>
                                <h1 className='text-5xl'>TEAM</h1>
                <p className='text-gray-200 mt-5'>"Without heart, we would be just machines"Alfa Romeo</p>
                <p className='text-lg mt-5 w-1/2'>The team is made up of three pillars, each bringing unique and essential expertise to the agency:</p>
            </div>
            <div className='flex gap-2'>
                {data.map((item,index)=>(
                    <div key={index} className='relative'>
                        {index === 1 ? (
                            <div>
                            <img src={item.image} className='relative -bottom-15 w-70'/>
                                                    <h1 className='absolute -bottom-5 left-1/4 text-2xl font-bold capitalize'>{item.name}</h1>
                            </div>
                        ):(
                            <div>
                            <img src={item.image} className='w-70'/>
                                                    <h1 className='absolute bottom-10 capitalize left-1/4 text-2xl font-bold'>{item.name}</h1>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default OurTeam