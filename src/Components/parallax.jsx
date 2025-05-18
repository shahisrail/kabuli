import React from "react";
import { Link } from "react-router-dom";
import DrinksCard from "./DrinksCard";

const Parallax = () => {
  return (
    <>
      <div className="mt-8 py-2 p-2 mb-4 text-[15px]  font-medium max-w-md mx-auto text-left md:max-w-2xl md:text-base md:p-3 md:py-3 md:mb-5">
        <p>
          Located in the lively Moseley village, Lemar offers a modern yet
          welcoming atmosphere where the focus is always on the food. Each dish
          is a celebration of Afghanistan’s heritage, with flavors as rare and
          special as the snow leopard, our country’s national symbol. Join us
          and discover the true essence of Afghan cuisine—where every bite takes
          you on a journey home.
        </p>
      </div>

      <div>
        <img
          src="/assets/parallax.jpg"
          alt="Parallax Banner"
          className="w-full h-[300px] object-contain md:object-cover md:h-[500px] mx-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-5 p-4 max-w-3xl mx-auto gap-6">
        <div>
          <img
            className="w-full md:w-1/2 min-w-[300px] mx-auto"
            src="/assets/Untitled-1-2.png"
            alt="Lemar Dish"
          />
        </div>

        <div>
          <p className="mb-4 text-[15px] font-medium text-left md:max-w-2xl md:p-3 md:py-3">
            At Lemar, we believe food is more than just sustenance—it’s a way
            to bring people together and celebrate culture. Our signature dish,
            Lemar Pulao, embodies this philosophy with its fragrant blend of
            basmati rice, succulent meat, sweet carrots, raisins, and Afghan
            spices. It’s a dish that brings warmth, comfort, and a taste of
            home. But our menu extends beyond Pulao. We offer a variety of
            authentic Afghan dishes, including freshly grilled to perfection
            kebabs, freshly made breads, and rich, flavourful Qormas. We also
            cater to diverse dietary needs with a selection of vegetarian and
            gluten-free options, ensuring there’s something for everyone.
          </p>
          <div className="flex justify-center items-center py-5">
            <div className="border-2 p-2">
              <Link to="/menus">
                <button className="bg-tan-100 border-y-2 border-[#EAD9C5] px-10 font-bold rounded-none focus:outline-none hover:bg-tan-200 transition duration-300 text-[15px]">
                  VIEW MENUS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/assets/paralax2.jpg"
          alt="Parallax Banner"
          className="w-full h-[300px] object-contain md:object-cover md:h-[500px] mx-auto"
        />
      </div>

      <DrinksCard />
    </>
  );
};

export default Parallax;
