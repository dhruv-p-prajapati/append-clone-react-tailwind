const DetailPageHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="container py-20">
      <h1 className="text-center bg-white font-bold text-4xl mb-4">{title}</h1>
      <p className="text-center text-sm bg-white lg:w-2/3 mx-auto">{desc}</p>
    </div>
  );
};

export default DetailPageHeader;
