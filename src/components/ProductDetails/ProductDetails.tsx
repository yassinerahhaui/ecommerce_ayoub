"use client"
import { products } from "../BestChoices/BestChoices"
import Description from "./Description"
import {useState } from "react"
import ImageDetail from "./ImageDetail"
import Details from "./Details"

const ProductDetails = () => {
  const [review, setReview] = useState<boolean>(false)
  const [description, setDescription] = useState<boolean>(true)


  return (
   <>
     <div className=" sm:flex-row-reverse flex flex-col gap-16 max-w-[90rem] pb-24 m-auto min-h-[calc(100dvh-96px)] md:h-[calc(100dvh-108px)] lg:px-16 ">
      <ImageDetail  image={products[0].image} name_fr={products[0].name_fr} />
      <Details name_fr={products[0].name_fr} price={products[0].price} />
     </div>
     <Description review={review} setReview={setReview} description={description} setDescription={setDescription} />
   </>
  )
}

export default ProductDetails