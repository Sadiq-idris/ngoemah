import React from 'react'
import {motion} from "framer-motion"



function Card({src, title, body, Icon, price, loc}) {
  return (
    <motion.div
      initial={{scale:0, opacity:0}}
      whileInView={{scale:1, opacity:1}}
      transition={{type:"spring", delay:0.3}}
      style={{
        backgroundImage:`url(${src})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        borderRadius:"12px",
        minHeight:"450px",
        padding:"15px",
        display:"flex",
        alignItems:"end",
        position:"relative",
        flexShrink:"0",
        flexGrow:"0",
      }}
      className='-z-20 lg:basis-[400px] basis-[100%]'
    >
      {Icon && <div className='bg-white p-2 text-2xl rounded-full absolute top-2 right-2'>
        {Icon}
      </div>}
      <div className='bg-white p-3 rounded-xl w-full'>
          <h3 className='text-xl font-bold'>{ title }</h3>
          <h2 className='text-2xl font-[500] capitalize  text-blue-500'>{price}</h2>
          <p className='text-gray-600 flex items-center'><span className='text-blue-500'>{loc}</span> {body}</p>
      </div>
    </motion.div>
  )
}

export default Card