import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import {motion} from 'motion/react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5b444226-be78-49ea-9924-4ccdf136d0e0");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };



  return (
    <div className='bg-[#EAE1D2]'>
<motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[#EAE1D2] bg-no-repeat bg-center bg-[length:90%_auto]'>
      
      <motion.h2 
        initial={{y:-20, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5, delay:0.5}}
      
      className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>

      <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
      
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-[15px]'>
        Let’s connect! Feel free to reach out if you’d like to chat or work together.
      </motion.p>

      <motion.form
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.9}}
      
      onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
            <motion.input
            initial={{x:-50, opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.6, delay:0.9}}
            type="text" placeholder='Enter your name' required 
            className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
            
            <motion.input
            initial={{x:50, opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.6, delay:1}}
            type="email" placeholder='Enter your email' required 
            className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
        </div>
        <motion.textarea
        initial={{y:100, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6, delay:1.1}}
        
        rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></motion.textarea>
        
        <motion.button
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer -mt-3'>
            Submit now
            <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>

    </motion.div>
    </div>
    
  )
}

export default Contact