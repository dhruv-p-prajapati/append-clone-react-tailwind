const DetailPageHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="py-20 w-[95vw] sm:w-[70vw] lg:w-[85vw] mx-auto">
      <h1 className="text-center bg-white font-bold text-4xl mb-4">{title}</h1>
      <p className="text-center text-sm bg-white lg:w-2/3 mx-auto">{desc}</p>
    </div>
  );
};

export default DetailPageHeader;
