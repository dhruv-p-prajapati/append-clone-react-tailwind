import Button from "../../components/Button";
import { NavLinkSlugs } from "../../components/Navbar";

const HomePage = () => {
  return (
    <div
      id={NavLinkSlugs.HOME}
      className="h-screen bg-cover bg-center bg-hero-image flex justify-center items-center"
    >
      <div className="w-[95vw] md:w-[85%]">
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-3xl lg:text-5xl text-white font-bold">
            Welcome to Our Website
          </h1>
          <p className="text-white opacity-80 text-base lg:text-xl font-opensans">
            We are team of talented designers making websites with Bootstrap
          </p>
        </div>
        <div className="mt-6 flex bg-white rounded w-[min(500px,95vw)]">
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
