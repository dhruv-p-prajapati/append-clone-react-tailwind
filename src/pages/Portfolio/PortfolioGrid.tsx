import { BsLink45Deg, BsZoomIn } from "react-icons/bs";
import { PortfolioTabs } from "./PortfolioTabs";
import { Link } from "react-router-dom";

interface IPortfolioGridItem {
  src: string;
  tag: PortfolioTabs;
  title: string;
}

const PortfolioGridItems: IPortfolioGridItem[] = [
  {
    src: "/images/masonry-portfolio-1.jpg",
    tag: PortfolioTabs.APP,
    title: "App 1",
  },
  {
    src: "/images/masonry-portfolio-3.jpg",
    tag: PortfolioTabs.WEB,
    title: "Branding 1",
  },
  {
    src: "/images/masonry-portfolio-6.jpg",
    tag: PortfolioTabs.WEB,
    title: "Branding 2",
  },
  {
    src: "/images/masonry-portfolio-2.jpg",
    tag: PortfolioTabs.CARD,
    title: "Product 1",
  },
  {
    src: "/images/masonry-portfolio-5.jpg",
    tag: PortfolioTabs.CARD,
    title: "Product 2",
  },
  {
    src: "/images/masonry-portfolio-9.jpg",
    tag: PortfolioTabs.WEB,
    title: "Branding 3",
  },
  {
    src: "/images/masonry-portfolio-4.jpg",
    tag: PortfolioTabs.APP,
    title: "App 2",
  },
  {
    src: "/images/masonry-portfolio-7.jpg",
    tag: PortfolioTabs.APP,
    title: "App 3",
  },
  {
    src: "/images/masonry-portfolio-8.jpg",
    tag: PortfolioTabs.CARD,
    title: "Product 3",
  },
];

const PortfolioGrid = ({ selectedTab }: { selectedTab: PortfolioTabs }) => {
  return (
    <div className="container flex justify-center items-center mt-10">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {PortfolioGridItems.filter((portfolioGridItem: IPortfolioGridItem) => {
          return (
            selectedTab === PortfolioTabs.ALL ||
            portfolioGridItem.tag === selectedTab
          );
        }).map((portfolioGridItem: IPortfolioGridItem) => (
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            key={portfolioGridItem.src}
            className="break-inside-avoid mb-4 relative group overflow-hidden"
          >
            <img
              src={portfolioGridItem.src}
              alt={portfolioGridItem.title}
              className="w-full h-auto shadow-lg"
            />

            <div className="bg-white flex justify-between items-center p-4 w-full opacity-90 absolute -bottom-[80px] group-hover:bottom-0 group-hover:h-[80px] duration-300">
              <div>
                <h4 className="text-lg text-default font-semibold">
                  {portfolioGridItem.title}
                </h4>
                <p className="text-default opacity-70 text-sm">
                  Lorem ipsum, dolor sit
                </p>
              </div>

              <div className="flex justify-center items-center gap-5 text-2xl">
                <i className="cursor-pointer">
                  <BsZoomIn />
                </i>
                <i className="cursor-pointer">
                  <Link to="portfolio-details">
                    <BsLink45Deg />
                  </Link>
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
