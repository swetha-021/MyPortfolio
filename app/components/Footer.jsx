import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className='bg-[#ffebac]'>
        <div className='text-center'>
            <Logo className="mx-auto h-12 w-36" align="center" />
        </div>

        <div className='w-max flex items-center gap-2 mx-auto text-black'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            sprakash@binghamton.edu
        </div>


        <div className="text-center sm:flex items-center justify-around border-t border-black/30 mx-[10%] mt-12 py-6">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/swethaprakash21"
                className="flex items-center gap-2 text-black"
            >
                <Image src={assets.linkedin} alt="LinkedIn" width={24} height={24}  />
                <span>LinkedIn</span>
            </a>

            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/swetha-021"
                className="flex items-center gap-2 text-black"
            >
                <Image src={assets.github} alt="GitHub" width={24} height={24} className="brightness-0" />
                <span>GitHub</span>
            </a>
        </div>

    </div>    

  )
}

export default Footer
