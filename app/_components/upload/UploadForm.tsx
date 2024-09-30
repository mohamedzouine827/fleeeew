import React from 'react'
import FormField from './FormField'
import PlatformChoise from './PlatformChoise'
import DateTime from './Data&Time'
import File from './FIle'

export default function UploadForm() {
  return (
    <section className='md:px-[96px] py-[112px] px-[16px]  flex flex-col gap-12'>
      <h1 className='text-center text-[32px] leading-[40px] font-medium'>
        Set Up for your video
      </h1>
      <div className='flex flex-col gap-[24px]'>
        <FormField title='Title' placeholder='Please enter your title for video' inputType='text' />
        <FormField title='HashTags' placeholder='tags, like, this' inputType='tags' />
        <PlatformChoise />
        <DateTime />
        <File />
      </div>
      <div className='flex justify-center items-center'>
        <button className="h-12 px-12 py-3 rounded-lg border w-[140px] jus border-slate-600 justify-center items-center gap-2.5 flex">
          <div className="text-center text-slate-600 text-base font-normal  leading-normal">Finish</div>
        </button>
      </div>
    </section>
  )
}
