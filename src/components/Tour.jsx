import React from 'react'
import {motion} from "framer-motion"

// assets imports
import tour from "../assets/images/tour.jpg"

function Tour() {
  return (
    <section id="tour" className=' overflow-hidden'>
        <div className='w-[90%] m-auto'>
            <div className='lg:my-[100px] my-10  flex flex-col lg:flex-row lg:gap-0 gap-10 items-center justify-between'>
                {/* text */}
                <div className='lg:w-[40%] text-center lg:text-left'>
                    <motion.h2 
                        initial={{x:-100, opacity:0}}
                        whileInView={{x:1, opacity:1}}
                        transition={{type:"spring", delay:0.3}}
                        className='lg:text-5xl lg:leading-[50px] text-3xl font-[600] capitalize my-5'
                    >virtual tours & interactive maps</motion.h2>
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
                        initial={{scale:0, opacity:0}}
                        whileInView={{scale:1, opacity:1}}
                        transition={{type:"spring"}}
                        className="bg-blue-500 px-5 py-2 rounded  text-white hover:bg-blue-400  transition-all duration-300" 
                   >Learn More</motion.button>
                </div>

                {/* image */}
                <div className='lg:w-[60%] h-full'>
                    <motion.img 
                        initial={{x:100, scale:0, opacity:0}}
                        whileInView={{x:1, scale:1, opacity:1}}
                        transition={{type:"spring", delay:0.3}}
                        src={tour} 
                        alt="house image" 
                        className='relative z-[-1] right-[-100px] rounded-tl-lg rounded-bl-lg' 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tour