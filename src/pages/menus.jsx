import React, { useState } from "react";

const Menus = () => {
  const [activeTab, setActiveTab] = useState("food");
  const [foodItems] = useState([
    "KABULI PULAO",
    "QORMA",
    "KEBABS",
    "SIDES",
    "DIPS",
    "DESSERTS",
  ]);
  const [drinkItems] = useState([
    "N-A COCKTAILS",
    "N-A SPARKLING",
    "N-A WINE",
    "N-A SPIRITS",
    "N-A BEER & CIDER",
    "SOFT DRINKS",
    "TEA & COFFEE",
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const itemsToDisplay = activeTab === "food" ? foodItems : drinkItems;
  const isScrollable = itemsToDisplay.length > 6;
  const dishData = [
    {
      title: "Lamb Kabuli Pulao",
      description:
        "Savour the heart of Afghan cuisine - tender lamb, simmered in Kabul's aromatic spices, nestled in fragrant rice with carrots and raisins.",
      price: "£22",
      image: "/assets/Kabuli-August-LR-16-scaled.jpg",
    },
    {
      title: "Qorma",
      description:
        "A rich, slow-cooked meat dish, infused with traditional Afghan spices and served with naan.",
      price: "£18",
      image: "/assets/Kabuli-August-LR-16-scaled.jpg",
    },
    {
      title: "Kebabs",
      description:
        "Grilled skewers of marinated meat, offering a smoky and savory delight.",
      price: "£20",
      image: "/assets/Kabuli-August-LR-16-scaled.jpg",
    },
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className=" p-4 md:p-6">
      <h2 className="text-center text-2xl font-bold mb-4 md:mb-6">MENUS</h2>
      <p className="text-left text-sm   mt-2 md:mt-5 max-w-2xl mx-auto">
        At Kabuli, our food and drinks are crafted with care and authenticity.
        All our beverages are non-alcoholic, showcasing the finest mixology by
        our skilled bartenders who blend unique flavours. Each drink combines
        creativity and tradition, perfectly complementing our menu to enhance
        your dining experience.
      </p>

      {/* Tabs */}
      <div className="border-y-2 md:border-y-5 border-[#EAD9C5] flex justify-center gap-4 md:gap-5 max-w-4xl mx-auto mt-4 md:mt-5">
        <h2
          className={`text-center text-xl md:text-3xl   py-2 md:py-3 cursor-pointer ${
            activeTab === "food" ? " font-extrabold text-base-300" : ""
          }`}
          onClick={() => setActiveTab("food")}
        >
          FOOD
        </h2>
        <h2
          className={`text-center text-xl md:text-3xl   py-2 md:py-3 cursor-pointer ${
            activeTab === "drinks" ? " font-extrabold text-base-300" : ""
          }`}
          onClick={() => setActiveTab("drinks")}
        >
          Drinks
        </h2>
      </div>

      {/* Menu Items */}
      <div
        className={`border-b-2 md:border-b-3 border-[#EAD9C5] flex gap-3 md:gap-5 max-w-4xl mx-auto mt-4 md:mt-5 ${
          isScrollable
            ? "overflow-x-auto whitespace-nowrap"
            : "flex-wrap justify-center md:justify-between"
        }`}
        style={
          isScrollable ? { scrollbarWidth: "thin", maxHeight: "200px" } : {}
        }
      >
        {itemsToDisplay.map((item, index) => (
          <h2
            key={index}
            className={`text-center text-lg md:text-2xl font-bold px-2 md:px-3 py-1 md:py-2 ${
              (activeTab === "food" && foodItems.indexOf(item) === 0) ||
              (activeTab === "drinks" && drinkItems.indexOf(item) === 0)
                ? "text-tan-700"
                : ""
            }`}
          >
            {item}
          </h2>
        ))}
      </div>

      {/* Image and Text Section */}
      <div>
        <div className="  mt-4 md:mt-5 max-w-[945px] mx-auto">
          {dishData.map((dish, index) => (
            <div
              key={index}
              className=" p-4 md:p-6   flex flex-col md:flex-row items-start"
            >
              {/* Image Section */}
              <div
                className="  border-2 px-3 md:px-5 py-2 border-[#EAD9C5] mb-4 md:mb-0 max-w-[400px] cursor-pointer"
                onClick={() => handleImageClick(dish.image)}
              >
                <div className="border-t-2 my-2"></div>
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-auto rounded-md "
                />
                <div className="border-b-2 my-2"></div>
              </div>

              {/* Text Content Section */}
              <div className="md:ml-4 flex-grow">
                <div className="flex justify-between items-baseline mb-1 md:mb-2">
                  <h2 className="text-lg md:text-xl font-semibold ">
                    {dish.title}
                  </h2>
                  <span className="text-md md:text-lg  ">{dish.price}</span>
                </div>
                <p className="  text-sm md:text-base leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 md:mt-5 max-w-4xl mx-auto">
        <div>
          {" "}
          <div className="border-2 p-2">
            <button className="bg-tan-100 border-y-2  border-[#EAD9C5] px-10   font-bold  rounded-none focus:outline-none hover:bg-tan-200 transition duration-300 text-[17px]">
              FOOD MENU
            </button>
          </div>
        </div>
        <div>
          {" "}
          <div className="border-2 p-2">
            <button className="bg-tan-100 border-y-2  border-[#EAD9C5] px-10   font-bold  rounded-none focus:outline-none hover:bg-tan-200 transition duration-300 text-[17px]">
              ALLERGENS
            </button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-xs bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Large View"
              className="max-w-screen-lg max-h-screen"
            />
            <button
              className="absolute top-[-30px] right-[-30px] text-white text-3xl font-bold cursor-pointer bg-black rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menus;