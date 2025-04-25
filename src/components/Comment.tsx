import React from 'react'

const Comment = () => {
  return (
    <div className='flex flex-col gap-2 mt-4'>
    <div className="flex flex-col sm:flex-row gap-4">
        <img src="https://th.bing.com/th/id/OIP.-4eTw-tPfpQZnUA3PiNjTwHaIi?w=166&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7" className='w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full' />
        <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-bold text-gray-500'>John Doe</h2>
            <p className='text-gray-500 mb-3'>Oct10, 2025</p>
            <p className='text-gray-500 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <hr className="my-4 border-t border-gray-300" />
    <div className="flex flex-col sm:flex-row gap-4">
        <img src="https://th.bing.com/th/id/OIP.-4eTw-tPfpQZnUA3PiNjTwHaIi?w=166&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7" className='w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full' />
        <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-bold text-gray-500'>John Doe</h2>
            <p className='text-gray-500 mb-3'>Oct10, 2025</p>
            <p className='text-gray-500 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <hr className="my-4 border-t border-gray-300" />
    <div className="flex flex-col sm:flex-row gap-4">
        <img src="https://th.bing.com/th/id/OIP.-4eTw-tPfpQZnUA3PiNjTwHaIi?w=166&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7" className='w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full' />
        <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-bold text-gray-500'>John Doe</h2>
            <p className='text-gray-500 mb-3'>Oct10, 2025</p>
            <p className='text-gray-500 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
</div>
  )
}

export default Comment