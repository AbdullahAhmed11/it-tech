import React from 'react'
import { GoClock } from "react-icons/go";
import { MdPlayLesson } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdOutlineLanguage } from "react-icons/md";
const CourseMaterial = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row gap-5 md:gap-[100px] shadow-md rounded-lg p-4">
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <GoClock className='text-xl text-gray-500' />
                            <h3 className='text-lg text-gray-500 font-semibold'>Duration</h3>
                        </div>
                        <span className='text-gray-500'>3 Weeks</span>
                    </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <MdPlayLesson className='text-xl text-gray-500' />
                            <h3 className='text-lg text-gray-500 font-semibold'>Lessons:</h3>
                        </div>
                        <span className='text-gray-500'>8</span>
                    </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <FaBookOpenReader className='text-xl text-gray-500' />
                            <h3 className='text-lg text-gray-500 font-semibold'>Enrolled:</h3>
                        </div>
                        <span className='text-gray-500'>65 Students</span>
                    </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <MdOutlineLanguage className='text-xl text-gray-500' />
                            <h3 className='text-lg text-gray-500 font-semibold'>Language:</h3>
                        </div>
                        <span className='text-gray-500'>English</span>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <GoClock className='text-xl text-gray-500' />
                            <h3 className='text-lg text-gray-500 font-semibold'>Duration</h3>
                        </div>
                        <span className='text-gray-500'>3 Weeks</span>
                    </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <MdPlayLesson className='text-xl text-gray-500' />
                            <h3 className='text-lg text-gray-500 font-semibold'>Lessons:</h3>
                        </div>
                        <span className='text-gray-500'>8</span>
                    </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <FaBookOpenReader className='text-xl text-gray-500' />
                            <h3 className='text-lg text-gray-500 font-semibold'>Enrolled:</h3>
                        </div>
                        <span className='text-gray-500'>65 Students</span>
                    </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <MdOutlineLanguage className='text-xl text-gray-500' />
                            <h3 className='text-lg text-gray-500 font-semibold'>Language:</h3>
                        </div>
                        <span className='text-gray-500'>English</span>
                    </div>
                </div>
            </div>
  )
}

export default CourseMaterial