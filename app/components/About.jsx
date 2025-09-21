// import { assets, infoList, toolsData } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'
// import {motion} from 'motion/react'

// const About = () => {
//   return (
//     <div className='bg-[#EAE1D2]'>
//         <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-10'
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1}}
//     >
        
//         <motion.h2 className='text-center text-5xl font-Ovo'
//         initial={{y: -20, opacity:0}}
//         whileInView={{y:0,opacity:1}}
//         transition={{duration:0.5, delay:0.5}}
//         >About me</motion.h2>

//         {/* <motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 my-6'
//         initial={{opacity:0}}
//         whileInView={{opacity:1}}
//         transition={{duration:0.8}}  
//         >

//             <motion.div 
//             initial={{opacity:0}}
//             whileInView={{opacity:1}}
//             transition={{duration:0.6, delay:0.8}}
            
            
//             className='flex-1'>
//                     <motion.p
//                        initial={{opacity:0}}
//                        whileInView={{opacity:1}}
//                        transition={{duration:0.5, delay:0.7}}
//                        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-[15px]'>
//                         I build reliable and user-friendly full-stack solutions. My work is fueled by curiosity and a passion for creating innovative, collaborative technologies. I'm always exploring new areas in tech to grow as a developer!
//                     </motion.p>
//                 <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6'
//                 initial={{opacity:0}}
//                 whileInView={{opacity:1}}
//                 transition={{duration:0.8, delay:1}}
//                 >
//                     {infoList.map(({icon,iconDark,title,description},index)=>(
//                         <motion.li  key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gradient-to-b hover:from-[#CC8358] hover:to-[#EAE1D2] hover:-translate-y-1 duration-500 hover:shadow-black'
//                         whileHover={{scale: 1.05}}
//                         >
//                             <Image className='w-7 mt-3' src={icon} alt={title}/>
//                             <h3 className='my-4 font-semibold '>{title}</h3>
//                             <p className=' text-sm'>{description}</p>
//                         </motion.li>
                        
//                     ))}
//                 </motion.ul>
 
//                 <motion.h4 
//                 initial={{y: 20, opacity:0}}
//                 whileInView={{y:0,opacity:1}}
//                 transition={{duration:0.8, delay:0.5}}
                
//                 className='my-6 text-gray-700 font-Ovo'>Tools I use</motion.h4>

//                 <motion.ul
//                 initial={{pacity:0}}
//                 whileInView={{opacity:1}}
//                 transition={{duration:0.6, delay:1.0}}
                
//                 className='flex items-center gap-3 sm:gap-5'>
//                     {toolsData.map((tool,index)=>(
//                         <motion.li 
//                         whileHover={{scale:1.1}}
//                         className='flex items-center justify-center w-12 sm:w-10 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
//                             <Image src={tool} alt="tool" className='w-5 sm:w-7'/>
//                         </motion.li>
//                     ))}
//                 </motion.ul>
//             </motion.div>

//             <motion.div className='w-80 sm:w-90 rounded-3xl max-w-none -mt-40 -mr-22 hidden lg:block'
//             initial={{opacity:0, scale:0.9}}
//             whileInView={{opacity:1, scale:1}}
//             transition={{duration:0.6}}
//             >
//                 <Image src={assets.swetha} alt='user' className=" rounded-3xl h-[400px] w-[390px]" />
//             </motion.div>

//         </motion.div> */}
    

    
    
//     </motion.div>
//     </div>

    



//   )
// }

// export default About


import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div className="bg-[#EAE1D2]">
      <motion.div
        id="about"
        className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-Ovo"
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
              className="text-center sm:text-left max-w-full sm:max-w-2xl mx-auto  mb-10 font-Ovo text-[15px] px-2"
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
                  className="border border-gray-400 rounded-lg px-6 py-6 
                             cursor-pointer hover:bg-gradient-to-b 
                             hover:from-[#CC8358] hover:to-[#EAE1D2] 
                             hover:-translate-y-1 duration-500 hover:shadow-black 
                             text-center sm:text-left"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    className="w-7 mt-3 mx-auto sm:mx-0"
                    src={icon}
                    alt={title}
                  />
                  <h3 className="my-4 font-semibold">{title}</h3>
                  <p className="text-sm break-words">{description}</p>
                </motion.li>
              ))}
            </motion.ul>

            {/* Tools Section */}
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="my-6 text-gray-700 font-Ovo"
            >
              Tools I use
            </motion.h4>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center gap-3 sm:gap-5"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 sm:w-10 aspect-square 
                             border border-gray-400 rounded-lg cursor-pointer 
                             hover:-translate-y-1 duration-500"
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

          {/* Image on large screens only */}
          <motion.div
            className="w-72 sm:w-90 rounded-3xl hidden lg:block -mr-20 mb-40"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={assets.swetha}
              alt="user"
              className="rounded-3xl h-[400px] w-[400px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
