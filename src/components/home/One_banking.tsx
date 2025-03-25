import React from 'react'
import OneImage from 'next/image'
export default function One_anking() {
  return (
    <section className='py-[160px] containers'>
      <div className='flex justify-between gap-8 md:flex md:flex-row flex-col'>
      <div className='md:max-w-[50%]'>
         <h1 className='font-[500] text-[80px] text-[#1A191E] leading-[1.1] tracking-[0.1rem]  dm-sans pb-[64px]'>One app.<br/>
         One banking.</h1>
         <div className='flex gap-[32px] pb-[32px] flex-col lg:flex lg:flex-row'>
          <div className='border-[2px] p-[32px] rounded-xl'>
          <span>
                    <i className="fas fa-bolt bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[35px] h-[35px] text-center p-[10px]"></i>
                  </span>
                  <h2 className='text-[20px] font-[500] text-[#1A191E] pt-[16px] pb-[8px]'>
                  Instant <br/>
transactions
                  </h2>
                  <p className='Testimonials-text'>
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.
                  </p>
          </div>
          <div className='border-[2px] p-[32px] rounded-xl'>
          <span>
                    <i className="fas fa-vault bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[35px] h-[35px] text-center p-[10px]"></i>
                  </span>
                  <h2 className='text-[20px] font-[500] text-[#1A191E] pt-[16px] pb-[8px]'>
                  Saving<br/>
accounts
                  </h2>
                  <p className='Testimonials-text'>
                 Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.
                  </p>
          </div>
         </div>
         <div className='flex gap-[32px] pb-[32px] flex-col lg:flex lg:flex-row'>
          <div className='border-[2px] p-[32px] rounded-xl'>
          <span>
                    <i className="fa-solid fa-mobile-screen-button bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[35px] h-[35px] text-center p-[10px]"></i>
                  </span>
                  <h2 className='text-[20px] font-[500] text-[#1A191E] pt-[16px] pb-[8px]'>
                  Mobile<br/>
Banking
                  </h2>
                  <p className='Testimonials-text'>
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.
                  </p>
          </div>
          <div className='border-[2px] p-[32px] rounded-xl'>
          <span>
                    <i className="fas fa-chart-line bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[35px] h-[35px] text-center p-[10px]"></i>
                  </span>
                  <h2 className='text-[20px] font-[500] text-[#1A191E] pt-[16px] pb-[8px]'>
                  Advanced<br/>
statistics
                  </h2>
                  <p className='Testimonials-text'>
                 Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.
                  </p>
          </div>
         </div>
         <div className='flex gap-[32px] pb-[32px] flex-col lg:flex lg:flex-row'>
          <div className='border-[2px] p-[32px] rounded-xl'>
          <span>
                    <i className="fas fa-box-archive bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[35px] h-[35px] text-center p-[10px]"></i>
                  </span>
                  <h2 className='text-[20px] font-[500] text-[#1A191E] pt-[16px] pb-[8px]'>
                  Virtual<br/>
cards
                  </h2>
                  <p className='Testimonials-text'>
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.
                  </p>
          </div>
          <div className='border-[2px] p-[32px] rounded-xl'>
          <span>
                    <i className="fa-solid fa-wifi bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[35px] h-[35px] text-center p-[8px]"></i>
                  </span>
                  <h2 className='text-[20px] font-[500] text-[#1A191E] pt-[16px] pb-[8px]'>
                  Contactless
                  Payments
                  </h2>
                  <p className='Testimonials-text'>
                 Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.
                  </p>
          </div>
         </div>
      </div>
  <div>
  <div className='sticky top-[20px]'>
<OneImage src={'/image/app.jpg'} alt='hero' width={380} height={800} />
  </div>
      </div>
  </div>
    </section>
  )
}

