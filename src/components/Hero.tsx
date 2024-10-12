"use client";

import { Button } from "@mantine/core";
import useScrollActiveNavbar from "~/app/hooks/useScrollActiveNavbar";

const Hero = () => {
  const { ref } = useScrollActiveNavbar({ path: "/" });

  return (
    <div
      ref={ref}
      className="bg-[url('/images/mask.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container flex lg:flex-row flex-col justify-center md:py-40 py-20 px-5 gap-20">
        <div className="lg:w-2/4 md:w-3/4 w-full pt-10 mx-auto">
          <h1 className="lg:text-6xl sm:text-3xl text-2xl font-bold text-white md:text-left text-center">
            Smart Banking for freelancers
          </h1>
          <p className="text-lg md:py-10 py-5 text-white md:text-left text-center">
            Draft is a revolutionary mobile app built to help you manage your
            business easily and save your money.
          </p>

          <Button
            size="lg"
            radius={"lg"}
            rightSection={
              <img
                src="/images/arrow_right.png"
                alt="button"
                title="button"
                width={"100"}
                height={"100"}
                className="size-6 min-w-6"
              />
            }
            className="block bg-[#16194F] hover:bg-primary text-white px-10 md:mx-0 mx-auto transition-all ease-linear duration-75"
          >
            Register Now
          </Button>
        </div>

        <div className="relative lg:w-[600px] md:w-3/4 w-full mx-auto">
          <img
            src="/images/banner_phone.png"
            alt="Phone image"
            title="Phone image"
            width={"100"}
            height={"100"}
            className="w-full object-contain object-center mx-auto"
          />

          <img
            src="/images/shape3.png"
            alt="Phone image"
            title="Phone image"
            width={"100"}
            height={"100"}
            className="hero__animate--shape3 absolute md:block hidden top-0 -left-10 lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px] object-contain object-center shadow-lg rounded-full"
          />

          <img
            src="/images/shape1.png"
            alt="Phone image"
            title="Phone image"
            width={"100"}
            height={"100"}
            style={{ "--duration": "2.6s" } as React.CSSProperties}
            className="hero__animate--shape3 absolute md:block hidden top-0 right-0 lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] w-[100px] h-[100px] object-contain object-center"
          />

          <img
            src="/images/shape4.png"
            alt="Phone image"
            title="Phone image"
            width={"100"}
            height={"100"}
            className="hero__animate--shape2 absolute md:block hidden bottom-24 lg:-left-20 -left-14 lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] w-[100px] h-[100px] object-contain object-center"
          />

          <img
            src="/images/shape2.png"
            alt="Phone image"
            title="Phone image"
            width={"100"}
            height={"100"}
            style={{ "--duration": "3s" } as React.CSSProperties}
            className="hero__animate--shape2 absolute md:block hidden bottom-28 right-0 lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] w-[80px] h-[80px] object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
