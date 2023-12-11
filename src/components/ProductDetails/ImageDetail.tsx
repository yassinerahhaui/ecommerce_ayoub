import Image, { StaticImageData } from "next/image"
import facebook from "../../assets/images/icons/facebook.png"
import twitter from "../../assets/images/icons/twitter.png"
import delivery from "../../assets/images/icons/delivery.png"
import money from "../../assets/images/icons/money.png"
import safety from "../../assets/images/icons/safty.png"
import support from "../../assets/images/icons/support.png"
import { FaInstagram } from "react-icons/fa"
import { ProductCard } from "@/interfaces/productCard"

type ProductCardProps = {
    image: StaticImageData,
    name_fr: string
}
const ImageDetail = ({image, name_fr}:ProductCardProps) => {
    const SocialIconStyle = "rounded-full sm:w-10 sm:h-10 border  border-solid hover:opacity-80 flex items justify-center py-3"
    const AdvantageStyle = "text-text-light text-sm font-normal"

  return (
    <div className="flex flex-col items-center justify-center sm:items-start lg:w-2/3 lg:grid lg:grid-cols-3 lg:grid-rows-none sm:justify-start p-7 sm:w-1/2">
         <Image className="lg:px-7  w-full lg:h-[19.38rem] h-[13.75rem] lg:col-span-2" src={image} alt={name_fr} />
         <ul className="lg:px-7 mt-8 lg:m-0  w-full flex flex-col sm:flex-row lg:flex-col gap-[1.12rem]">
           <li className={`border-[#3B5998] ${SocialIconStyle}`}><a href="" >{<Image src={facebook} alt="Facebook icon" />}</a></li>
           <li className={`border-[#1DA1F2] ${SocialIconStyle}`}><a href="">{<Image src={twitter} alt="twitter icon" />}</a></li>
           <li className={` border-[#0077B5] ${SocialIconStyle}`}><a href=""><FaInstagram /></a></li>
         </ul>
         <ul className=" lg:px-7 flex flex-col mt-6 lg:-mt-48 justify-center items-center sm:items-start gap-3 lg:col-start-3 ">
           <li className="flex gap-1 items-center whitespace-nowrap"><Image className="h-4" src={delivery} alt="Delivery icon" /> <p className={AdvantageStyle}>Free Delivery</p></li>
           <li className="flex gap-1 items-center whitespace-nowrap"><Image className="h-4" src={money} alt="money icon" /> <p className={AdvantageStyle}>Money Back Gurantee</p></li>
           <li className="flex gap-1 items-center whitespace-nowrap"><Image className="h-4" src={safety} alt="Safety icon" /> <p className={AdvantageStyle}>Safety Gurantee</p></li>
           <li className="flex gap-1 items-center whitespace-nowrap"><Image className="h-4" src={support} alt="Support icon" /> <p className={AdvantageStyle}>24 Hours Support</p></li>
         </ul>
       </div>
  )
}

export default ImageDetail