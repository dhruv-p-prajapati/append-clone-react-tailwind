import FaqAccordian from "./FaqAccordian";

const FaqPage = () => {
  return (
    <div className="container py-16 flex flex-col gap-5 lg:flex-row justify-center items-start">
      <div
        className="basis-1/3 lg:px-12"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <h3 className="flex flex-col text-[34px] text-primary ">
          <span className="font-normal">Frequently Asked</span>
          <strong className="font-bold leading-[1.2]">Questions</strong>
        </h3>

        <p className="text-default opacity-70 font-opensans mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="1500" className="basis-2/3">
        <FaqAccordian />
      </div>
    </div>
  );
};

export default FaqPage;
