import React from 'react'
import { motion } from 'framer-motion'

// comps imports
import Selector from './Selector'

export default function Showcase() {
  return (
    <section id='showcase'>
        <div className='lg:w-[70%] w-[90%] m-auto lg:h-[90vh] h-[80vh] flex items-center'>
            <motion.div
                initial={{scale:0, opacity:0}}
                whileInView={{scale:1, opacity:1}}
                transition={{type:"spring", delay:0.3}}
            >
                <h2
                    className='lg:text-6xl leading-10 text-4xl font-[600] capitalize text-center my-5'
                >Find your ideal property with <br /> ngoemah</h2>
                <p className='lg:text-lg text-sm text-center '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni l
                    abore aut sunt incidunt distinctio? Reiciendis, ipsa assumenda fuga
                     quaerat velit cupiditate rem voluptate molestiae qui! Voluptas, itaque aspernatur, illo provid.
                </p>
                <Selector/>
            </motion.div>
        </div>
    </section>
  )
}
