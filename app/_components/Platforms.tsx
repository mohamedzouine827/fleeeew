import React from 'react'

export default function Platforms() {
  return (
    <div className=" px-24 py-28 flex-col justify-start items-center gap-12 flex">
    <div className="flex-col justify-start items-center gap-6 flex">
        <div className="text-black text-4xl font-medium leading-10">Supported Platforms</div>
        <div className="text-slate-600 text-xl font-medium leading-7">Check Our Supported platforms that you can upload your videos to it.</div>
    </div>
    <div className="justify-start items-start gap-2.5  flex">
        <div className="w-[279px] h-[64px] px-6 py-4 rounded-[10px] border border-black justify-center items-center gap-4 flex">
            <div className="w-8 h-8 bg-[#d9d9d9] rounded-[27px]" />
            <div className="text-black text-xl font-medium leading-loose">Tik Tok</div>
        </div>
        <div className="w-[279px] h-[64px] px-6 py-4 rounded-[10px] border border-black justify-center items-center gap-4 flex">
            <div className="w-8 h-8 bg-[#d9d9d9] rounded-[27px]" />
            <div className="text-black text-xl font-medium leading-loose">Instagram Reels</div>
        </div>
        <div className="w-[279px] h-[64px] px-6 py-4 rounded-[10px] border border-black justify-center items-center gap-4 flex">
            <div className="w-8 h-8 bg-[#d9d9d9] rounded-[27px]" />
            <div className="text-black text-xl font-medium leading-loose">Youtube Shorts</div>
        </div>
    </div>
</div>
  )
}
