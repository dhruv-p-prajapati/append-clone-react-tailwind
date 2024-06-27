import Button from "../../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";

interface ICardData {
  icon: React.ReactNode;
  title: string;
  desc: string;
  isUpper?: boolean;
}

const CardData: ICardData[] = [
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
      {/* About Description */}
      <div className="w-[85vw] mx-auto flex flex-col lg:flex-row gap-10 items-center">
        <div className="lg:w-[40%]">
          <h3 className="text-base font-medium py-2 px-5 text-accent bg-[#f4ebeb] inline-block rounded">
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
        <div className="lg:w-[59%] flex flex-wrap gap-10">
          {CardData.map((data: ICardData) => {
            return <GenerateAboutCard data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

const GenerateAboutCard = ({ data }: { data: ICardData }) => {
  return (
    <div
      className={`w-[min(90vw,350px)] bg-white px-8 py-10 group rounded-xl shadow-2xl ${
        data?.isUpper ? "lg:-mt-8 lg:mb-8" : ""
      }`}
    >
      <div className="w-20 h-20 rounded-full flex justify-center items-center mb-6 text-accent bg-[#f4ebeb] duration-300 group-hover:bg-accent group-hover:text-white">
        {data.icon}
      </div>

      <h3 className="text-2xl mb-3 font-bold text-primary">{data.title}</h3>

      <p className="text-default font-light">{data.desc}</p>
    </div>
  );
};
