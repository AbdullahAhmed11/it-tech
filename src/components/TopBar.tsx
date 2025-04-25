import { MdKeyboardArrowRight } from "react-icons/md";

const TopBar = () => {
  return (
    <div className='bg-[#F5F9FA] w-full h-[132px] p-4 flex flex-col justify-between'>
        <div className='flex gap-2 items-center '>
            <span className='text-md font-normal '>Home</span>
            <span className='text-md font-normal '><MdKeyboardArrowRight/></span>
            <span className='text-md font-normal '>Courses</span>
            <span className='text-md font-normal '><MdKeyboardArrowRight/></span>
            <span className='text-md font-medium '>Course Details</span>
        </div>
        <div>
            <h2 className='text-3xl font-bold'>Starting SEO as your Home</h2>
        </div>
    </div>
  )
}

export default TopBar