import Button from "../../components/Button";
import SectionTitle from "../../components/SectionTitle";
import { BiCheck } from "react-icons/bi";

const FeaturePage = () => {
  return (
    <div className="py-16">
      <SectionTitle
        title="Features"
        desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <div className="container flex gap-6 flex-col-reverse lg:flex-row justify-center items-center">
        {/* Content */}
        <div data-aos="fade-up" data-aos-delay="200" className="basis-5/12">
          <h2 className="font-bold text-3xl mt-2 text-primary">
            Corporis temporibus maiores provident
          </h2>

          <p className="mt-2 mb-4 text-default font-opensans opacity-90">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>

          <Button>Get Started</Button>
        </div>

        {/* Images */}
        <div
          data-aos="zoom-out"
          data-aos-delay="100"
          className="basis-7/12 grid grid-cols-12 relative"
        >
          <img
            src="/images/features-light-1.jpg"
            alt="Features light 1"
            className="row-start-1 col-start-1 col-span-8 mt-[20%] z-10 border-[6px] border-white shadow-xl"
          />
          <img
            src="/images/features-light-2.jpg"
            alt="Features light 2"
            className="col-start-4 col-end-12 row-start-1 border-[6px] border-white shadow-xl"
          />
        </div>
      </div>

      <div className="container flex gap-6 flex-col lg:flex-row justify-between items-center mt-24">
        {/* Image */}
        <div data-aos="zoom-in" className="basis-1/2">
          <img
            src="/images/features-light-3.jpg"
            alt="Features light 3"
            className="border-[6px] border-white shadow-xl"
          />
        </div>

        {/* content */}
        <div data-aos="fade-up" className="basis-5/12">
          <h3 className="text-2xl font-bold">
            Sunt consequatur ad ut est nulla
          </h3>

          <p className="font-opensans mb-4">
            Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia
            minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor
            doloremque.
          </p>

          <ul className="mb-4">
            <li className="flex items-center pb-2">
              <BiCheck className="pr-1 text-xl text-accent" />
              <span className="font-opensans">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </li>

            <li className="flex items-center pb-2">
              <BiCheck className="pr-1 text-xl text-accent" />
              <span className="font-opensans">
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </span>
            </li>

            <li className="flex items-center pb-2">
              <BiCheck className="pr-1 text-xl text-accent" />
              <span className="font-opensans">
                Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.
              </span>
            </li>
          </ul>

          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
