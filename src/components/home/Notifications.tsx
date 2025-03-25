import React from 'react'
import Image from 'next/image'
export default function Notifications() {
    return (
        <section className='pb-[150px] pt-[30px]'>
            <div className='containers '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-[140px] md:gap-[100px] gap-[50px]'>
                    <div>
                        <p className='paragraph-style'>Notifications</p>
                        <h1 className='font-medium dm-sans text-[64px] leading-[1.1]'>Stay notified</h1>
                        <p className='paragraph-style pt-[16px] pb-[16px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className="flex gap-2 pt-5">
                            <span>
                                <i className="fa-solid fa-check bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[26px] h-[26px] text-center p-[5px]"></i>
                            </span>
                            <h3 className="list-paragraph-style">Malesuada Ipsum</h3>
                        </div>
                        <div className="flex gap-2 pt-5">
                            <span>
                                <i className="fa-solid fa-check bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[26px] h-[26px] text-center p-[5px]"></i>
                            </span>
                            <h3 className="list-paragraph-style">Vestibulum</h3>
                        </div>
                        <div className="flex gap-2 pt-5">
                            <span>
                                <i className="fa-solid fa-check bg-[#E8F2EE] text-[#5BB5A2] rounded-[50px] w-[26px] h-[26px] text-center p-[5px]"></i>
                            </span>
                            <h3 className="list-paragraph-style">Parturient Lorem</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="bg-[#F8F8F8] py-4 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image src={"/image/app-icon.png"} alt="Google Pay" width={50} height={50}/>
                                    <div className="text-start">
                                        <h2>Banko.</h2>
                                        <p className="font-medium text-[16px]">You payment of 49€ has been processed!</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div>
                            <div className="bg-[#F8F8F8] py-4 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image src={"/image/app-icon.png"} alt="Google Pay" width={50} height={50}/>
                                    <div className="text-start">
                                        <h2>Banko.</h2>
                                        <p className="font-medium text-[16px]">You payment of 49€ has been processed!</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div>
                            <div className="bg-[#F8F8F8] py-4 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image src={"/image/app-icon.png"} alt="Google Pay" width={50} height={50}/>
                                    <div className="text-start">
                                        <h2>Banko.</h2>
                                        <p className="font-medium text-[16px]">You payment of 49€ has been processed!</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div>
                            <div className="bg-[#F8F8F8] py-4 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image src={"/image/app-icon.png"} alt="Google Pay" width={50} height={50}/>
                                    <div className="text-start">
                                        <h2>Banko.</h2>
                                        <p className="font-medium text-[16px]">You payment of 49€ has been processed!</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div>
                            <div className="bg-[#F8F8F8] py-4 px-4 rounded shadow mb-5 ">
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-[20px]'>
                                        <Image src={"/image/app-icon.png"} alt="Google Pay" width={50} height={50}/>
                                    <div className="text-start">
                                        <h2>Banko.</h2>
                                        <p className="font-medium text-[16px]">You payment of 49€ has been processed!</p>
                                    </div>
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
