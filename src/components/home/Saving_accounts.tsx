import React from 'react'
import Laptop from "next/image"

export default function Saving_accounts() {
  return (
    <section className='containers py-[160px]'>
       <p className='paragraph-style'>Saving Accounts</p>
       <h1 className='font-medium dm-sans text-[64px] leading-[1.1] py-[16px]'>
       Organize your <br/>money the right way
       </h1>
      <div className='flex justify-between pb-[64px]'>
        <div>
       <p className='paragraph-style'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
        <button className="text-[18px] font-medium text-[#5BB5A2] pl-5 pt-12">All Features  <i className="fa-solid fa-arrow-right "></i></button>
        </div>
      </div>
      <div>
        <div className='gap-[33px] grid grid-cols-1 md:grid-cols-5  sm:grid-cols-3 '>
            <div>
       <Laptop src={'/image/Frame 8.png'} alt='Laptop' width={214} height={214} />
          <p className='paragraph-style'>New Laptop</p>
          <p className='text-[#1A191E80] text-[14px] font-[500]'>400$</p>
            </div>
            <div>
       <Laptop src={'/image/Frame 8 (2).png'} alt='Laptop' width={214} height={214} />
          <p className='paragraph-style'>Dream Bike</p>
          <p className='text-[#1A191E80] text-[14px] font-[500]'>200$</p>
            </div>
            <div>
       <Laptop src={'/image/Frame 8 (3).png'} alt='Laptop' width={214} height={214} />
          <p className='paragraph-style'>Holiday</p>
          <p className='text-[#1A191E80] text-[14px] font-[500]'>14000$</p>
            </div>
            <div>
       <Laptop src={'/image/Frame 8 (4).png'} alt='Laptop' width={214} height={214} />
          <p className='paragraph-style'>Camera</p>
          <p className='text-[#1A191E80] text-[14px] font-[500]'>100$</p>
            </div>
            <div>
       <Laptop src={'/image/Frame 8.jpg'} alt='Laptop' width={214} height={214} />
          {/* <p className='paragraph-style'>New Laptop</p> */}
          {/* <p className='text-[#1A191E80] text-[14px] font-[500]'>400$</p> */}
            </div>
            
       
        </div>
      </div>
    </section>
  )
}
