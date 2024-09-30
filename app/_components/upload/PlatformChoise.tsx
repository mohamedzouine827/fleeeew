import React from 'react'

export default function PlatformChoise() {
  return (
    <div className=" flex-col justify-center items-start gap-2 flex">
    <div className="justify-start items-center gap-2 flex">
        <div className="text-slate-800 text-xl font-medium  leading-loose">Platforms</div>
        <div className="text-slate-400 text-sm font-medium  leading-snug">(please select the platform you want to upload your video to it)</div>
    </div>
    <div className="justify-start items-start gap-4 flex">
        <div className="px-6 py-4 cursor-pointer rounded-[10px] border border-slate-400 justify-start items-center gap-2 flex">
            <div className="w-6 h-6 bg-[#d9d9d9] rounded-[17px]" />
            <div className="text-center text-slate-600 text-base font-normal  leading-normal">Instagram</div>
        </div>
        <div className="px-6 py-4 cursor-pointer  rounded-[10px] border border-slate-400 justify-start items-center gap-2 flex">
            <div className="w-6 h-6 bg-[#d9d9d9] rounded-[17px]" />
            <div className="text-center text-slate-600 text-base font-normal  leading-normal">Tik Tok</div>
        </div>
        <div className="px-6 py-4 cursor-pointer rounded-[10px] border border-slate-400 justify-start items-center gap-2 flex">
            <div className="w-6 h-6 bg-[#d9d9d9] rounded-[17px]" />
            <div className="text-center text-slate-600 text-base font-normal  leading-normal">Youtube</div>
        </div>
    </div>
</div>
  )
}
