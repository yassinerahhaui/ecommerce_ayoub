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
    // Handle form submission logic here
    console.log('Form submitted!');
  };
  return (
    <div className="p-7">
      <h3 className="text-black font-bold text-lg">Review</h3>
      <span className="text-text-light">There are no reviews yet</span>
      <p className="text-text-light">Be the first to review “Monstera Adansonii”
        Your email address will not be published. Required fields are marked
        *</p>
      <form action="/submit-review" method="post">
      <div className="mb-4">
        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
          Rating:
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
        <label htmlFor="review" className="block text-sm font-medium text-gray-700">
          Review:
        </label>
        <textarea
          id="review"
          name="review"
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name:
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email:
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
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Submit Review
      </button>
    </div>)
}

export default Review