import React from 'react'
import { motion } from "framer-motion"

// comp import 
import Card from './Card'

// images imports
import house1 from "../assets/images/house1.jpg"
import house2 from "../assets/images/house2.jpg"
import house3 from "../assets/images/house3.jpg"

function Demand() {
  return (
    <section id="demand" className='my-14'>
        <div className='w-[90%] m-auto'>
            <motion.h2 
              initial={{x:-100, opacity:0}}
              whileInView={{x:1, opacity:1}}
              transition={{type:"spring", delay:0.3, duration:"1000ms"}}
              className='lg:text-5xl leading-10 text-3xl font-[600] capitalize text-center my-5'
            >High Demand Area</motion.h2>
            <motion.p 
              initial={{x:100, opacity:0}}
              whileInView={{x:1, opacity:1}}
              transition={{type:"spring", delay:0.3}}
              className='text-center lg:text-lg'
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem dolor officiis nulla beatae nihil?  <br /> Sunt!met consectetur adipisicing elit.
            </motion.p>
            <div className='grid lg:grid-cols-3 grid-cols-1  gap-12 my-10'>
                <Card src={house1} title="Bali" body="076 property listing" />
                <Card src={house2} title="Malang" body="346 property listing" />
                <Card src={house3} title="Yogyakarta" body="948 property listing" />
            </div>
        </div>
    </section>
  )
}

export default Demand