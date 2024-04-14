import React, { useCallback } from 'react'
import {motion} from "framer-motion"
import {BiMap, BiHeart, BiChevronLeft, BiChevronRight} from "react-icons/bi"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// comps imports
import Card from './Card'

// assets imports
import property1 from "../assets/images/property1.jpg"
import property2 from "../assets/images/property2.jpg"
import property3 from "../assets/images/property3.jpeg"
import property4 from "../assets/images/property4.jpg"
import property5 from "../assets/images/property5.jpg"
import property6 from "../assets/images/property6.jpg"
import property7 from "../assets/images/property7.jpg"


function Property() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop:true, duration:20}, [Autoplay()])

    const scrollPrev = useCallback(()=>{
        if(emblaApi){
            emblaApi.scrollPrev()
        }
    }, [emblaApi])

    const scrollNext = useCallback(()=>{
        if(emblaApi){
            emblaApi.scrollNext()
        }
    }, [emblaApi])

  return (
    <section id="property" className=' overflow-hidden'>
        <div className='w-[90%] m-auto'>
            <div className='lg:my-[50px] my-16 '>
                {/* text */}
                <div className='text-center lg:text-left'>
                    <motion.h2 
                        initial={{x:-100, opacity:0}}
                        whileInView={{x:1, opacity:1}}
                        transition={{type:"spring", delay:0.3}}
                        className='lg:text-5xl leading-[50px] text-3xl font-[600] capitalize my-5'
                    >Popular Property</motion.h2>
                    <motion.p 
                        initial={{x:-100, opacity:0}}
                        whileInView={{x:1, opacity:1}}
                        transition={{type:"spring", delay:0.3}}
                        className='lg:text-lg mb-5'
                        >
                        Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
                        Quis dolorum placeat molestiae consequuntur ducimus modi!
                    </motion.p>

                    <div className='flex items-center justify-end gap-5 text-3xl mb-3 w-full'>
                        <div className='cursor-pointer' onClick={scrollPrev}>
                            <BiChevronLeft />
                        </div>
                        <div className='bg-blue-500 p-2 text-white rounded-full cursor-pointer' onClick={scrollNext}>
                            <BiChevronRight/>
                        </div>
                    </div>
                </div>

                {/* image */}
                <div className='overflow-hidden -z-20' ref={emblaRef}>
                    <div className='flex  gap-8 first:pl-5 -z-10'>
                        <Card title="The House of Abah iuang" src={property1} body="sieman, yogyakarta" Icon={<BiHeart/>} loc={<BiMap/>} price="$150,000" />
                        <Card title="The House of sadiq idris" src={property2} body="cangua, bali" Icon={<BiHeart/>} loc={<BiMap/>} price="$120,000" />
                        <Card title="The House of ahmad sadiq idris" src={property3} body="dago, Bangung" Icon={<BiHeart/>} loc={<BiMap/>} price="$150,000" />
                        <Card title="The House of ahmad sadiq idris" src={property4} body="dago, Bangung" Icon={<BiHeart/>} loc={<BiMap/>} price="$150,000" />
                        <Card title="The House of ahmad sadiq idris" src={property5} body="dago, Bangung" Icon={<BiHeart/>} loc={<BiMap/>} price="$150,000" />
                        <Card title="The House of ahmad sadiq idris" src={property6} body="dago, Bangung" Icon={<BiHeart/>} loc={<BiMap/>} price="$150,000" />
                        <Card title="The House of ahmad sadiq idris" src={property7} body="dago, Bangung" Icon={<BiHeart/>} loc={<BiMap/>} price="$150,000" />
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <button
                        className="bg-blue-500 mt-5 px-8 py-2 rounded  text-white hover:bg-blue-400  transition-all duration-300" 
                        type='button'>See More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Property