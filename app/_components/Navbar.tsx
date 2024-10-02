"use client"
import Image from 'next/image'
import React from 'react'
import Logo from "@/public/Logo.svg"
import { usePathname, useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'


function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleGetStarted = async () => {
    if (status === 'authenticated') {
      router.push('/upload');
    } else {
      router.push('/signin');
    }
  };

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
        {pathname === '/' && (
          <button
            onClick={handleGetStarted}
            className='px-[24px] py-[12px] text-[16px] leading-[24px] hover:bg-[#F43F5E] transition-colors duration-150 ease-in-out bg-[#E11D48] text-[#FEFCE8] font-semibold rounded-[5px]'
          >
            {status === 'authenticated' ? 'Go to Upload' : 'Get Started'}
          </button>
        )}
        {status === 'authenticated' && (
          <button
            onClick={() => signOut()}
            className='px-[24px] py-[12px] text-[16px] leading-[24px] bg-gray-200 hover:bg-gray-300 transition-colors duration-150 ease-in-out text-gray-800 font-semibold rounded-[5px]'
          >
            Sign Out
          </button>
        )}
      </div>
    </section>
  )
}

export default Navbar