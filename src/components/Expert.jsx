import React from 'react'
import { motion } from "framer-motion"

// comps imports
import ContactCard from './ContactCard'

function Expert() {
  return (
    <section id="expert">
        <div className='w-[90%] m-auto'>
            <div className='lg:my-[100px] my-16  flex flex-col lg:flex-row lg:gap-0 gap-10 items-center justify-between'>
                {/* image */}
                <motion.div 
                    initial={{x:-100, opacity:0, scale:0}}
                    whileInView={{x:1, opacity:1, scale:1}}
                    transition={{type:"spring", delay:0.3}}
                    className='lg:w-[45%] h-full'
                >
                    <ContactCard/>
                </motion.div>

                {/* text */}
                <div className='lg:w-[45%] text-center lg:text-left'>
                    <motion.h2 
                        initial={{x:100, opacity:0}}
                        whileInView={{x:1, opacity:1}}
                        transition={{type:"spring", delay:0.3}}
                        className='lg:text-5xl leading-[50px] text-3xl font-[600] capitalize my-5'
                    >Expert guidance every step of the way</motion.h2>
                    <motion.p 
                        initial={{x:100, opacity:0}}
                        whileInView={{x:1, opacity:1}}
                        transition={{type:"spring", delay:0.3}}
                        className='lg:text-lg mb-5'
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quis dolorum placeat molestiae consequuntur ducimus modi!
                         Quis dolorum placeat molestiae consequuntur ducimus modi!
                    </motion.p>
                    <motion.button
                        initial={{x:100, opacity:0}}
                        whileInView={{x:1, opacity:1}}
                        transition={{type:"spring", delay:0.3}}
                        className="bg-blue-500 px-5 py-2 rounded  text-white hover:bg-blue-400  transition-all duration-300" 
                        type='button'
                    >Contact Sales</motion.button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Expert