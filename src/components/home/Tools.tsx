import React from 'react'
import ImageOne from 'next/image'
export default function Tools() {
    return (
        <section className='containers pb-[160px] '>
            <ImageOne src='/image/grid (2).png' alt='hero' width={500} height={500}  className='pb-[64px]'/>
            <p className='paragraph-style'>Tools</p>

            <div className='flex justify-between flex-col md:flex-row gap-5'>
                <div>
                    <h1 className='font-medium dm-sans text-[64px] leading-[1.1] pt-[8px] pb-[16px]'>
                        Seemless<br />
                        integration
                    </h1>
                    <p className='Testimonials-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do<br /> amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div>
                    <div className="flex gap-2 pt-5 ">
                        <span>
                            <i className="fa-solid fa-check bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[40px] h-[40px] text-center p-[12px]"></i>
                        </span>
                        <h3 className="list-paragraph-style pt-[5px]">Secure and encrypted integration</h3>
                    </div>
                    <div className="flex gap-2 pt-5 ">
                        <span>
                            <i className="fa-solid fa-check bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[40px] h-[40px] text-center p-[12px]"></i>
                        </span>
                        <h3 className="list-paragraph-style pt-[5px]">Fully API interface</h3>
                    </div>
                    <div className="flex gap-2 pt-5 ">
                        <span>
                            <i className="fa-solid fa-check bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[40px] h-[40px] text-center p-[12px]"></i>
                        </span>
                        <h3 className="list-paragraph-style pt-[5px]">Payments worldwide</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
