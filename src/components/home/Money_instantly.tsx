import React from 'react'
import Image from 'next/image'
import Image1 from 'next/image'
import Image2 from 'next/image'
import Image3 from 'next/image'
import Image4 from 'next/image'
import Image5 from 'next/image'
import Image6 from 'next/image'
export default function Money_instantly() {
    return (
        <section className='bg-[#E8F2EE] pt-[128px]'>
            <div className='containers '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-[140px] md:gap-[100px] gap-[50px]'>
                    <div>
                        <h1 className='font-medium dm-sans text-[64px] leading-[1.1]'>Send & receive<br /> money instantly</h1>
                        <p className='paragraph-style pt-[16px] pb-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        <div className="flex gap-2 pt-5">
                            <span>
                                <i className="fa-solid fa-check bg-[#5BB5A2] text-white rounded-[50px] w-[26px] h-[26px] text-center p-[5px]"></i>
                            </span>
                            <h3 className="list-paragraph-style">Malesuada Ipsum</h3>
                        </div>
                        <div className="flex gap-2 pt-5">
                            <span>
                                <i className="fa-solid fa-check bg-[#5BB5A2] text-white rounded-[50px] w-[26px] h-[26px] text-center p-[5px]"></i>
                            </span>
                            <h3 className="list-paragraph-style">Vestibulum</h3>
                        </div>
                        <div className="flex gap-2 pt-5">
                            <span>
                                <i className="fa-solid fa-check bg-[#5BB5A2] text-white rounded-[50px] w-[26px] h-[26px] text-center p-[5px]"></i>
                            </span>
                            <h3 className="list-paragraph-style">Parturient Lorem</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="bg-white py-2 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image src={"/image/badge.png"} 
                                        width={50} height={50} alt="Google Pay" />
                                    <div className="text-start">
                                        <h2>Apple</h2>
                                        <p className="text-[#1A191E80]">Shopping</p>
                                    </div>
                                    </div>
                                    <div className="">
                                        <p>-999€</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div className="bg-white py-2 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image1 src={"/image/badge.png"} alt="Google Pay" width={50} height={50}/>
                                    <div className="text-start">
                                        <h2>Amazon</h2>
                                        <p className="text-[#1A191E80]">Electronics</p>
                                    </div>
                                    </div>
                                    <div className="">
                                        <p>-49€</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div className="bg-white py-2 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image2 src={"/image/badge.png" }alt="Google Pay" width={50} height={50} />
                                        
                                    <div className="text-start">
                                        <h2>Twitter</h2>
                                        <p className="text-[#1A191E80]">Ads</p>
                                    </div>
                                    </div>
                                    <div className="">
                                        <p>-29€</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div className="bg-white py-2 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image3 src={"/image/badge.png"} alt="Google Pay" width={50} height={50}/>
                                    <div className="text-start">
                                        <h2>Microsoft</h2>
                                        <p className="text-[#1A191E80]">Office Suite</p>
                                    </div>
                                    </div>
                                    <div className="">
                                        <p>-149€</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div className="bg-white py-2 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image4 src={"/image/badge.png"} alt="Google Pay" width={50} height={50}/>
                                    <div className="text-start">
                                        <h2>Dropbox</h2>
                                        <p className="text-[#1A191E80]">Cloud</p>
                                    </div>
                                    </div>
                                    <div className="">
                                        <p>-14€</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div className="bg-white py-2 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image5 src={"/image/badge.png"} alt="Google Pay" width={50} height={50}/>
                                    <div className="text-start">
                                        <h2>Paypal</h2>
                                        <p className="text-[#1A191E80]">Shopping</p>
                                    </div>
                                    </div>
                                    <div className="">
                                        <p>-200€</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div className="bg-white py-2 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image6 src={"/image/badge.png"} alt="Google Pay" width={50} height={50}/>
                                    <div className="text-start">
                                        <h2>Apple</h2>
                                        <p className="text-[#1A191E80]">Shopping</p>
                                    </div>
                                    </div>
                                    <div className="">
                                        <p>-799$</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
