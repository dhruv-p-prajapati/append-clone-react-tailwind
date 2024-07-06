import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { cn } from "../../utils/helpers";

interface IAccordianItem {
  id: number;
  title: string;
  desc: string;
}

const AccordianItems: IAccordianItem[] = [
  {
    id: 1,
    title: "Non consectetur a erat nam at lectus urna duis?",
    desc: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    id: 2,
    title:
      "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    desc: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    id: 3,
    title: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    desc: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
  },
  {
    id: 4,
    title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    desc: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    id: 5,
    title: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    desc: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
  },
];

const FaqAccordian = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  return (
    <div className="w-full mx-auto flex flex-col gap-5">
      {AccordianItems.map((accordianItem: IAccordianItem) => {
        return (
          <GenerateAccordianItem
            accordianItem={accordianItem}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        );
      })}
    </div>
  );
};

const GenerateAccordianItem = ({
  accordianItem,
  activeIndex,
  setActiveIndex,
}: {
  accordianItem: IAccordianItem;
  activeIndex: number[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  return (
    <div key={accordianItem.id} className="shadow-accordian p-4">
      <div
        className="text-left flex justify-between items-center cursor-pointer"
        onClick={() => {
          activeIndex.includes(accordianItem.id)
            ? setActiveIndex((prevIndexs) => {
                return prevIndexs.filter(
                  (prevIndex) => prevIndex !== accordianItem.id
                );
              })
            : setActiveIndex((prevIndexs) => [...prevIndexs, accordianItem.id]);
        }}
      >
        <div className="flex gap-2 items-start justify-center text-lg">
          <span className="text-accent">{accordianItem.id}.</span>
          <span
            className={cn(
              "font-medium duration-300 hover:text-accent",
              activeIndex.includes(accordianItem.id) && "text-accent"
            )}
          >
            {accordianItem.title}
          </span>
        </div>
        <div
          className={cn(
            "duration-300",
            activeIndex.includes(accordianItem.id) && "rotate-90 text-accent"
          )}
        >
          <BsChevronRight />
        </div>
      </div>
      <div
        className={cn(
          "duration-300 font-opensans",
          activeIndex.includes(accordianItem.id)
            ? "py-4"
            : "overflow-hidden h-0 w-0"
        )}
      >
        <p>{accordianItem.desc}</p>
      </div>
    </div>
  );
};

export default FaqAccordian;
