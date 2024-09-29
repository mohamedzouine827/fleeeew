import React from 'react'
import FormField from './FormField'
import PlatformChoise from './PlatformChoise'

export default function UploadForm() {
  return (
    <section className='px-[96px] py-[112px] flex flex-col gap-12'>
        <h1 className='text-center text-[32px] leading-[40px] font-medium'>
        Set Up for your video
        </h1>
        <div className='flex flex-col gap-[24px]'>
            <FormField title='Title' placeholder='Please enter your title for video' inputType='text'/>
            <FormField title='HashTags' placeholder='tags, like, this' inputType='tags'/>
            <PlatformChoise/>
        </div>
    </section>
  )
}
