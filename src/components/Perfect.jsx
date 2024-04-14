import React from 'react'
import {motion} from "framer-motion"

// image imports
import image from "../assets/images/image-3.png"

function Perfect() {
  return (
    <section id="perfect" className=' bg-blue-500'>
        <div className='w-[90%] m-auto text-white'>
            <div className='lg:my-[0px] my-16  flex flex-col lg:flex-row lg:gap-0 gap-10 items-center justify-between'>
                {/* text */}
                <div className='lg:w-[45%] text-center lg:text-left'>
                    <motion.h2 
                        initial={{x:-100, opacity:0}}
                        whileInView={{x:1, opacity:1}}
                        transition={{type:"spring", delay:0.3}}
                        className='lg:text-6xl lg:leading-[70px] text-3xl font-[600] capitalize my-5'
                    >Find your perfect <br /> property is just a click away</motion.h2>
                    <motion.p 
                        initial={{x:-100, opacity:0}}
                        whileInView={{x:1, opacity:1}}
                        transition={{type:"spring", delay:0.3}}
                        className='lg:text-lg mb-5'
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quis dolorum placeat molestiae consequuntur ducimus modi!
                    </motion.p>
                    <motion.button
                        initial={{x:-100, opacity:0}}
                        whileInView={{x:1, opacity:1}}
                        transition={{type:"spring", delay:0.3}}
                        className="bg-white px-5 py-2 rounded  text-blue-500 hover:bg-white/80  transition-all duration-300" 
                        type='button'
                    >Contact Us</motion.button>
                </div>

                {/* image */}
                <div className='lg:w-[45%] h-full py-5'>
                    <motion.img 
                        initial={{x:100, opacity:0, scale:0}}
                        whileInView={{x:1, opacity:1, scale:1}}
                        transition={{type:"spring", delay:0.3}}
                        src={image} 
                        alt="house image" 
                        className='z-[-1] rounded-xl '
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Perfect