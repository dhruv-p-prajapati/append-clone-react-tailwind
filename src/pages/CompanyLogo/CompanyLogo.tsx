interface ILogoItem {
  src: string;
  alt: string;
}

const LogoItems: ILogoItem[] = [
  { src: "/images/client-1.png", alt: "client-1" },
  { src: "/images/client-2.png", alt: "client-2" },
  { src: "/images/client-3.png", alt: "client-3" },
  { src: "/images/client-4.png", alt: "client-4" },
  { src: "/images/client-5.png", alt: "client-5" },
  { src: "/images/client-6.png", alt: "client-6" },
];

const CompanyLogo = () => {
  return (
    <div className="container flex flex-wrap gap-10 justify-around py-8">
      {LogoItems.map((logoItem: ILogoItem) => {
        return (
          <img
            key={logoItem.src}
            src={logoItem.src}
            alt={logoItem.alt}
            className="w-24 filter grayscale opacity-50 duration-300 hover:grayscale-0 hover:opacity-100"
          />
        );
      })}
    </div>
  );
};

export default CompanyLogo;
