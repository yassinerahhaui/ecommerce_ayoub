"use client"

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const [rating, setRating] = useState(0);
  const handleRatingClick = (selectedRating:number) => {
    setRating(selectedRating);
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted!');
  };
  return (
    <div className="p-7 flex flex-col gap-5">
      <h3 className="text-black font-bold text-lg">Review</h3>
      <span className="text-text-light">There are no reviews yet</span>
      <p className="text-text-light">Be the first to review “Monstera Adansonii”
        Your email address will not be published. Required fields are marked
        *</p>
      <form action="/submit-review" method="post">
      <div className="mb-4">
        <label htmlFor="rating" className="text-sm font-medium ">
          Your rating*:
        </label>
        <div className="flex items-center mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingClick(star)}
              className={`text-xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'} focus:outline-none`}
            >
            <FaStar/>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="review" className="text-sm font-medium ">
          Your Review *:
        </label>
        <textarea
          id="review"
          name="review"
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className=" text-sm font-medium ">
          Name *:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
       </form>
       <div className="mb-4">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email *:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-[7.78813rem] py-2 px-4 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none"
      >
        Submit
      </button>
    </div>)
}

export default Review