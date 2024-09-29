import Image from 'next/image'
import React from 'react'
import Logo from "@/public/Logo.svg"

function Navbar() {
  return (
    <section className='flex flex-row justify-between items-center px-[60px] py-4'> 
        <Image src={Logo.src} alt='fleeeew logo' height={50.4} width={50.4}/>
        <div className='flex flex-row items-center gap-12'>
            <div className='flex flex-row gap-[32px] items-center'>
                <p className='font-semibold text-[16px] leading-[24px] cursor-pointer text-[#475569] hover:text-[#64748B] transition-all duration-150 ease-in-out'>
                    Github
                </p>
                <p className='font-semibold text-[16px] leading-[24px] cursor-pointer text-[#475569] hover:text-[#64748B] transition-all duration-150 ease-in-out'>
                    Socials
                </p>
            </div>
            <button className=' px-[24px] py-[12px] text-[16px] leading-[24px] hover:bg-[#F43F5E] transition-colors duration-150 ease-in-out bg-[#E11D48] text-[#FEFCE8] font-semibold rounded-[5px]'>
                Get Started
            </button>
        </div>
    </section>
  )
}

export default Navbar
