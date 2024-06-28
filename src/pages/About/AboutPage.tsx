import Button from "../../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";

interface IAboutCardItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  isUpper?: boolean;
}

const AboutCardItems: IAboutCardItem[] = [
  {
    icon: <FaArrowRightLong />,
    title: "Eius provident",
    desc: "Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem",
  },
  {
    icon: <FaArrowRightLong />,
    title: "Rerum aperiam",
    desc: "Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia",
    isUpper: true,
  },
  {
    icon: <FaArrowRightLong />,
    title: "Veniam omnis",
    desc: "Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti",
  },
  {
    icon: <FaArrowRightLong />,
    title: "Delares sapiente",
    desc: "Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda",
    isUpper: true,
  },
];

const AboutPage = () => {
  return (
    <div className="bg-aboutBg py-14">
      <div className="w-screen mx-auto lg:w-[85vw] flex flex-col lg:flex-row gap-10 items-center">
        {/* About Description */}
        <div className="px-12 basis-5/12">
          <h3 className="lg:text-base font-medium py-2 px-5 text-accent bg-[#f4ebeb] inline-block rounded">
            About Us
          </h3>

          <h2 className="font-bold text-3xl mt-2 text-primary">
            Ducimus rerum libero reprehenderit cumque
          </h2>

          <p className="mt-2 mb-4">
            Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque
            alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum
            quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem
            tempora deleniti soluta.
          </p>

          <Button className="flex items-center group relative pl-4 pr-5">
            <span className="mr-3">Read More</span>
            <span className="duration-300 absolute right-3 group-hover:right-2">
              <FaArrowRightLong />
            </span>
          </Button>
        </div>

        {/* About cards */}
        <div className="flex basis-7/12 flex-wrap justify-center gap-5">
          {AboutCardItems.map((aboutCardItem: IAboutCardItem) => {
            return <GenerateAboutCard aboutCardItem={aboutCardItem} />;
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
      className={`w-[min(90vw,350px)] bg-white px-8 py-10 group rounded-xl shadow-2xl ${
        aboutCardItem?.isUpper ? "md:-mt-8 md:mb-8" : ""
      }`}
    >
      <div className="w-20 h-20 rounded-full flex justify-center items-center mb-6 text-accent bg-[#f4ebeb] duration-300 group-hover:bg-accent group-hover:text-white">
        {aboutCardItem.icon}
      </div>

      <h3 className="text-2xl mb-3 font-bold text-primary">
        {aboutCardItem.title}
      </h3>

      <p className="text-default font-light">{aboutCardItem.desc}</p>
    </div>
  );
};
