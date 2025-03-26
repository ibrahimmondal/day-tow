import React from 'react'
import Image from "next/image"

export default function Hero() {
  return (
    <section className='bg-[#E8F2EE] pt-[104px]'>
    <div className='max-w-[1400px] mx-auto px-4'>
      <div className='flex justify-between gap-11 flex-col md:flex md:flex-row'>
        <div>
          <p className='text-[20px] font-[500] dm-sans'>Compare Cards</p>
          <h1 className='text-[80px] font-[500] dm-sans leading-[1.0] tracking-[0.1rem]'>The ideal<br />
            card for you</h1>
        </div>
        <div>
          <Image src={'/image/cards (5).png'} width={512} height={574} alt="hero" />
        </div>
      </div>
    </div>
  </section>
  )
}
