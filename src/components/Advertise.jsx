import React from 'react'

const Advertise = () => {
  return (
    <div className='w-full  p-[1px] h-[45vh]'>
        <h2 className='text-center mt-6 text-4xl font-semibold mb-5'>Why you'll love GoFood</h2>
        <div className='flex items-center justify-evenly'>
        <div className=' w-[23%] flex flex-col items-center justify-center'>
            <img className='w-[100px] h-[100x]' src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo1.svg" alt="" />
             <h2 className='text-2xl text-black font-semibold mt-4'>Something for everyone</h2>
             <p className='text-black text-lg text-center'>We've got every meal covered and more: snacks, alcohol, dessert, paper towels...</p>
        </div>
        <div className=' w-[23%] flex flex-col items-center justify-center'>
            <img className='w-[100px] h-[100x]' src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo2.svg" alt="" />
            <h2 className='text-2xl text-black font-semibold mt-4'>Delivery or pickup</h2>
            <p className='text-black text-lg text-center'>Sit back and relax, have us deliver to you or skip the line with pickup.</p>
        </div>
        <div className=' w-[23%] flex flex-col items-center justify-center'>
            <img className='w-[100px] h-[100x]' src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo3.svg" alt="" />
            <h2 className='text-2xl text-black font-semibold mt-4'>Save with Grubhub+</h2>
            <p className='text-black text-lg text-center'>Join Grubhub+ and get unlimited $0 delivery fees, exclusive offers, and more.</p>
        </div>
        </div>
    </div>
  )
}

export default Advertise