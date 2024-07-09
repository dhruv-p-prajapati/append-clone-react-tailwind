import Button from "../../components/Button";

const CtaPage = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-cta-image bg-fixed top-0 left-0 bg-cover bg-center"
    >
      <div className="container flex flex-col justify-center items-center text-white z-10 py-20">
        <div
          className="w-full lg:w-5/6 flex flex-col justify-center items-center lg:px-3"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <h3 className="text-3xl font-bold">Call To Action</h3>
          <p className="font-opensans mt-3 mb-4 text-center text-white">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <Button className="font-medium tracking-wide py-3 px-10 mt-[10px] border-2 border-white bg-transparent hover:opacity-100 hover:border-accent hover:bg-accent ">
            Call To Action
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CtaPage;
