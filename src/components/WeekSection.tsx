import { RiNewspaperLine } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";

interface WeekSectionProps {
  weekTitle: string;
  description: string;
  items: { title: string; clickable: boolean }[];
  onItemClick: (item: { title: string; clickable: boolean }) => void;
}

const WeekSection: React.FC<WeekSectionProps> = ({ 
  weekTitle, 
  description, 
  items, 
  onItemClick 
}) => {
  return (
    <div className='w-full border border-gray-500 bg-white p-4 flex flex-col'>
      <h2 className='font-bold'>{weekTitle}</h2>
      <p className='text-md text-gray-500'>{description}</p>
      
      {items.map((item, index) => (
        <div key={index}>
          <hr className="my-4 border-t border-gray-300" />
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <RiNewspaperLine 
                className={`text-xl text-gray-500 ${item.clickable ? 'cursor-pointer' : ''}`}
                onClick={() => item.clickable && onItemClick(item)}
              />
              <h3 className='text-lg text-gray-500 font-semibold'>{item.title}</h3>
            </div>
            <CiClock2 className='text-xl text-gray-500' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekSection;