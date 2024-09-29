import React from 'react'

export default function CTA() {
  return (
    <div className="  px-24 py-28 flex-col justify-start items-center gap-12 flex">
    <div className="flex-col justify-start items-center gap-6 flex">
        <div className="text-black text-4xl font-medium  leading-10">Try Fleeeew Now!</div>
        <div className="text-slate-600 text-xl font-medium  leading-7">Try Fleeew now and save time scheduling your videos</div>
    </div>
    <div className="px-6 py-3 cursor-pointer rounded-[5px] justify-center items-center gap-2.5 flex hover:bg-[#F43F5E] transition-colors duration-150 ease-in-out bg-[#E11D48] text-[#FEFCE8]">
        <div className=" text-base font-semibold  leading-normal">Get Started</div>
    </div>
</div>
  )
}
