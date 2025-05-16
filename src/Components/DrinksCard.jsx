import React from 'react';
import { BsArrowRight } from 'react-icons/bs'; // Import the right arrow icon

const DrinksCard = () => {
  return (
    <div className="bg-[#EAD9C5] text-black p-6 rounded-md shadow-md max-w-3xl mx-auto mt-14 ">
      <p className="  text-lg leading-relaxed mb-4">
        In addition to our carefully crafted food, we take pride in our
        non-alcoholic drinks' menu. Every beverage is designed by our skilled
        mixologists, blending unique and refreshing flavours to perfectly
        complement our cuisine. Whether you're enjoying one of our traditional
        Afghan teas or a modern, creative mocktail, our drinks are made with the
        same attention to detail and authenticity as our dishes, enhancing your
        dining experience.
      </p>
      <div className="flex justify-end">
        <BsArrowRight className="text-black text-2xl" />
      </div>
    </div>
  );
};

export default DrinksCard;