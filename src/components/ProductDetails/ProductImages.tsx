"use client";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
const images = [
  { id: 1, image: "image 1" },
  { id: 2, image: "image 2" },
  { id: 3, image: "image 3" },
  { id: 4, image: "image 4" },
  { id: 5, image: "image 5" },
];
const ProductImages = ({ image }: { image: StaticImageData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Image
        src={image}
        alt="product image"
        className="w-full max-h-[450px] rounded"
      />
      {/* <Slider {...settings}>
        {images.map((img) => (
          <div
            key={img.id}
            className="w-full h-96 bg-slate-500 text-white rounded flex items-center justify-center font-bold text-2xl"
          >
            <p className="">{img.image}</p>
          </div>
        ))}
      </Slider> */}
    </div>
  );
};

export default ProductImages;
