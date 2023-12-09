"use client"
import Image from "next/image"
import facebook from "../../assets/images/icons/facebook.png"
import twitter from "../../assets/images/icons/twitter.png"
import delivery from "../../assets/images/icons/delivery.png"
import money from "../../assets/images/icons/money.png"
import safety from "../../assets/images/icons/safty.png"
import support from "../../assets/images/icons/support.png"
import { FaInstagram } from "react-icons/fa"
import { products } from "../BestChoices/BestChoices"
const ProductDetails = () => {
  const SocialIconStyle = "rounded-full sm:w-10 sm:h-10 border border-solid flex items justify-center py-3"
  const AdvantageStyle = "text-text-light text-sm font-normal"
  return (
    <div className=" sm:flex-row-reverse p-7 flex flex-col gap-16 max-w-[90rem] m-auto ">
      <div className="flex flex-col items-center justify-center sm:items-start lg:w-2/3 lg:grid lg:grid-cols-3 lg:grid-rows-none  sm:w-1/2">
        <Image className="lg:px-7 w-full lg:h-[19.38rem] h-[13.75rem] lg:col-span-2" src={products[0].image} alt={products[0].name_fr} />
        <ul className="lg:px-7 mt-8 lg:m-0  w-full flex flex-col sm:flex-row lg:flex-col gap-[1.12rem]">
          <li className={`border-[#3B5998] ${SocialIconStyle}`}><a href="" >{<Image src={facebook} alt="Facebook icon" />}</a></li>
          <li className={`border-[#1DA1F2] ${SocialIconStyle}`}><a href="">{<Image src={twitter} alt="twitter icon" />}</a></li>
          <li className={` border-[#0077B5] ${SocialIconStyle}`}><a href=""><FaInstagram /></a></li>
        </ul>
        <ul className=" lg:px-7 flex flex-col mt-6 lg:-mt-40 justify-center items-center sm:items-start gap-3 lg:col-start-3 ">
          <li className="flex gap-1 items-center"><Image className="h-4" src={delivery} alt="Delivery icon" /> <p className={AdvantageStyle}>Free Delivery</p></li>
          <li className="flex gap-1 items-center"><Image className="h-4" src={money} alt="money icon" /> <p className={AdvantageStyle}>Money Back Gurantee</p></li>
          <li className="flex gap-1 items-center"><Image className="h-4" src={safety} alt="Safety icon" /> <p className={AdvantageStyle}>Safety Gurantee</p></li>
          <li className="flex gap-1 items-center"><Image className="h-4" src={support} alt="Support icon" /> <p className={AdvantageStyle}>24 Hours Support</p></li>
        </ul>
      </div>
      <div className="flex flex-col sm:w-1/2 lg:w-1/3">
        <h2 className="text-[#222] font-bold text-4xl capitalize">{products[0].name_fr}</h2>
        <span className="text-primary-light pt-6 pb-8 flex">{'$' + products[0].price }</span>
        <p className="text-text-light font-normal mb-7">Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames
          ac turpis egestas. Vestibulum tortor
          quam, feugiat vitae, ultricies eget,
          tempor sit amet, ante. Donec eu libero
          sit amet quam egestas semper. Aenean
          ultricies mi vitae est. Mauris placerat
          eleifend leo.</p>
        <div className="flex gap-3 pt-0  pb-8 pr-12 items-start">
          <input  type="number" placeholder="1" className="border border-solid w-14  text-center  py-3 text-black   border-[#EDEDED] bg-white rounded"/>
          <button className="bg-primary-light text-white px-12 py-3 whitespace-nowrap rounded">ADD TO CART</button>
        </div>
        <table className="flex">
          <thead >
            <tr className="flex flex-col">
              <th className="w-[6.75rem] text-[#333333] flex items-center">SKU</th>
              <th className="w-[6.75rem] text-[#333333] flex items-center">Category</th>
            </tr>
          </thead>
          <tbody >
            <tr className="flex flex-col">
              <td className="text-[#333333]">wp-pennant-1</td>
              <td className="text-[#333333]">Popular Plants</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductDetails