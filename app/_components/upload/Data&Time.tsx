import Image from 'next/image'
import React from 'react'
import Time from "@/public/clock.svg"
import Date from "@/public/calendar.svg"

export default function DateTime() {
  return (
    <div className=" flex-col justify-center items-start gap-2 flex">
    <div className="justify-start items-center gap-2 flex">
        <div className="text-slate-800 text-xl font-medium  leading-loose">Date & Time</div>
    </div>
    <div className="justify-start items-start gap-4 flex">
        <div className="px-6 py-4 cursor-pointer rounded-[10px] border border-slate-400 justify-start items-center gap-2 flex">
            
            <div className="text-center text-slate-600 text-base font-normal  leading-normal">Date</div>
            <Image src={Date.src} alt='fleeeew logo' height={20} width={20}/>
        </div>
        <div className=" px-6 py-4 cursor-pointer  rounded-[10px] border border-slate-400 justify-start items-center gap-2 flex">
            
            <div className="text-center text-slate-600 text-base font-normal  leading-normal">Time</div>
            <Image src={Time.src} alt='fleeeew logo' height={20} width={20}/>
        </div>

    </div>
</div>
  )
}
