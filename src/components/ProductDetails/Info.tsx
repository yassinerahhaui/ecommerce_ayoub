"use client";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaXTwitter,
  FaCartShopping,
  FaRegCreditCard,
  FaShieldHalved,
  FaPhone,
  FaPhoneFlip,
} from "react-icons/fa6";
const Info = () => {
  const iconStyle =
    "w-full h-10 rounded-full border flex items-center justify-center mb-2";
  const textStyle =
    "flex text-primary text-sm font-semibold items-center gap-2 mb-2";
  return (
    <div className="sm:col-span-2 lg:col-span-1 sm:grid sm:grid-cols-2 lg:block gap-10">
      <ul className="mb-8">
        {/* social media links */}
        <a
          href=""
          className={`${iconStyle} border-blue-600 text-blue-600 hover:border-blue-800 hover:text-blue-800`}
        >
          <li className="">
            <FaFacebookF />
          </li>
        </a>
        <a
          href=""
          className={`${iconStyle} border-gray-900 text-gray-900 hover:border-gray-950 hover:text-gray-950`}
        >
          <li className="">
            <FaTiktok />
          </li>
        </a>
        <a
          href=""
          className={`${iconStyle} border-rose-600 text-rose-600 hover:border-rose-800 hover:text-rose-800`}
        >
          <li className="">
            <FaInstagram />
          </li>
        </a>
        <a
          href=""
          className={`${iconStyle} border-gray-900 text-gray-900 hover:border-gray-950 hover:text-gray-950`}
        >
          <li className="">
            <FaXTwitter />
          </li>
        </a>
      </ul>
      <ul className="">
        {/* delivery info */}
        <li className={textStyle}>
          <FaCartShopping /> Free Delivery
        </li>
        <li className={textStyle}>
          <FaRegCreditCard /> Money Back Gurantee
        </li>
        <li className={textStyle}>
          <FaShieldHalved /> Safety Gurantee
        </li>
        <li className={textStyle}>
          {localStorage.getItem("language") === "fr" ? (
            <FaPhone />
          ) : (
            <FaPhoneFlip />
          )}{" "}
          24 Hours Support
        </li>
      </ul>
    </div>
  );
};

export default Info;
