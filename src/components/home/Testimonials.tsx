import React from 'react'
import Star from 'next/image'
export default function Testimonials() {
    return (
        <section className='containers py-[160px]'>
            <div className='flex justify-between '>
                <div>
                    <p className='paragraph-style'>Testimonials</p>
                    <h1 className='font-[500] text-[64px] text-[#1A191E] leading-[1.1] tracking-[0.1rem] dm-sans'>
                        People all over the<br /> world use banko.
                    </h1>
                </div>
                <div>
                    <div className="flex gap-2 pt-[130px] ">
                        <span>
                            <i className="fa-solid fa-star bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[40px] h-[40px] text-center p-[12px]"></i>
                        </span>
                        <h3 className="list-paragraph-style pt-[5px]">Rated <span className='text-[#5BB5A2]'>4.8/5 </span>from over 1000 users</h3>
                    </div>
                </div>
            </div>

            <div className='py-[64px]'>
            <div className='flex gap-[20px] justify-between flex-col md:flex md:flex-row'>
                <div className='border-[2px] p-[32px] rounded-[10px] w-[100%] h-[100%] mb-[50px]'>
                    <Star src={"/image/rating.png"} width={116} height={20} alt='star' />
                    <h1 className='Testimonials-h-text pt-[8px] pb-[16px]'>
                        Sunt qui esse pariatur duis deserunt mollit
                    </h1>
                    <p className='pb-[24px] Testimonials-text'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                    <div>
                        <p className='list-paragraph-style'>Cody Fisher</p>
                        <p className='text-[#1A191E80] text-[14px] font-[500]'>Medical Assistant</p>
                    </div>
                </div>
                <div className='border-[2px] p-[32px] rounded-[10px] w-[100%]'>
                    <Star src={"/image/rating.png"} width={116} height={20} alt='star' />
                    <h1 className='Testimonials-h-text pt-[8px] pb-[16px]'>
                    At lectus urna duis convallis tellus
                    </h1>
                    <p className='pb-[24px] Testimonials-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.<br /><br />
                        In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat.</p>
                    <div>
                        <p className='list-paragraph-style'>Jenny Wilson</p>
                        <p className='text-[#1A191E80] text-[14px] font-[500]'>Nursing Assistant</p>
                    </div>
                </div>
                <div className='border-[2px] p-[32px] rounded-[10px] w-[100%] h-[100%]'>
                    <Star src={"/image/rating.png"} width={116} height={20} alt='star' />
                    <h1 className='Testimonials-h-text pt-[8px] pb-[16px]'>
                        Elit aute irure tempor cupidatat incididunt
                    </h1>
                    <p className='pb-[24px] Testimonials-text'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                    <div>
                        <p className='list-paragraph-style'>Guy Hawkins</p>
                        <p className='text-[#1A191E80] text-[14px] font-[500]'>President of Sales</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-[25px] pt-[30px] flex-col md:flex md:flex-row'>
                <div className='border-[2px] p-[32px] rounded-[10px] w-[100%] h-[100%] object-cover'>
                    <Star src={"/image/rating.png"} width={116} height={20} alt='star' />
                    <h1 className='Testimonials-h-text pt-[8px] pb-[16px]'>
                        Sunt qui esse pariatur duis deserunt mollit
                    </h1>
                    <p className='pb-[24px] Testimonials-text'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. </p>
                    <div>
                        <p className='list-paragraph-style'>Mitch Fisher</p>
                        <p className='text-[#1A191E80] text-[14px] font-[500]'>Developer</p>
                    </div>
                </div>
                <div className='border-[2px] p-[32px] rounded-[10px] w-[100%] h-[100%]'>
                    <Star src={"/image/rating.png"} width={116} height={20} alt='star' />
                    <h1 className='Testimonials-h-text pt-[8px] pb-[16px]'>
                    Donec et fringilla neque
                    </h1>
                    <p className='pb-[24px] Testimonials-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat.</p>
                    <div>
                        <p className='list-paragraph-style'>Darlene Robertson</p>
                        <p className='text-[#1A191E80] text-[14px] font-[500]'>Dog Trainer</p>
                    </div>
                </div>
                <div className='border-[2px] p-[32px] rounded-[10px] w-[100%] h-[100%] '>
                    <Star src={"/image/rating.png"} width={116} height={20} alt='star' />
                    <h1 className='Testimonials-h-text pt-[8px] pb-[16px]'>
                    Etiam accumsan porta neque eros
                    </h1>
                    <p className='pb-[24px] Testimonials-text'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                    <div>
                        <p className='list-paragraph-style'>Dianne Russell</p>
                        <p className='text-[#1A191E80] text-[14px] font-[500]'>Medical Assistant</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
