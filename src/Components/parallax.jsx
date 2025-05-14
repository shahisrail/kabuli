import React from "react";
import DrinksCard from "./DrinksCard";

const Parallax = () => {
  return (
    <>
      <div className="  ">
        <img
          src="/assets/parallax.jpg"
          alt="Parallax Banner"
          className="w-[97%] mx-auto h-auto object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 max-w-2xl mx-auto gap-6">
        <div>
          <img
            className="min-w-[200px] md:w-1/2"
            src="/assets/Untitled-1-2.png"
            alt="Kabuli Dish"
          />
        </div>

        <div className="text-black">
          <p className="mb-4">
            At Kabuli, we believe food is more than just sustenance—it’s a way
            to bring people together and celebrate culture. Our signature dish,
            Kabuli Pulao, embodies this philosophy with its fragrant blend of
            basmati rice, succulent meat, sweet carrots, raisins, and Afghan
            spices. It’s a dish that brings warmth, comfort, and a taste of
            home. But our menu extends beyond Pulao. We offer a variety of
            authentic Afghan dishes, including freshly grilled to perfection
            kebabs, freshly made breads, and rich, flavourful Qormas. We also
            cater to diverse dietary needs with a selection of vegetarian and
            gluten-free options, ensuring there’s something for everyone.
          </p>
          <div className="flex justify-center items-center">
            <div className="border-2 p-2">
              <button className="bg-tan-100 border-y-2  border-black px-10 py-2 font-bold text-black rounded-none focus:outline-none hover:bg-tan-200 transition duration-300 text-[25px]">
                VIEW MENUS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div >
        <img
          src="/assets/paralax2.jpg"
          alt="Parallax Banner"
          className="w-[97%] mx-auto h-auto object-cover"
        />
      </div>
      <DrinksCard/>
    </>
  );
};

export default Parallax;
