
import Image from "next/image";
import bgMobile from "../../../public/images/backgroundContact.jpg";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ContactBackground = () => {
  const transition = "hover:text-[#33B244] transition-all duration-300 cursor-pointer"
  return (
    <div className="relative h-[14.6875rem] sm:h-[18.15rem] lg:h-[25rem]" >
      <Image className="opacity-20 -z-10 absolute top-0 start-0 w-full h-full" src={bgMobile} alt="bg-contact"/>
     <div className="max-w-[90rem] m-auto p-5 flex flex-col sm:flex-row sm:justify-between items-center justify-center h-full gap-4">
       <h2 className="text-black text-center font-bold text-5xl ">Contact Us</h2>
       <ul className="flex text-center gap-3">
        <li className={transition}><Link href={"/"}>Home </Link></li>
        <li className="self-center"><IoIosArrowForward/></li>
        <li className={transition}>Contact Us</li>
       </ul>
     </div>
    </div>
  )
}

export default ContactBackground