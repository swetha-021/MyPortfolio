import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='bg-[#000]'>
      <div className='w-11/12 max-w-3xl lg:text-left mx-auto h-screen flex flex-col items-center justify-center gap-4 relative '>
        
        {/* The main heading 'Software Engineer' will stay centered */}
        <div className="hidden lg:flex justify-center mt-20 -mb-13 ">
        <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-7xl lg:text-[170px] xl:text-[130px] font-Ovo whitespace-nowrap leading-[1.2]
                  bg-gradient-to-r from-[#D1EEFE99] via-[#3197bc99] to-[#D1EEFE99]
                  bg-clip-text text-transparent opacity-40"
      >
        Software Engineer
      </motion.h1>
      </div>


        {/* This is the new flex container for the image and the rest of the text */}
        <div className='flex flex-col lg:flex-row items-center justify-between'>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <Image src={assets.profile_img} alt='Swetha' className='w-[430px] max-w-xl rounded-lg hidden lg:block'/>
          </motion.div>

          {/* Text Content */}
          <div className='flex flex-col items-center lg:items-start gap-4 w-[600px] lg:w-[700px]'>

            <motion.h3
              initial={{y: -20, opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:0.6, delay:0.3}}
              className='flex items-end gap-2 text-2xl mb-1 mt-2 font-Ovo text-center lg:text-left text-white'>
              Hi, I'm Swetha!
            </motion.h3>

            <motion.p
              initial={{y: -20, opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.6, delay:0.7}}
              className='w-10/12 font-Ovo mt-5 text-xl lg:text-[15px] mx-auto lg:mx-0 lg:text-left text-white'>
              I'm a passionate software engineer open to relocation and actively seeking full-time opportunities. I am authorized to work in the U.S. and am eligible for CPT during studies and OPT/OPT-STEM for up to 3 years post-graduation.
            </motion.p>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
              <motion.a
                initial={{y: 30, opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.6, delay:1}}
                href="#contact" className='px-8 py-2 border border-black rounded-full bg-[#D1EEFE] bg-gradient-to-r from-[#D1EEFE] to-[#3197bc] text-black flex items-center gap-2'>
                contact me <Image src={assets.right_arrow_bold} alt='' className='w-4'/>
              </motion.a>
              
              <motion.a
                initial={{y: 30, opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.6, delay:1.2}}
                href="/Swetha_Resume.pdf" download className='px-8 py-2 border rounded-full border-gray-500 flex items-center gap-2 text-[#D1EEFE]'>
                My resume <Image src={assets.download_icon} alt='' className='w-5'/>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;