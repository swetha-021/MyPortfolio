import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#000]'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        </div>

        <div className='w-max flex items-center gap-2 mx-auto text-white'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            sprakash@binghamton.edu
        </div>


        <div className="text-center sm:flex items-center justify-around border-t border-gray-400 mx-[10%] mt-12 py-6">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/swethaprakash21"
                className="flex items-center gap-2 text-[#D1EEFE]"
            >
                <Image src={assets.linkedin} alt="LinkedIn" width={24} height={24}  />
                <span>LinkedIn</span>
            </a>

            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/swetha-021"
                className="flex items-center gap-2 text-[#D1EEFE]"
            >
                <Image src={assets.github} alt="GitHub"  width={24} height={24}  />
                <span>GitHub</span>
            </a>
        </div>






    </div>    

  )
}

export default Footer