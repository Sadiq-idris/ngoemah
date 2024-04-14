import React from 'react'

import { BiMap, BiSolidMessageDetail } from "react-icons/bi"

// image import
import house1 from "../assets/images/house1.jpg"
import avatar from "../assets/images/avatar.jpg"

function ContactCard() {
  return (
    <div
        style={{
            backgroundImage:`url(${house1})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            borderRadius:"10px",
            minHeight:"450px",
            padding:"15px",
            display:"flex",
            alignItems:"end",
            position:"relative",
            flexDirection:"column",
            justifyContent:"space-between",
        }}
        className='-z-10'
    >
        <div className='w-full flex justify-start'>
            <div className='bg-white p-3 rounded-xl'>
            <h3 className='text-xl font-bold'>The West Progo Regency</h3>
            <p className='text-gray-600 flex items-center'><span className='text-blue-500'><BiMap/></span> kulon progo, yogykarat</p>
            </div>
        </div>
        
        <div className='bg-white p-5 rounded-xl flex gap-2 items-start relative lg:-right-10 -bottom-10 shadow-lg'>
            <div>
                <img src={avatar} alt="profile pic" className='rounded-full w-[100px]' />
            </div>
            <div>
                <h3 className='text-xl font-bold'>Muhaim Subainto</h3>
                <p className='text-gray-600 flex items-center'>Real Estate Agent</p>
                <p className=' flex items-center'><span className='text-blue-500 mr-1'><BiMap/></span> +3094302903</p>
                <p className=' flex items-center'><span className='text-blue-500 mr-1'><BiSolidMessageDetail/></span> muhaim@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default ContactCard