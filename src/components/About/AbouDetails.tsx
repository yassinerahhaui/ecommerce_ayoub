import Image from "next/image";
import DetailImage from "../../assets/images/cosmetics/cream.png";
import { h4Style } from "../Contact/ContactDetails";
import firstImage from "../../assets/images/products/01.jpg"
import secondImageImage from "../../assets/images/products/02.jpg"


const AbouDetails = () => {
  return (
    <div className="max-w-[90rem] m-auto p-6 lg:px-20 grid lg:grid-cols-3 sm:grid-cols-2 gap-8 place-content-center">
      <div className="h-full grid place-content-center lg:col-span-1  ">
        <Image src={DetailImage} alt="Details-image "/>
      </div>
      <div className="lg:col-span-2 grid lg:grid-cols-3 gap-10  ">
        <div className=" flex flex-col justify-center items-start gap-3 lg:col-span-2 ">
          <span className="bg-primary-light w-[2.47438rem] h-[0.125rem]" />
          <h4 className={h4Style}>WElcome to botanika</h4>
          <h3 className="text-[#222] font-bold text-4xl  text-left ">
            The Gardens Shop Online
          </h3>
        
            <p className="text-text-light font-normal mb-7 text-justify lg:[column-count:2] ">
              nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis mollis, est non
              commodo luctus,
              nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis mollis, est non
              commodo luctus,
            </p>
          
        </div>
        <div className="grid gap-3 lg:grid-cols-1 sm:grid-cols-2  place-content-center">
          <Image alt="First-image" className="w-60 h-60 rounded lg:w-full lg:max-h-96" src={firstImage}/>
          <Image alt="second-image" className="w-60 h-60 rounded lg:w-full lg:max-h-96" src={secondImageImage}/>
        </div>
      </div>
    </div>
  );
};

export default AbouDetails;
