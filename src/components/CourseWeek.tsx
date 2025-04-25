import { RiNewspaperLine } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";

const lessons = [
  { title: "Introduction" },
  { title: "Course OverView", onClick: true },
  { title: "Course OverView" },
  { title: "Course Exercise / Reference Files" },
  { title: "Code Editor Installation (Optional if you have one)" },
  { title: "Embedding PHP in HTML", onClick: true },
];

const CourseWeek = ({ week, description }:any) => (
  <div className='w-full border border-gray-500 bg-white p-4 flex flex-col'>
    <h2 className='font-bold'>{week}</h2>
    <p className='text-md text-gray-500'>{description}</p>
    <hr className="my-4 border-t border-gray-300" />
    
    {lessons.map((lesson, index) => (
      <div key={index}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <RiNewspaperLine 
              className={`text-xl text-gray-500 ${lesson.onClick ? 'cursor-pointer' : ''}`} 
              onClick={lesson.onClick ? () => {/* handle click */} : undefined}
            />
            <h3 className='text-lg text-gray-500 font-semibold'>{lesson.title}</h3>
          </div>
          <CiClock2 className='text-xl text-gray-500' />
        </div>
        {index < lessons.length - 1 && <hr className="my-4 border-t border-gray-300" />}
      </div>
    ))}
  </div>
);

export default CourseWeek;