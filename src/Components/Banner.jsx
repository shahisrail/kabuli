import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[5px]">
      <img
        src="/assets/Banner.jpg"
        alt="Banner"
        className="mx-auto w-full max-w-6xl  "
      />
      <div className="w-full flex flex-col items-center justify-center px-4">
        <h2 className="text-center mt-12  text-[23px] md:text-[35px] max-w-2xl font-semibold">
          Lemar: Gateway to Afghan Flavours
        </h2>

        <div className="mt-3 py-2   text-[15px]  max-w-2xl text-left">
          <p>
            Step into Lemar and embark on a culinary journey through the rich
            and diverse flavors of Afghanistan. Our menu is a gateway to the
            heart of Afghan cuisine, from our signature Lemar Pulao to our
            freshly grilled to perfection kebabs and a wide selection of Qormas,
            crafted to meet all dietary preferences. At Lemar, we are dedicated
            to bringing authentic tastes and traditions to the vibrant streets
            of Birmingham.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
