import { BsBox, BsCheck, BsRocket, BsSend, BsX } from "react-icons/bs";
import Button from "../../components/Button";
import { NavLinkSlugs } from "../../components/Navbar";
import SectionTitle from "../../components/SectionTitle";
import { cn } from "../../utils/helpers";

interface IFeatureItem {
  desc: string;
  isAvailable?: boolean;
}

interface IPricingItem {
  title: string;
  icon: React.ReactNode;
  price: string;
  features: IFeatureItem[];
  isMiddle?: boolean;
}

const PricingItems: IPricingItem[] = [
  {
    title: "Free Plan",
    icon: <BsBox />,
    price: "0",
    features: [
      {
        desc: "Quam adipiscing vitae proin",
      },
      {
        desc: "Nec feugiat nisl pretium",
      },
      {
        desc: "Nulla at volutpat diam uteera",
      },
      {
        desc: "Pharetra massa massa ultricies",
        isAvailable: false,
      },
      {
        desc: "Massa ultricies mi quis hendrerit",
        isAvailable: false,
      },
    ],
  },
  {
    title: "Business Plan",
    icon: <BsRocket />,
    price: "29",
    features: [
      {
        desc: "Quam adipiscing vitae proin",
      },
      {
        desc: "Nec feugiat nisl pretium",
      },
      {
        desc: "Nulla at volutpat diam uteera",
      },
      {
        desc: "Pharetra massa massa ultricies",
      },
      {
        desc: "Massa ultricies mi quis hendrerit",
      },
    ],
    isMiddle: true,
  },
  {
    title: "Developer Plan",
    icon: <BsSend />,
    price: "49",
    features: [
      {
        desc: "Quam adipiscing vitae proin",
      },
      {
        desc: "Nec feugiat nisl pretium",
      },
      {
        desc: "Nulla at volutpat diam uteera",
      },
      {
        desc: "Pharetra massa massa ultricies",
      },
      {
        desc: "Massa ultricies mi quis hendrerit",
      },
    ],
  },
];

const PricingPage = () => {
  return (
    <div id={NavLinkSlugs.PRICING}>
      <SectionTitle
        title="Pricing"
        desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <div className="container flex flex-col lg:flex-row gap-5 justify-center items-center mt-10">
        {PricingItems.map((pricingItem: IPricingItem) => {
          return <GeneratePricingCard pricingItem={pricingItem} />;
        })}
      </div>
    </div>
  );
};

const GeneratePricingCard = ({
  pricingItem,
}: {
  pricingItem: IPricingItem;
}) => {
  return (
    <div
      className={cn(
        "py-14 mb-14 px-10 relative shadow-lg rounded-2xl w-full lg:basis-1/3 bg-white",
        pricingItem.isMiddle &&
          "lg:scale-[1.15] z-10 border-[3px] border-accent"
      )}
    >
      {/* Title  */}
      <h3 className="font-semibold mb-4 text-xl text-center">
        {pricingItem.title}
      </h3>

      {/* Icon */}
      <div className="mt-7 mb-5 rounded-full flex justify-center items-center before:absolute before:h-20 before:w-20 before:rounded-full before:bg-[#f8cbcb] before:transform before:translate-z-[-1] before:z-20 after:absolute after:h-[102px] after:w-[102px] after:rounded-full after:bg-[#fcecec] after:transform after:translate-z-[-2] after:z-10">
        <i className="text-3xl text-white z-30 bg-accent rounded-full p-4">
          {pricingItem.icon}
        </i>
      </div>

      {/* Price  */}
      <h4 className="text-5xl text-accent font-bold mb-6 text-center">
        <sup className="text-2xl -top-4">$</sup>
        {pricingItem.price}
        <span className="text-lg">/ month</span>
      </h4>

      {/* Features */}
      <ul className="py-5">
        {pricingItem.features.map((feature: IFeatureItem) => {
          return (
            <li className="py-[10px] flex items-center font-opensans opacity-85">
              <i
                className={cn(
                  "text-2xl",
                  feature?.isAvailable === false
                    ? "text-[#bcbdbe]"
                    : "text-[#059552]"
                )}
              >
                {feature?.isAvailable === false ? <BsX /> : <BsCheck />}
              </i>
              <span
                className={cn(
                  feature?.isAvailable === false
                    ? "text-[#bcbdbe] line-through"
                    : "text-primary"
                )}
              >
                {feature.desc}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Button */}
      <div className="text-center">
        <Button className="py-2 px-10 font-semibold opacity-85 rounded-full bg-white text-primary border border-primary border-opacity-20 hover:bg-accent hover:text-white hover:opacity-100">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default PricingPage;
