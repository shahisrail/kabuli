import React from "react";

const Gallery = () => {


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
