import React from 'react'

type DetailsProps = {
    name_fr: string,
    price: number
}

const Details = ({name_fr, price}:DetailsProps) => {
  return (
    <div className="flex flex-col sm:w-1/2 lg:w-1/3 px-7 sm:p-7">
    <h2 className="text-[#222] font-bold text-4xl capitalize">{name_fr}</h2>
    <span className="text-primary-light pt-6 pb-8 flex">{'$' + price }</span>
    <p className="text-text-light font-normal mb-7 text-justify">Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor
      quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero
      sit amet quam egestas semper. Aenean
      ultricies mi vitae est. Mauris placerat
      eleifend leo.</p>
    <div className="flex gap-3 pt-0  pb-8 pr-12 items-start">
      <input  type="number" placeholder="1" className="border border-solid w-14  text-center  py-3 text-black   border-[#EDEDED] bg-white rounded"/>
      <button className="bg-primary-light hover:opacity-80 text-white px-12 py-3 whitespace-nowrap rounded">ADD TO CART</button>
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
  )
}

export default Details