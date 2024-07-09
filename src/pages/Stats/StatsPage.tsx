import CountUp from "react-countup";
interface IStatsItem {
  statsNumber: number;
  statsTitle: string;
}

const StatsItems: IStatsItem[] = [
  {
    statsNumber: 232,
    statsTitle: "Clients",
  },
  {
    statsNumber: 521,
    statsTitle: "Projects",
  },
  {
    statsNumber: 1453,
    statsTitle: "Hours Of Support",
  },
  {
    statsNumber: 32,
    statsTitle: "Workers",
  },
];

const StatsPage = () => {
  return (
    <div data-aos="fade-up" className="bg-stats-image bg-cover bg-center">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="container grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-4 py-40"
      >
        {StatsItems.map((statsItem: IStatsItem) => {
          return (
            <GenerateStatsItem
              key={statsItem.statsTitle}
              statsItem={statsItem}
            />
          );
        })}
      </div>
    </div>
  );
};

const GenerateStatsItem = ({ statsItem }: { statsItem: IStatsItem }) => {
  return (
    <div className="flex justify-center items-center gap-2 flex-col text-white font-bold">
      <div className="text-5xl tracking-wider font-opensans">
        <CountUp start={0} end={statsItem.statsNumber} duration={2} />
      </div>
      <div className="text-[#bfbebc]">{statsItem.statsTitle}</div>
    </div>
  );
};

export default StatsPage;
