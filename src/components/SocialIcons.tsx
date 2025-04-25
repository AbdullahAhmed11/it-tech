import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";

const socialIcons = [
  { icon: <FaFacebookF />, color: "#3b5998" },
  { icon: <IoLogoTwitter />, color: "#1DA1F2" },
  { icon: <FaLinkedinIn />, color: "#0077b5" },
  { icon: <FaYoutube />, color: "#FF0000" },
];

const SocialIcons = () => (
  <div className='flex items-center gap-3'>
    {socialIcons.map((item, index) => (
      <div key={index} className='w-10 h-10 text-gray-500 rounded-full bg-white flex justify-center items-center shadow-md'>
        {item.icon}
      </div>
    ))}
  </div>
);

export default SocialIcons;