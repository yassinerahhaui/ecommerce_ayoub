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
  const IconStyle = "rounded-full border border-solid flex items justify-center py-3"
  return (
    <div className="bg-[#F9F7F5];">
      <div className="p-7 flex flex-col items-center justify-center">
        <Image className="w-full h-[13.75rem]" src={products[0].image} alt={products[0].name_fr} />
        <ul className="mt-8 w-full flex flex-col gap-[1.12rem]">
          <li className={`border-[#3B5998] ${IconStyle}`}><a href="" >{<Image src={facebook} alt="Facebook icon" />}</a></li>
          <li className={`border-[#1DA1F2] ${IconStyle}`}><a href="">{<Image src={twitter} alt="twitter icon" />}</a></li>
          <li className={` border-[#0077B5] ${IconStyle}`}><a href=""><FaInstagram /></a></li>
        </ul>
        <ul className="flex flex-col mt-6 justify-center items-center gap-3">
          <li className="flex gap-1 items-center"><Image className="h-4" src={delivery} alt="Delivery icon" /> <p className="text-text-light font-normal">Free Delivery</p></li>
          <li className="flex gap-1 items-center"><Image className="h-4" src={money} alt="money icon" /> <p className="text-text-light font-normal">Money Back Gurantee</p></li>
          <li className="flex gap-1 items-center"><Image className="h-4" src={safety} alt="Safety icon" /> <p className="text-text-light font-normal">Safety Gurantee</p></li>
          <li className="flex gap-1 items-center"><Image className="h-4" src={support} alt="Support icon" /> <p className="text-text-light font-normal">24 Hours Support</p></li>
        </ul>
      </div>
      <div className="flex flex-col p-7" >
        <h2 className="text-[#222] font-bold text-4xl capitalize">{products[0].name_fr}</h2>
        <span className="text-primary-light pt-6 pb-8 flex ">{'$' + products[0].price }</span>
        <p className="text-text-light font-normal mb-7">Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames
          ac turpis egestas. Vestibulum tortor
          quam, feugiat vitae, ultricies eget,
          tempor sit amet, ante. Donec eu libero
          sit amet quam egestas semper. Aenean
          ultricies mi vitae est. Mauris placerat
          eleifend leo.</p>
        <div className="flex gap-3 pt-0  pb-8 pr-12 items-start">
          <span className="border border-solid flex w-14 text-center  border-[#EDEDED] bg-white rounded ">1</span>
          <button className="bg-primary-light text-white px-12 py-3 rounded">ADD TO CART</button>
        </div>
        <table className="flex">
          <thead >
            <tr className="flex flex-col">
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody >
            <tr className="flex flex-col">
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductDetails