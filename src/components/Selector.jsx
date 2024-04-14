import React from 'react'

function Selector() {
  return (
    <div className='mt-10'>
        <div>
            <div  className='text-center flex w-[100%] justify-center cursor-pointer'>
                <span className='text-bold block rounded-tl-lg px-7 py-2 bg-blue-500 text-white'>Buy</span>
                <span className='text-bold block px-7 py-2 bg-white'>Sell</span>
                <span className='text-bold block rounded-tr-lg px-7 py-2 bg-white'>Rent</span>
            </div>
        </div>
        <div className='flex items-center justify-between bg-white rounded-lg py-3 px-5 w-full flex-wrap'>
            <div className=''>
                <strong className='block'>Location</strong>
                <select className='bg-transparent cursor-pointer'>
                    <option>gwale</option>
                    <option>tukun tawa</option>
                    <option>dan dago</option>
                </select>
            </div>
            <div className=''>
                <strong className='block'>Unit type</strong>
                <select className='bg-transparent cursor-pointer'>
                    <option>house</option>
                    <option>room</option>
                </select>
            </div>
            <div>
                <strong className='block'>Price Range</strong>
                <select className='bg-transparent cursor-pointer'>
                    <option>$10,000 - $100,000</option>
                    <option>$30,000 - $400,000</option>
                    <option>$80,000 - $2,000,000</option>
                </select>
            </div>
            <div>
                <button
                    className="bg-blue-500 w-full px-5 py-2 rounded  text-white hover:bg-blue-400  transition-all duration-300"
                >Search</button>
            </div>
        </div>
    </div>
  )
}

export default Selector