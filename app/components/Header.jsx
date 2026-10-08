import { assets } from '@/assets/assets'
import { TextShimmer } from '@/components/core/text-shimmer'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div id="top" className="relative h-svh min-h-svh overflow-hidden bg-[#ffebac]">
      <div className="mx-auto flex h-full w-11/12 max-w-6xl flex-col pt-20 pb-10">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden overflow-visible justify-center lg:flex"
        >
          <TextShimmer
            as="h1"
            duration={4.5}
            repeat={1}
            className="overflow-visible whitespace-nowrap pb-[0.2em] font-Ovo text-[clamp(4rem,12vw,8.5rem)] leading-none [--base-color:#950434] [--base-end-color:#2f2f34] [--base-gradient-color:#e8e8e8]"
          >
            Software Engineer
          </TextShimmer>
        </motion.div>

        <div className="mt-6 flex min-h-0 flex-1 flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:text-left">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="hidden shrink-0 lg:block"
          >
            <Image
              src={assets.profile_img}
              alt="Swetha"
              className="h-[min(48vh,22rem)] w-auto rounded-lg object-cover object-top"
            />
          </motion.div>

          <div className="flex w-full max-w-xl flex-col items-center gap-4 lg:items-start">
            <motion.h3
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-2 mb-1 flex items-end gap-2 text-center font-Ovo text-2xl text-black lg:text-left"
            >
              Hi, I&apos;m Swetha!
            </motion.h3>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-2 font-Ovo text-xl text-black lg:mx-0 lg:text-left lg:text-[15px]"
            >
              I&apos;m a passionate software engineer open to relocation and actively seeking full-time opportunities. I am authorized to work in the U.S. and am eligible for OPT/OPT-STEM for up to 3 years.
            </motion.p>

            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
              <motion.a
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-black bg-black px-8 py-2 text-[#ffebac]"
              >
                contact me <Image src={assets.right_arrow_white} alt="" className="w-4" />
              </motion.a>

              <motion.a
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                href="/Swetha_Resume.pdf"
                download
                className="flex items-center gap-2 rounded-full border border-black px-8 py-2 text-black"
              >
                My resume <Image src={assets.download_icon} alt="" className="w-5 brightness-0" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
