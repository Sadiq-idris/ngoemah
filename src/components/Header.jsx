import { motion } from "framer-motion";
import React, { useState } from "react";
import {RxHamburgerMenu } from "react-icons/rx";
import {BiLogoXing} from "react-icons/bi";
import { IoClose } from "react-icons/io5";



const Header = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    
    return (
        <header className="lg:absolute fixed top-0 right-0 left-0 w-full">
            <div className="w-[90%] m-auto flex justify-between lg:justify-normal items-center gap-8  py-5">
                <h1 className="font-bold text-xl mb-2 flex items-center"><span className="text-3xl text-blue-500"><BiLogoXing/></span>Ngoemah</h1>
                <div className={`lg:flex lg:flex-row flex-col lg:justify-between lg:items-center
                 lg:w-full absolute lg:static bg-white lg:bg-transparent h-[100vh] lg:h-[100%] top-0 bottom-0 w-[70%] pt-8
                 transition-all duration-500 lg:opacity-100 lg:right-0 z-40
                  px-8 lg:p-0 ${!isOpen?"hidden opacity-0 right-[-200px]":"flex opacity-100 right-0"}`}>
                    <ul className="flex lg:flex-row flex-col gap-6">
                        <motion.li 
                        whileHover={{
                            color:"rgb(59 130 246)",
                            scale:1.1,
                        }} 
                        >
                            <a href="" className="text-blue-500">Home</a>
                        </motion.li>
                        <motion.li
                        whileHover={{
                            color:"rgb(59 130 246)",
                            scale:1.1,
                        }}
                        >
                            <a href="">About us</a>
                        </motion.li>
                        <motion.li
                        whileHover={{
                            color:"rgb(59 130 246)",
                            scale:1.1,
                        }}>
                            <a href="">Product</a>
                        </motion.li>
                        <motion.li
                        whileHover={{
                            color:"rgb(59 130 246)",
                            scale:1.1,
                        }}>
                            <a href="">Mortage</a>
                        </motion.li>
                        <motion.li
                        whileHover={{
                            color:"rgb(59 130 246)",
                            scale:1.1,
                        }}>
                            <a href="">Services</a>
                        </motion.li>
                    </ul>

                    <div className="flex lg:mt-0 mt-5 flex-wrap  gap-5">
                        <button 
                        type="buttom"
                        className="bg-white px-3 py-2 rounded font-bold text-black hover:bg-white/50 transition-all hover:scale-[1.08] duration-300"
                        >Sign in</button>
                        <button 
                        type="buttom" 
                        className="bg-blue-500 px-3 py-2 rounded font-bold text-white hover:bg-blue-400 hover:scale-[1.08] transition-all duration-300"
                        >Sign up</button>
                    </div>
                </div>
                <div className="text-3xl cursor-pointer lg:hidden z-50" onClick={()=>{ 
                    setIsOpen((prev)=>!prev)
                }}>
                    { !isOpen? <RxHamburgerMenu/>: <IoClose/>}
                </div>
            </div>
        </header>
    )
}

export default Header