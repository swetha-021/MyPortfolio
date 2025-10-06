import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div className="bg-[#000]">
      <motion.div
        id="about"
        className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-Ovo text-[#D1EEFE] mb-5"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          About me
        </motion.h2>

        <motion.div
          className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text + Info Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-1 w-full"
          >
            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center sm:text-left max-w-full sm:max-w-2xl mx-auto  mb-10 font-Ovo text-[15px] px-2 text-white"
            >
              I build reliable and user-friendly full-stack solutions. My work is
              fueled by curiosity and a passion for creating innovative,
              collaborative technologies. I'm always exploring new areas in tech
              to grow as a developer!
            </motion.p>

            {/* Info Cards */}
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
           {infoList.map(({ icon, title, description }, index) => (
  <motion.li
    key={index}
    className="group border border-[#D1EEFE] rounded-lg px-6 py-6 
               cursor-pointer hover:bg-gradient-to-b 
               hover:from-[#D1EEFE] hover:to-[#3197bc] 
               hover:-translate-y-1 duration-500 hover:shadow-black 
               text-center sm:text-left"
    whileHover={{ scale: 1.05 }}
  >
    <Image
      className="w-7 mt-3 mx-auto sm:mx-0"
      src={icon}
      alt={title}
    />
    <h3 className="my-4 font-semibold text-[#D1EEFE] group-hover:text-black transition-colors duration-100">
      {title}
    </h3>
    <p className="text-sm break-words text-white group-hover:text-black transition-colors duration-100">
      {description}
    </p>
  </motion.li>
))}

            </motion.ul>

            {/* Tools Section */}
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="my-6 text-[#D1EEFE] font-Ovo"
            >
              Tools I use
            </motion.h4>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center gap-3 sm:gap-5 "
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 sm:w-10 aspect-square 
                             border border-[#D1EEFE] text-white rounded-lg cursor-pointer 
                             hover:-translate-y-1 duration-500 "
                  key={index}
                >
                  <Image
                    src={tool}
                    alt="tool"
                    className="w-5 sm:w-7"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="relative w-72 sm:w-90 h-[300px]  hidden lg:block -mr-20 mb-40 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={assets.swetha}
              alt="user"
              fill
              className="object-cover object-top"
            />
          </motion.div>


        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
