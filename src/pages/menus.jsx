import React, { useState } from "react";

const Menus = () => {
  const [activeTab, setActiveTab] = useState("food");

  const foodItems = [
    "KABULI PULAO",
    "QORMA",
    "KEBABS",
    "SIDES",
    "DIPS",
    "DESSERTS",
  ];
  const drinkItems = [
    "N-A COCKTAILS",
    "N-A SPARKLING",
    "N-A WINE",
    "N-A SPIRITS",
    "N-A BEER & CIDER",
    "SOFT DRINKS",
    "TEA & COFFEE",
  ];

  const itemsToDisplay = activeTab === "food" ? foodItems : drinkItems;
  const isScrollable = itemsToDisplay.length > 6;

  return (
    <div className="text-black">
      <h2 className="text-center text-2xl font-bold">MENUS</h2>
      <p className="text-left text-[15px] mt-5 max-w-2xl mx-auto">
        At Kabuli, our food and drinks are crafted with care and authenticity.
        All our beverages are non-alcoholic, showcasing the finest mixology by
        our skilled bartenders who blend unique flavours. Each drink combines
        creativity and tradition, perfectly complementing our menu to enhance
        your dining experience.
      </p>

      {/* Tabs */}
      <div className="border-y-5 border-black flex justify-center gap-5 max-w-4xl mx-auto mt-5">
        <h2
          className={`text-center text-3xl font-bold py-3 cursor-pointer ${
            activeTab === "food" ? "text-blue-600" : ""
          }`}
          onClick={() => setActiveTab("food")}
        >
          FOOD
        </h2>
        <h2
          className={`text-center text-3xl font-bold py-3 cursor-pointer ${
            activeTab === "drinks" ? "text-blue-600" : ""
          }`}
          onClick={() => setActiveTab("drinks")}
        >
          Drinks
        </h2>
      </div>

      {/* Menu Items */}
      <div
        className={`border-b-3 border-black flex gap-5 max-w-4xl mx-auto mt-5 ${
          isScrollable
            ? "overflow-x-auto whitespace-nowrap"
            : "flex-wrap justify-between"
        }`}
        style={
          isScrollable ? { scrollbarWidth: "thin", maxHeight: "200px" } : {}
        }
      >
        {itemsToDisplay.map((item, index) => (
          <h2 key={index} className="text-center text-2xl font-bold px-3 py-2">
            {item}
          </h2>
        ))}
      </div>
      <div className=" p-6  flex items-start mt-5 max-w-[945px] mx-auto">
        {/* Image Section */}
        <div className="w-1/2 mr-6 border-2 px-5   py-2 border-black ">
          <div className="border-t-2 mb-2 "></div>
          <img
            src="/assets/Kabuli-August-LR-16-scaled.jpg"
            alt="Lamb Kabuli Pulao"
            className="w-full h-auto rounded-md"
          />
          <div className="border-b-2 mt-2"></div>
        </div>

        {/* Text Content Section */}
        <div className="w-1/2">
          <div className="flex justify-between items-baseline mb-2">
            <h2 className="text-xl font-semibold text-black">
              Lamb Kabuli Pulao
            </h2>
            <span className="text-lg text-gray-700">£22</span>
          </div>
          <p className="text-gray-800 text-sm leading-relaxed">
            Savour the heart of Afghan cuisine - tender lamb, simmered in
            Kabul's aromatic spices, nestled in fragrant rice with carrots and
            raisins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menus;
