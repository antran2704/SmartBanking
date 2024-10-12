"use client";

import useScrollActiveNavbar from "~/app/hooks/useScrollActiveNavbar";

const Card = () => {
  const { ref } = useScrollActiveNavbar({ path: "#feature" });

  return (
    <div
      ref={ref}
      id="feature"
      className="container flex md:flex-row flex-col items-center px-5 py-10 gap-5"
    >
      <div className="flex flex-col md:items-start items-center md:w-1/2 sm:w-3/4 w-full">
        <h2 className="md:text-5xl text-4xl md:text-left text-center font-bold text-primary">
          One card for all your payments
        </h2>
        <h3 className="lg:w-2/3 sm:w-3/4 w-full text-lg md:text-left text-center text-neutral-100 md:mt-10 mt-5">
          Get 3% back on everything you buy with the Draft card. Register today
          and enjoy every aspect of your business.
        </h3>
      </div>
      <div className="md:w-1/2 sm:w-3/4 w-full">
        <img
          src="/images/credit_card.png"
          alt="Card image"
          title="Card image"
          width={"100"}
          height={"100"}
          className="w-full object-contain object-center mx-auto"
        />
      </div>
    </div>
  );
};

export default Card;
