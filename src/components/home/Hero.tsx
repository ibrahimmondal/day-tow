import React from 'react'
import HeroImage from 'next/image'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <>
      <section className='bg-[#E8F2EE] dark:--foreground'>
        <div className='containers py-[128px]'>
          <div className='flex justify-between gap-[50px] md:gap-[168px] flex-col md:flex-row md:flex'>
            <div className='md:max-w-[50%]'>
              <h1 className='heading-style dm-sans'>Banking
                starts here.</h1>
              <p className='text-[23px] font-medium text-[#1A191E] pt-[16px] pb-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <div className='flex md:gap-[115px] flex-col md:flex md:flex-row'>
                <div className="flex gap-2 pt-5">
                  <span>
                    <i className="fa-solid fa-check bg-[#5BB5A2] text-white rounded-[50px] w-[26px] h-[26px] text-center p-[5px] "></i>
                  </span>
                  <h3 className="">Instant Transfer</h3>
                </div>
                <div className="flex gap-2 pt-5">
                  <span>
                    <i className="fa-solid fa-check bg-[#5BB5A2] text-white rounded-[50px] w-[26px] h-[26px] text-center p-[5px]"></i>
                  </span>
                  <h3 className="">Payments worldwide</h3>
                </div>
              </div>
              <div className='flex md:gap-[110px] flex-col md:flex md:flex-row'>
                <div className="flex gap-2 pt-5">
                  <span>
                    <i className="fa-solid fa-check bg-[#5BB5A2] text-white rounded-[50px] w-[26px] h-[26px] text-center p-[5px]"></i>
                  </span>
                  <h3 className="">Saving accounts</h3>
                </div>
                <div className="flex gap-2 pt-5">
                  <span>
                    <i className="fa-solid fa-check bg-[#5BB5A2] text-white rounded-[50px] w-[26px] h-[26px] text-center p-[5px]"></i>
                  </span>
                  <h3 className="">100% mobile banking</h3>
                </div>
              </div>
             <div>
              <Button className='my-[60px] cursor-pointer'>Open Account</Button>
              <button className="text-[15px] text-[#5BB5A2] pl-5">Compare Cards  <i className="fa-solid fa-arrow-right "></i></button>
             </div>
            </div>
            <div className='md:max-w-[50%]'>
              <HeroImage src={'/image/cards (3).png'} alt='hero' width={399} height={577} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
