import { useState } from "react";
import { NavLinkSlugs } from "../../components/Navbar";
import SectionTitle from "../../components/SectionTitle";
import PortfolioGrid from "./PortfolioGrid";
import { PortfolioTabs } from "./PortfolioTabs";
import { cn } from "../../utils/helpers";

const PortfolioTabItems: PortfolioTabs[] = [
  PortfolioTabs.ALL,
  PortfolioTabs.APP,
  PortfolioTabs.CARD,
  PortfolioTabs.WEB,
];

const PortfolioPage = () => {
  const [selectedTab, setSelectedTab] = useState<PortfolioTabs>(
    PortfolioTabs.ALL
  );

  return (
    <div id={NavLinkSlugs.PORTFOLIO} className="pb-16">
      <SectionTitle
        title="Portfolio"
        desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <ul className="flex justify-center items-center gap-5">
        {PortfolioTabItems.map((portfolioTabItem: PortfolioTabs) => {
          return (
            <li
              key={portfolioTabItem}
              onClick={() => setSelectedTab(portfolioTabItem)}
              className={cn(
                "py-2 px-5 font-medium rounded-full duration-300 hover:bg-accent hover:text-white inline-block cursor-pointer",
                selectedTab === portfolioTabItem && "bg-accent text-white"
              )}
            >
              {portfolioTabItem}
            </li>
          );
        })}
      </ul>

      <PortfolioGrid selectedTab={selectedTab} />
    </div>
  );
};

export default PortfolioPage;
