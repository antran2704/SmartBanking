import { Button } from "@mantine/core";

const Statistic = () => {
  return (
    <div className="container flex md:flex-row flex-col-reverse items-center px-5 py-10 gap-20">
      <div className="md:w-1/2 sm:w-3/4 w-full">
        <div className="flex items-center sm:flex-row flex-col gap-5">
          <div className="sm:w-1/2 w-full p-10 rounded-[50px] bg-white shadow-lg">
            <h3 className="text-lg">Balance</h3>
            <h4 className="md:text-4xl text-3xl font-bold text-primary">$5,600</h4>
          </div>
          <div className="sm:w-1/2 w-full p-10 rounded-[50px] bg-white shadow-lg">
            <h3 className="text-lg">Balance</h3>
            <h4 className="md:text-4xl text-3xl font-bold text-primary">$5,600</h4>
          </div>
        </div>
        <div className="w-full rounded-[50px] bg-white shadow-lg p-10 mt-10">
          <img
            src="/images/bars.png"
            alt="Phone image"
            title="Phone image"
            width={"100"}
            height={"100"}
            className="w-full object-contain object-center mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col md:items-start items-center md:w-1/2 sm:w-3/4 w-full">
        <h2 className="md:text-5xl text-4xl md:text-left text-center font-bold text-primary">
          Manage your finances like a pro in no time
        </h2>
        <h3 className="lg:w-2/3 sm:w-3/4 w-full text-lg md:text-left text-center text-neutral-100 md:my-10 my-5">
          With Draft, book keeping, banking, and invoices are all in one place.
          You will always know where you stand.
        </h3>
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
          className="bg-[#16194F] hover:bg-primary text-white px-10 transition-all ease-linear duration-75">
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default Statistic;
