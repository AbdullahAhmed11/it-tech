
import { GoClock } from "react-icons/go";
import { MdPlayLesson } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdOutlineLanguage } from "react-icons/md";

const metadataItems = [
  { icon: <GoClock />, label: "Duration", value: "3 Weeks" },
  { icon: <MdPlayLesson />, label: "Lessons", value: "8" },
  { icon: <FaBookOpenReader />, label: "Enrolled", value: "65 Students" },
  { icon: <MdOutlineLanguage />, label: "Language", value: "English" },
];

const MetadataItem = ({ icon, label, value }:any) => (
  <>
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <span className='text-xl text-gray-500'>{icon}</span>
        <h3 className='text-lg text-gray-500 font-semibold'>{label}</h3>
      </div>
      <span className='text-gray-500'>{value}</span>
    </div>
    <hr className="my-4 border-t border-gray-300" />
  </>
);

const CourseMetadata = () => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex flex-col gap-2">
        {metadataItems.map((item, index) => (
          <MetadataItem key={index} {...item} />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {metadataItems.map((item, index) => (
          <MetadataItem key={`dup-${index}`} {...item} />
        ))}
      </div>
    </div>
  </div>
);

export default CourseMetadata;