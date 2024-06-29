interface ISectionTitleProps {
  title: string;
  desc: string;
}

const SectionTitle = ({ title, desc }: ISectionTitleProps) => {
  return (
    <div className="flex justify-center items-center flex-col gap-1">
      <div className="before:w-12 before:inline-block before:h-[2px] before:mr-4 before:bg-accent after:w-11 after:inline-block after:h-[2px] after:ml-4 after:bg-accent text-3xl font-bold flex justify-center items-center tracking-wide text-default">
        {title}
      </div>
      <div className="font-opensans text-center text-primary">{desc}</div>
    </div>
  );
};

export default SectionTitle;
