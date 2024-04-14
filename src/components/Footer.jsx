import React from "react";
import { motion } from "framer-motion";

// icons imports
import { BiLogoLinkedin, BiLogoTwitter, BiLogoInstagram, BiLogoFacebook, BiLogoXing } from "react-icons/bi";


const Footer = () => {
    
    return (
        <footer>
            <div className="w-[90%] lg:my-[50px] my-0 m-auto">
                <div className="flex lg:flex-row flex-col gap-5 lg:gap-0 py-5 justify-between  border-b border-gray-300">
                    <div>
                        <h1 className="font-bold text-xl mb-2 flex items-center"><span className="text-3xl text-blue-500"><BiLogoXing/></span>Ngoemah</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                            Eaque nulla perferendis ipsum. Nostrum, reiciendis maxime?
                        </p>
                        <ul className="flex gap-5 mt-6 text-blue-500">
                            <li className="text-xl p-2 bg-gray-200 rounded-full hover:scale-[1.2] transition-all duration-300">
                                <a href="#" >
                                    <BiLogoInstagram/>
                                </a>
                            </li>
                            <li className="text-xl p-2 bg-gray-200 rounded-full hover:scale-[1.2] transition-all duration-300">
                                <a href="#" >
                                    <BiLogoFacebook/>
                                </a>
                            </li>
                            <li className="text-xl p-2 bg-gray-200 rounded-full hover:scale-[1.2] transition-all duration-300">
                                <a href="#" >
                                    <BiLogoTwitter/>
                                </a>
                            </li>
                            <li className="text-xl p-2 bg-gray-200 rounded-full hover:scale-[1.2] transition-all duration-300">
                                <a href="#" >
                                    <BiLogoLinkedin/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-16">
                        <div>
                            <h2 className="text-xl font-bold mb-5">Company</h2>
                            <ul className="flex flex-col gap-6">
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
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-5">Legal</h2>
                            <ul className="flex  flex-col gap-6">
                            <motion.li 
                            whileHover={{
                                color:"rgb(59 130 246)",
                                scale:1.1,
                            }} 
                            >
                                <a href="">Privacy Policy</a>
                            </motion.li>
                            <motion.li 
                            whileHover={{
                                color:"rgb(59 130 246)",
                                scale:1.1,
                            }} 
                            >
                                <a href="">Terms Of Services </a>
                            </motion.li>
                            <motion.li 
                            whileHover={{
                                color:"rgb(59 130 246)",
                                scale:1.1,
                            }} 
                            >
                                <a href="">FAQ</a>
                            </motion.li>
                            
                        </ul>
                        </div>
                    </div>
                </div>
                <p className="text-center my-3">CopyRight&copy;2024</p>
            </div>
            
        </footer>
    )
}

export default Footer