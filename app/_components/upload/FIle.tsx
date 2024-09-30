import Image from 'next/image'
import React from 'react'

import Upload from "@/public/upload.svg"

export default function File() {
  return (
    <div className=" flex-col justify-center items-start gap-2 flex">
    <div className="justify-start items-center gap-2 flex">
        <div className="text-slate-800 text-xl font-medium  leading-loose">Upload Your Video</div>
    </div>
    <div className="justify-start items-start gap-4 flex">
        <div className="px-6 py-4 cursor-pointer rounded-[10px] border w-[438px] h-[189px] border-slate-400 justify-center items-center gap-1 flex flex-col">
         <Image src={Upload.src} alt='fleeeew logo' height={48} width={48}/>
            <div className="text-center text-slate-600 text-[12px] leading-[24px] font-normal  ">Upload Your video</div>
            
        </div>

    </div>
</div>
  )
}
