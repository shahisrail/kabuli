import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img
        src="/assets/Banner.jpg"
        alt="Banner"
        className="mx-auto w-full max-w-6xl  "
      />
      <div className="w-full flex flex-col items-center justify-center px-4">
        <h2 className="text-center mt-4 text-black text-[35px] max-w-2xl font-semibold">
          Kabuli: Gateway to Afghan Flavours
        </h2>

        <div className="mt-4 text-black text-[16px] font-medium max-w-2xl text-left">
          <p>
            Step into Kabuli and embark on a culinary journey through the rich
            and diverse flavors of Afghanistan. Our menu is a gateway to the
            heart of Afghan cuisine, from our signature Kabuli Pulao to our
            freshly grilled to perfection kebabs and a wide selection of Qormas,
            crafted to meet all dietary preferences. At Kabuli, we are dedicated
            to bringing authentic tastes and traditions to the vibrant streets
            of Birmingham.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
