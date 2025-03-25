import React from 'react'
import AccountImage from 'next/image'
import { Button } from '../ui/button'

export default function Account() {
  return (
    <section>
        <div className=''>
        <p className='paragraph-style text-center'>Account</p>
        <h1 className='font-medium dm-sans text-[80px] leading-[1.1] pt-[8px] pb-[16px] dm-sans text-center '>
        Perfect card<br /> 
        for your needs.
        </h1>
        <p className='paragraph-style text-center pb-[56px]'>Senectus et netus et malesuada fames ac turpis. <br/>
        Sagittis vitae et leo duis ut diam.</p>
        <div className='max-w-[500px] mx-auto'>
        <AccountImage src={'/image/cards (4).png'} height={500} width={500} alt='hero' className=' text-center pb-[56]'/>
        </div>
        <div className='flex gap-1.5 justify-center'>
            <Button>Open Account</Button>
            <Button variant="outline">Compare Cards</Button>
        </div>
        
        </div>
    </section>
  )
}
