const Support = () => {
  return (
    <div className="container flex md:flex-row flex-col items-center justify-between px-5 py-10 gap-5">
      <div className="flex flex-col md:items-start items-center md:w-1/2 sm:w-3/4 w-full">
        <h2 className="md:text-5xl text-4xl md:text-left text-center font-bold text-primary">
          We support you in 5 different languages
        </h2>
        <h3 className="lg:w-2/3 sm:w-3/4 w-full text-lg md:text-left text-center text-neutral-100 md:mt-10 mt-5">
          Our support team in here to help you in 5 languages - English, French,
          Spanish,Polish and German.
        </h3>

        <div className="flex items-center py-5 gap-2">
          <img
            src="/images/profile.png"
            alt="Profile image"
            title="Profile image"
            width={"100"}
            height={"100"}
            className="w-full h-16 object-contain object-center mx-auto"
          />
          <span className="text-lg text-neutral-100 font-medium">+20</span>
        </div>
      </div>
      <div className="md:w-1/2 sm:w-3/4 w-full">
        <img
          src="/images/chat.png"
          alt="Card image"
          title="Card image"
          width={"100"}
          height={"100"}
          className="md:w-[400px] sm:w-3/4 w-full object-contain object-center mx-auto"
        />
      </div>
    </div>
  );
};

export default Support;
