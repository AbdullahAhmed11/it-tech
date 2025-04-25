import {useState} from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import CourseProgress from "../components/CourseProgress";
import { RiNewspaperLine } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import PdfModal from "./PdfModal";
import QuizeModal from "./QuizeModal";
import Comment from './Comment';
import VideoPlayer from './VideoPlayer';
import CourseMaterial from './CourseMaterial';
const CourseDetails = () => {
    const socialIcons = [
        { icon: <FaFacebookF />, color: "#3b5998" },
        { icon: <IoLogoTwitter />, color: "#1DA1F2" },
        { icon: <FaLinkedinIn />, color: "#0077b5" },
        { icon: <FaYoutube />, color: "#FF0000" },  
    ]
    const [open, setOpen] = useState(false);
    const [openQuize, setOpenQuize] = useState(false);

    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    const handleOpenQuize = () => setOpenQuize(true);
    const handleCloseQuize = () => setOpenQuize(false);
    
  return (

    <div className='w-full gap-5 flex flex-col lg:flex-row p-4'>
    <div className='w-full lg:w-3/4 flex flex-col gap-5 rounded-lg'>
      <VideoPlayer/>
        <div className='flex items-center gap-3'>
            {socialIcons.map((item, index) => (
                <div key={index} className='w-10 h-10 text-gray-500 rounded-full bg-white flex justify-center items-center shadow-md'>
                    {item.icon}
                </div>
            ))}
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-bold'>Course Materials</h2>
            <CourseMaterial/>
        </div>
        <div>
            <h2 className='text-2xl font-bold'>Comments</h2>
            <Comment/>
        </div>
        <div className='flex flex-col gap-2'>
            <textarea className='w-full h-[200px] shadow-2xl border border-gray-300 rounded-lg p-4' placeholder='Write your comment here...'></textarea>
            <button className='flex items-center w-full sm:w-[180px] bg-green-400 h-[50px] justify-center text-white'>
                Submit Review
                <IoIosArrowRoundForward className='text-2xl' />
            </button>
        </div>
    </div>
    <div className='w-full lg:w-1/4 flex flex-col gap-5 rounded-lg'>
        <h2 className='text-2xl font-bold'>Topics for This Course</h2>
        <div className='mb-5'>
            <CourseProgress/>
        </div>
        <div className='w-full border border-gray-500 bg-white p-4 flex flex-col'>
            <h2 className='font-bold'>Week 1-4</h2>
            <p className='text-md text-gray-500'>Advanced story telling techniques for writers: Personas, Characters & Plot</p>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine className='text-xl text-gray-500' />
                    <h3 className='text-lg text-gray-500 font-semibold'>Introduction</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine onClick={handleOpenModal} className='text-xl text-gray-500 cursor-pointer' />
                    <h3 className='text-lg text-gray-500 font-semibold'>Course OverView</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine onClick={handleOpenModal} className='text-xl text-gray-500' />
                    <h3 className='text-lg text-gray-500 font-semibold'>Course OverView</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine onClick={handleOpenModal} className='text-xl text-gray-500' />
                    <h3 className='text-lg text-gray-500 font-semibold'>Course Exercise / Reference Files</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine className='text-xl text-gray-500' />
                    <h3 className='text-lg text-gray-500 font-semibold'>Code Editor Instrallation<br/> (Optional if you have one)</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine onClick={handleOpenQuize} className='text-xl text-gray-500 cursor-pointer' />
                    <h3 className='text-lg text-gray-500 font-semibold'>Embedding PHP in HTML</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
        </div>
        <div className='w-full border border-gray-500 bg-white p-4 flex flex-col'>
            <h2 className='font-bold'>Week 1-4</h2>
            <p className='text-md text-gray-500'>Advanced story telling techniques for writers: Personas, Characters & Plot</p>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine className='text-xl text-gray-500' onClick={handleOpenModal} />
                    <h3 className='text-lg text-gray-500 font-semibold'>Introduction</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine onClick={handleOpenModal} className='text-xl text-gray-500' />
                    <h3 className='text-lg text-gray-500 font-semibold'>Course OverView</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine onClick={handleOpenModal} className='text-xl text-gray-500' />
                    <h3 className='text-lg text-gray-500 font-semibold'>Course OverView</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine className='text-xl text-gray-500' onClick={handleOpenModal} />
                    <h3 className='text-lg text-gray-500 font-semibold'>Course Exercise / Reference Files</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine className='text-xl text-gray-500 ' onClick={handleOpenModal} />
                    <h3 className='text-lg text-gray-500 font-semibold'>Code Editor Instrallation<br/> (Optional if you have one)</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <RiNewspaperLine className='text-xl text-gray-500'  onClick={handleOpenQuize} />
                    <h3 className='text-lg text-gray-500 font-semibold'>Embedding PHP in HTML</h3>
                </div>
                <CiClock2 className='text-xl text-gray-500' />
            </div>
        </div>
    </div>
    <PdfModal open={open} handleClose={handleCloseModal} />
    <QuizeModal open={openQuize} handleClose={handleCloseQuize} />
</div>
  )
}

export default CourseDetails

