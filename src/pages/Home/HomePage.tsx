import Button from "../../components/Button";
import { NavLinkSlugs } from "../../components/Navbar";

const HomePage = () => {
  return (
    <div
      id={NavLinkSlugs.HOME}
      data-aos="fade-in"
      className="flex h-screen items-center justify-center bg-hero-image bg-cover bg-center"
    >
      <div className="container">
        <div className="flex flex-col items-start gap-3">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl font-bold text-white lg:text-5xl"
          >
            Welcome to Our Website
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-opensans text-base text-white opacity-80 lg:text-xl"
          >
            We are team of talented designers making websites with Bootstrap
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 flex w-[min(500px,95vw)] rounded bg-white"
        >
          <input
            type="text"
            placeholder="Enter email address"
            className="py-5 px-3 rounded-[7px] focus:ring-0 focus:outline-none flex-1"
          />
          <div className="flex items-center pr-3">
            <Button className="py-2 px-5 rounded-[7px] font-opensans">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
