import { Button } from "@mantine/core";
import { FaCheck } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="container px-5 py-10">
      <div className="flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-primary">
          An exceptional service,{" "}
          <span className="text-accent">at the right price.</span>
        </h2>
        <h3 className="text-lg texxt-[#16194F] pt-5">
          Start with our free plan and switch to premium as you grow
        </h3>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between py-10 gap-10">
        <div className="md:w-1/2 sm:w-3/4 w-full flex flex-col items-center p-10 bg-white rounded-[50px] shadow-lg gap-8">
          <h3 className="lg:text-3xl md:text-2xl text-xl font-medium">FREE</h3>
          <h4 className="lg:text-4xl md:text-3xl text-2xl">
            <strong className="font-medium">$0</strong>
            <span className="md:text-2xl text-xl">/m</span>
          </h4>
          <p className="text-lg text-center text-neutral-100">
            Manage your business with a simple and efficient account
          </p>

          <Button
            radius={"lg"}
            size="lg"
            variant="outline"
            className="border-[#16194F] text-[#16194F] hover:text-white hover:bg-[#16194F]">
            Get Started
          </Button>

          <img
            src="/images/credit_card.png"
            alt="Card image"
            title="Card image"
            width={"100"}
            height={"100"}
            className="w-full object-contain object-center mx-auto"
          />

          <ul className="w-full flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">10 free local transfer</p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">Multi-user access</p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">Prepaid debit cards</p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">Virtual cards</p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-[#B7B7B7]" />
              <p className="md:text-lg text-base text-[#B7B7B7]">
                Priority 24/7 support
              </p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-[#B7B7B7]" />
              <p className="md:text-lg text-base text-[#B7B7B7]">
                Exchange 24 currencies
              </p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-[#B7B7B7]" />
              <p className="md:text-lg text-base text-[#B7B7B7]">
                Free payment to other Draft accounts
              </p>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 sm:w-3/4 w-full flex flex-col items-center p-10 bg-white rounded-[50px] shadow-lg gap-8">
          <h3 className="lg:text-3xl md:text-2xl text-xl font-medium">PREMIUM</h3>
          <h4 className="lg:text-4xl md:text-3xl text-2xl">
            <strong className="font-medium">$8</strong>
            <span className="md:text-2xl text-xl">/m</span>
          </h4>
          <p className="text-lg text-center text-neutral-100">
            Manage your business with a simple and efficient account
          </p>

          <Button
            radius={"lg"}
            size="lg"
            variant="outline"
            className="border-[#16194F] text-[#16194F] hover:text-white hover:bg-[#16194F]">
            Get Started
          </Button>

          <img
            src="/images/credit_card.png"
            alt="Card image"
            title="Card image"
            width={"100"}
            height={"100"}
            className="w-full object-contain object-center mx-auto"
          />

          <ul className="w-full flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">10 free local transfer</p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">Multi-user access</p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">Prepaid debit cards</p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">Virtual cards</p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">
                Priority 24/7 support
              </p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">
                Exchange 24 currencies
              </p>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-2xl text-primary" />
              <p className="md:text-lg text-base">
                Free payment to other Draft accounts
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
