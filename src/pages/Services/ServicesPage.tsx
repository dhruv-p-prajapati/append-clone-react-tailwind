import {
  BsBriefcase,
  BsCardChecklist,
  BsBarChart,
  BsBinoculars,
  BsBrightnessHigh,
  BsCalendar4Week,
} from "react-icons/bs";
import SectionTitle from "../../components/SectionTitle";
import { NavLinkSlugs } from "../../components/Navbar";
import { NavLink } from "react-router-dom";

interface IServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ServiceItems: IServiceItem[] = [
  {
    icon: <BsBriefcase />,
    title: "Lorem Ipsum",
    desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  },
  {
    icon: <BsCardChecklist />,
    title: "Dolor Sitema",
    desc: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
  },
  {
    icon: <BsBarChart />,
    title: "Sed ut perspiciatis",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    icon: <BsBinoculars />,
    title: "Magni Dolores",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    icon: <BsBrightnessHigh />,
    title: "Nemo Enim",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
  },
  {
    icon: <BsCalendar4Week />,
    title: "Eiusmod Tempor",
    desc: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
  },
];

const ServicesPage = () => {
  return (
    <div id={NavLinkSlugs.SERVICES} className="container py-16">
      <SectionTitle
        title="Services"
        desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {ServiceItems.map((serviceItem: IServiceItem, index: number) => {
          return (
            <GenerateServiceItem
              key={serviceItem.title}
              index={index}
              serviceItem={serviceItem}
            />
          );
        })}
      </div>
    </div>
  );
};

const GenerateServiceItem = ({
  serviceItem,
  index,
}: {
  serviceItem: IServiceItem;
  index: number;
}) => {
  return (
    <NavLink to="/service-details">
      <div data-aos="fade-up" data-aos-delay={index * 100} className="group">
        <div className="flex gap-2">
          <span className="flex-[3_3_0]">
            <hr className="border-t-2 border-t-accent w-full" />
          </span>
          <span className="flex-[95_95_0]">
            <hr className="border-t-2 border-t-gray-300 w-full" />
          </span>
        </div>
        <div className="flex gap-10 items-center lg:justify-center relative mt-10">
          {/* Icon */}
          <div className=" relative flex justify-center items-center">
            <span className="text-[55px] opacity-60 after:h-7 after:absolute after:w-7 after:bg-[#f8c7c7] after:-z-10 after:rounded-full after:-bottom-1 after:-right-3">
              {serviceItem.icon}
            </span>
          </div>

          {/* Title and Description */}
          <div>
            <h4 className="font-bold mb-4 text-lg group-hover:text-accent duration-300 text-default">
              {serviceItem.title}
            </h4>
            <p className="text-sm text-primary font-opensans">
              {serviceItem.desc}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ServicesPage;
