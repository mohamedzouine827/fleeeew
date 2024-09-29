import React from 'react'

export default function HeroSection() {
  return (
    <section className='py-[112px] px-[96px] flex flex-col justify-center items-center gap-[48px]'>
        <div className='max-w-[1071px] flex flex-col gap-[24px]'>
            <h1 className='text-[60px] leading-[72px] font-medium -tracking-[2px] text-black'>
            Upload Once, Publish Everywhere
            </h1>
            <h2 className='text-center max-w-[912px] text-[20px] leading-[30px] font-medium text-[#475569]'>
            Effortlessly schedule and upload your videos to multiple platforms at the same time. Maximize your reach with just one click.
            </h2>
        </div>
        <div className='flex flex-row gap-[24px]'>
            <button className='w-[139px] px-[24px] py-[12px] text-[16px] leading-[24px] hover:bg-[#F43F5E] transition-colors duration-150 ease-in-out bg-[#E11D48] text-[#FEFCE8] font-semibold rounded-[5px]'>
                Get Started
            </button>
            <button className='w-[139px] px-[24px] py-[12px] text-[16px] leading-[24px] border text-[#3C020A] border-[#4C0519] transition-colors duration-150 ease-in-out  font-semibold rounded-[5px]'>
                Platforms
            </button>
        </div>
    </section>
     
  )
}
