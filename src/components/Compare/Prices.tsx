import React from 'react'
import Image from "next/image"

export default function Price() {
  return (
    <div className="  flex items-center justify-center p-8 py-[150px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
          <div className=''>

</div>
            <div className="bg-white rounded-lg  flex flex-col items-center p-6 borde">
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="text-lg font-bold">Basic</h3>
                <span className="text-xs text-[#5BB5A2] bg-[#E8F2EE] px-2 py-0.5 rounded-full">Popular</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">Free</h2>
              <p className="text-gray-500 mb-6 text-center max-w-[300px] py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
        <Image src={"/image/card (9).png"} alt="card" className="pb-10" width={700} height={700}/>
    
              <button className="w-full bg-[#5BB5A2] text-white py-2 rounded hover:bg-[#5BB5A2] transition">
                Get started
              </button>
            </div>
            <div className="bg-white rounded-lg  flex flex-col items-center p-6 borde">
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="text-lg font-bold">Premium</h3>
              
              </div>
              <h2 className="text-4xl font-bold mb-2">$5 <span className="text-[#1A191E80] text-[16px] font-mono">per month</span></h2>
              <p className="text-gray-500 mb-6 text-center max-w-[300px] py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
        <Image src="/image/card (10).png" alt="card" width={700} height={700} className="pb-10"/>
    
              <button className="w-full bg-[#5BB5A2] text-white py-2 rounded hover:bg-[#5BB5A2] transition">
                Get started
              </button>
            </div>
            <div className="bg-white rounded-lg  flex flex-col items-center p-6 borde">
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="text-lg font-bold">Basic</h3>
                
              </div>
              <h2 className="text-4xl font-bold mb-2">$10 <span className="text-[#1A191E80] text-[16px] font-mono">per month</span></h2>
              <p className="text-gray-500 mb-6 text-center max-w-[300px] py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
        <Image src="/image/card (11).png" alt="card" width={700} height={700} className="pb-10"/>
    
              <button className="w-full bg-[#5BB5A2] text-white py-2 rounded hover:bg-[#5BB5A2] transition">
                Get started
              </button>
            </div>
              
          </div>
        </div>
  )
}
