import React from "react";

const Gallery = () => {
  const imageData = [
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-33-scaled.jpg",
      alt: "Kabuli August LR 33",
      id: "1",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-75-scaled.jpg",
      alt: "Kabuli August LR 75",
      id: "2",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/09/Kabuli_Brandbook_Elab-1_240204_2051241-13-3-5.png",
      alt: "Kabuli Brandbook Elab 1",
      id: "3",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/09/Kabuli-August-LR-28-scaled.jpg",
      alt: "Kabuli August LR 28",
      id: "4",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/leopardnew.png",
      alt: "Leopard New",
      id: "5",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-38-scaled.jpg",
      alt: "Kabuli August LR 38",
      id: "6",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/09/Kabuli-August-LR-71-scaled.jpg",
      alt: "Kabuli August LR 71",
      id: "7",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/09/2J0A8646-scaled.jpg",
      alt: "2J0A8646",
      id: "8",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/09/Group-8675-1.png",
      alt: "Group 8675 1",
      id: "9",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-45-scaled-1.png",
      alt: "Kabuli August LR 45",
      id: "10",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/09/Kabuli-August-LR-39-scaled.jpg",
      alt: "Kabuli August LR 39",
      id: "11",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-80-scaled.jpg",
      alt: "Kabuli August LR 80",
      id: "12",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-82-scaled.jpg",
      alt: "Kabuli August LR 82",
      id: "13",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Afghani-Kofte-3-scaled.jpg",
      alt: "Afghani Kofte 3",
      id: "14",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/leopardnew-1.png",
      alt: "Leopard New 1",
      id: "15",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Murgh-Kebab-3-scaled.jpg",
      alt: "Murgh Kebab 3",
      id: "16",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Half-Chicken-Kabuli-Pulao-2-scaled.jpg",
      alt: "Half Chicken Kabuli Pulao 2",
      id: "17",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Chapli-Kebab-1-scaled-1.png",
      alt: "Chapli Kebab 1",
      id: "18",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Salata-2-scaled.jpg",
      alt: "Salata 2",
      id: "19",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Vegetarian-Kabuli-Pulao-ve-3-scaled.jpg",
      alt: "Vegetarian Kabuli Pulao",
      id: "20",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Shiryakh-2-scaled.jpg",
      alt: "Shiryakh 2",
      id: "21",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Qorma-e-Murgh-2-scaled.jpg",
      alt: "Qorma e Murgh 2",
      id: "22",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-29-scaled.jpg",
      alt: "Kabuli August LR 29",
      id: "23",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/09/Kabuli_Brandbook_Elab-1_240204_2051241-13-8-1.png",
      alt: "Kabuli Brandbook",
      id: "24",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/09/aef22a6b50ec89df550deb5644e9284c-scaled.jpg",
      alt: "aef22a6b50ec89df550deb5644e9284c",
      id: "25",
    },
    {
      src: "https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-2-scaled.jpg",
      alt: "Kabuli August LR 2",
      id: "26",
    },
  ];

  return (
    <div className="text-black">
      <h2 className="text-center text-4xl font-bold mt-5"> GALLERY </h2>
      <p className="text-left text-[15px] mt-5 max-w-2xl mx-auto py-3">
        Our gallery showcases Kabuli’s minimalist design, offering a cosy,
        home-like atmosphere. Each dish and non-alcoholic drink is presented
        with artistry and care, reflecting the essence of Afghan hospitality.
      </p>
      <div className="max-w-3xl flex mx-auto">
        <div>
          <img
            src="https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-33-scaled.jpg"
            alt=""
          />
        </div>
        <div className="flex-1"></div>
      </div>
      <div className=" flex gap-2 max-w-3xl mx-auto mt-5">
        <div>
          <div className="flex gap-2">
            <img
              src="https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-75-scaled.jpg"
              alt=""
            />
          </div>
          <div className="py-2">
            <img
              src="https://kabuli.co.uk/wp-content/uploads/2024/09/Kabuli_Brandbook_Elab-1_240204_2051241-13-3-5.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex gap-2  ">
            <div>
              <img
                src="https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-28-scaled.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://kabuli.co.uk/wp-content/uploads/2024/10/Kabuli-August-LR-38-scaled.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://kabuli.co.uk/wp-content/uploads/2024/10/leopardnew.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
