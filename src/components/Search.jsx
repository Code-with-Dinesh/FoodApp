import React from 'react'

const Search = () => {
  return (
    <> 
    
    <div className='w-full h-[70vh] bg-[url(https://images.unsplash.com/photo-1689020353604-8041221e1273?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] object-cover flex items-center justify-center'>
        
        <div className='flex items-center justify-center flex-col'>
            <h1 className='text-5xl text-white font-semibold'>Get food delivery and more</h1>
            <div className='mt-5  w-full flex p-2 justify-center items-center'>
            <input className='w-[70%] bg-zinc-200 border-none outline-none px-3 py-2 rounded-md'  type="text" placeholder='Search item' />
            <button className='bg-blue-600 ml-4 rounded-md px-3 py-2 text-md text-white'>search</button>

            </div>
        </div>
    </div>
    </>
  )
}

export default Search