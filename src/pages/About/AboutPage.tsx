import Button from "../../components/Button";
import {
  BsBuildings,
  BsClipboardPulse,
  BsCommand,
  BsGraphUpArrow,
  BsArrowRight,
} from "react-icons/bs";
import { NavLinkSlugs } from "../../components/Navbar";
import { cn } from "../../utils/helpers";

interface IAboutCardItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  isUpper?: boolean;
}

const AboutCardItems: IAboutCardItem[] = [
  {
    icon: <BsBuildings />,
    title: "Eius provident",
    desc: "Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem",
  },
  {
    icon: <BsClipboardPulse />,
    title: "Rerum aperiam",
    desc: "Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia",
    isUpper: true,
  },
  {
    icon: <BsCommand />,
    title: "Veniam omnis",
    desc: "Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti",
  },
  {
    icon: <BsGraphUpArrow />,
    title: "Delares sapiente",
    desc: "Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda",
    isUpper: true,
  },
];

const AboutPage = () => {
  return (
    <div id={NavLinkSlugs.ABOUT} className="bg-aboutBg py-14">
      <div className="container flex flex-col sm:gap-10 xl2:gap-0 xl2:flex-row items-center">
        {/* About Description */}
        <div className="basis-5/12">
          <h3 className="lg:text-base font-medium py-2 px-5 text-accent bg-[#f4ebeb] inline-block rounded">
            About Us
          </h3>

          <h2 className="font-bold text-3xl mt-2 text-primary">
            Ducimus rerum libero reprehenderit cumque
          </h2>

          <p className="mt-2 mb-4 font-opensans text-default">
            Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque
            alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum
            quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem
            tempora deleniti soluta.
          </p>

          <Button className="flex gap-2 items-center group">
            <span>Read More</span>
            <span className="duration-300 group-hover:translate-x-2">
              <BsArrowRight />
            </span>
          </Button>
        </div>

        {/* About cards */}
        <div className="basis-7/12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {AboutCardItems.map((aboutCardItem: IAboutCardItem) => {
            return (
              <GenerateAboutCard
                key={aboutCardItem.title}
                aboutCardItem={aboutCardItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

const GenerateAboutCard = ({
  aboutCardItem,
}: {
  aboutCardItem: IAboutCardItem;
}) => {
  return (
    <div
      className={cn(
        "bg-white px-10 py-12 group rounded-xl shadow-2xl",
        aboutCardItem?.isUpper && "md:-mt-8 md:mb-8"
      )}
    >
      <div className="text-3xl w-20 h-20 rounded-full flex justify-center items-center mb-6 text-accent bg-[#f4ebeb] duration-300 group-hover:bg-accent group-hover:text-white">
        {aboutCardItem.icon}
      </div>

      <h3 className="text-2xl mb-3 font-bold text-primary">
        {aboutCardItem.title}
      </h3>

      <p className="text-default font-light font-opensans">
        {aboutCardItem.desc}
      </p>
    </div>
  );
};
