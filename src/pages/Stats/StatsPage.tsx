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
    <div className="bg-stats-image bg-cover bg-center mb-14">
      <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-4 py-40 px-28">
        {StatsItems.map((statsItem: IStatsItem) => {
          return <GenerateStatsItem statsItem={statsItem} />;
        })}
      </div>
    </div>
  );
};

const GenerateStatsItem = ({ statsItem }: { statsItem: IStatsItem }) => {
  return (
    <div className="flex justify-center items-center gap-2 flex-col text-white font-bold">
      <div className="text-5xl tracking-wider">{statsItem.statsNumber}</div>
      <div className="text-[#bfbebc]">{statsItem.statsTitle}</div>
    </div>
  );
};

export default StatsPage;
