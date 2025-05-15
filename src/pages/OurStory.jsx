import React from "react";
import Slider from "../Components/Slider";

const OurStory = () => {
  return (
    <div className="text-black py-8">
      <h2 className="text-center text-2xl font-bold mb-6 md:text-3xl">OUR STORY</h2>
      <h3 className="text-center text-xl font-bold mt-5 mb-4 md:text-2xl">
        The Journey of Farhad: <br className="hidden md:block" /> From Kabul to
        Birmingham
      </h3>
      <p className="text-left text-sm mt-5 max-w-2xl mx-auto px-4 md:text-base">
        Farhad was born in the vibrant, bustling streets of Kabul, where the
        scent of spices filled the air and the sound of laughter echoed through
        every corner. In his family, food was not just a means of sustenance but
        a way of life—a tradition passed down through generations.
      </p>
      <p className="text-left text-sm mt-5 max-w-2xl mx-auto px-4 md:text-base">
        Among all the dishes that graced their table, one stood out above the
        rest: Kabuli Palau, the national dish of Afghanistan. For Farhad, this
        dish was more than just a meal; it was a symbol of togetherness, love,
        and the warmth of home.
      </p>
      <p className="text-left text-sm mt-5 max-w-2xl mx-auto px-4 md:text-base">
        As a young man, Farhad dreamed of sharing this part of his culture with
        the world. However, circumstances forced him to leave his beloved Kabul
        and seek a new life in Birmingham, England. The transition was not easy.
        The streets were different, the people unfamiliar, and the weather often
        dreary compared to the sunlit days of his homeland. But Farhad was
        determined to make a new life for himself and carry a piece of
        Afghanistan with him.
      </p>
      <div className="flex justify-center items-center mt-5 px-4">
        <img src="/assets/ourSoty.jpg" alt="our Story" className="w-full max-w-md" />
      </div>
      <p className="text-left text-sm mt-5 max-w-2xl mx-auto px-4 md:text-base">
        Birmingham was a city of diversity, where people from all walks of life
        and corners of the globe came together. Yet, Farhad noticed that
        something was missing—a true taste of Afghan cuisine, the kind that
        could transport one back to the warm kitchens of Kabul. With little more
        than his passion for cooking and a heart full of determination, Farhad
        set out to bring the flavours of his homeland to this new city.
      </p>
      <p className="text-left text-sm mt-5 max-w-2xl mx-auto px-4 md:text-base">
        He began by cooking Kabuli Pulao for his friends, using the recipes he
        had learned from his mother and grandmother. Word of Farhad’s culinary
        skills quickly spread, and soon, people from all over the community were
        gathering at his small apartment, eager to taste the dish that had
        brought so much comfort and joy to his life. For Farhad, it wasn’t just
        about the food; it was about creating a sense of community, of bringing
        people together to share in something special.
      </p>
      <div className="mt-8">
        <Slider />
      </div>
      <p className="text-left text-sm mt-5 max-w-2xl mx-auto px-4 md:text-base">
        40% completed Realising the potential to introduce a broader audience to
        the rich flavours of Afghan cuisine, Farhad decided to take a bold step.
        He would open his own kitchen, a place where anyone could come and
        experience the authentic taste of Kabuli Pulao and other traditional
        Afghan dishes. This would be no ordinary restaurant—it would be a place
        where every meal told a story, where every bite took you on a journey to
        the heart of Afghanistan.
      </p>
      <h2 className="text-center text-2xl font-bold mt-8 mb-6 md:text-3xl">
        And so, Kabuli was born.
      </h2>
      <p className="text-left text-sm mt-5 max-w-2xl mx-auto px-4 md:text-base">
        Named after the dish that started it all, Kabuli is more than just a
        kitchen; it’s a celebration of Afghan culture, a testament to Farhad’s
        journey, and a tribute to the power of food to bring people together.
      </p>
      <p className="text-left text-sm mt-5 max-w-2xl mx-auto px-4 md:text-base">
        Each dish is crafted with care, using the finest ingredients and
        traditional cooking methods, ensuring that every customer experiences
        the true taste of Afghanistan.
      </p>
      <p className="text-left text-sm mt-5 max-w-2xl mx-auto px-4 md:text-base">
        Farhad’s journey from Kabul to Birmingham is a reminder that home is not
        just a place; it’s a feeling, one that can be recreated and shared with
        others no matter where you are in the world.
      </p>
      <div className="flex justify-center items-center mt-5 px-4">
        <img
          className="w-full max-w-xl"
          src="/assets/ourstoryimage.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurStory;