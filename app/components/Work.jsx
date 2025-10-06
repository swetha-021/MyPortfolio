import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const Work = () => {
    return (
    <div className='bg-[#000]'>
 <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    
    id='work' className='w-full px-[12%] py-10 scroll-mt-10'>
       
        <motion.h2 
        initial={{y: -20, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5, delay:0.5}}
        className='text-center text-5xl font-Ovo text-[#D1EEFE]'>My Works</motion.h2>

        <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 font-Ovo text-[15px] text-white'>
        These projects capture my journey in building software. From small ideas to complete applications, each one has helped me learn and improve.
        </motion.p>

        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.9}}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-5 '>
            {workData.map((project, index)=>(
                <motion.div
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                key={index} style={{backgroundImage:`url(${project.bgImage})`}} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>
                    <div className='bg-[#44b1d8] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-white'>{project.description}</p>
                        </div>

                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-white transition'>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                                <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                            </a>
                        </div>
                        
                    </div>
                </motion.div>
            ))}
        </motion.div>

        <motion.a
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        href="https://github.com/swetha-021" target="_blank" className='w-max flex items-center justify-center gap-2 text-black border-[0.5px] bg-[#D1EEFE] bg-gradient-to-r from-[#D1EEFE] to-[#3197bc] rounded-full py-3 px-10 mx-auto my-5 duration-500 bg-black'>
            Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
        </motion.a>

    </motion.div>
    </div>
   
    )

}

export default Work