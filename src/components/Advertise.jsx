import React from 'react'

const Advertise = () => {
  return (
    <div className='w-full p-2 h-auto md:h-[45vh]'>
      <h2 className='text-center mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold mb-5'>
        Why you'll love GoFood
      </h2>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-evenly'>
        <div className='w-[90%] md:w-[30%] lg:w-[23%] flex flex-col items-center justify-center mb-8 md:mb-0'>
          <img className='w-[80px] md:w-[100px] h-[80px] md:h-[100px]' src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo1.svg" alt="" />
          <h2 className='text-xl md:text-2xl text-black font-semibold mt-4 text-center'>
            Something for everyone
          </h2>
          <p className='text-black text-sm md:text-lg text-center'>
            We've got every meal covered and more: snacks, alcohol, dessert, paper towels...
          </p>
        </div>
        <div className='w-[90%] md:w-[30%] lg:w-[23%] flex flex-col items-center justify-center mb-8 md:mb-0'>
          <img className='w-[80px] md:w-[100px] h-[80px] md:h-[100px]' src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo2.svg" alt="" />
          <h2 className='text-xl md:text-2xl text-black font-semibold mt-4 text-center'>
            Delivery or pickup
          </h2>
          <p className='text-black text-sm md:text-lg text-center'>
            Sit back and relax, have us deliver to you or skip the line with pickup.
          </p>
        </div>
        <div className='w-[90%] md:w-[30%] lg:w-[23%] flex flex-col items-center justify-center'>
          <img className='w-[80px] md:w-[100px] h-[80px] md:h-[100px]' src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo3.svg" alt="" />
          <h2 className='text-xl md:text-2xl text-black font-semibold mt-4 text-center'>
            Save with Grubhub+
          </h2>
          <p className='text-black text-sm md:text-lg text-center'>
            Join Grubhub+ and get unlimited $0 delivery fees, exclusive offers, and more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Advertise
