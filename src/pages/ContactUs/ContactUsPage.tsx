import { BsClock, BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import { NavLinkSlugs } from "../../components/Navbar";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";

interface IContactCardItem {
  icon: React.ReactNode;
  name: string;
  line1: string;
  line2: string;
}

const ContactCardItems: IContactCardItem[] = [
  {
    icon: <BsGeoAlt />,
    name: "Address",
    line1: "A108 Adam Street",
    line2: "New York, NY 535022",
  },
  {
    icon: <BsTelephone />,
    name: "Call Us",
    line1: "+1 5589 55488 55",
    line2: "+1 6678 254445 41",
  },
  {
    icon: <BsEnvelope />,
    name: "Email Us",
    line1: "info@example.com",
    line2: "contact@example.com",
  },
  {
    icon: <BsClock />,
    name: "Open Hours",
    line1: "Monday - Friday",
    line2: "9:00AM - 05:00PM",
  },
];

const ContactUsPage = () => {
  return (
    <div
      id={NavLinkSlugs.CONTACT}
      className="py-16 w-[95vw] sm:w-[70vw] lg:w-[85vw] mx-auto"
    >
      <SectionTitle
        title="Contact"
        desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ContactCardItems.map((contactCardItem: IContactCardItem) => {
            return (
              <GenerateContactCardItem contactCardItem={contactCardItem} />
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-aboutBg p-7 grid gap-5 grid-cols-12">
          <input
            type="text"
            placeholder="Your Name"
            className="col-span-6 py-2 px-4 text-sm border border-gray-300 duration-300 focus:border-accent focus:outline-0"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="col-span-6 py-2 px-4 text-sm border border-gray-300 duration-300 focus:border-accent focus:outline-0"
          />

          <input
            type="text"
            placeholder="Subject"
            className="col-span-12 py-2 px-4 text-sm border border-gray-300 duration-300 focus:border-accent focus:outline-0"
          />

          <textarea
            placeholder="Message"
            className="col-span-12 pt-2 pb-24 px-4 text-sm border border-gray-300 duration-300 focus:border-accent focus:outline-0"
          ></textarea>

          <div className="col-span-12 text-center">
            <Button>Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const GenerateContactCardItem = ({
  contactCardItem,
}: {
  contactCardItem: IContactCardItem;
}) => {
  return (
    <div className="bg-aboutBg p-7">
      <i className="text-4xl text-accent">{contactCardItem.icon}</i>
      <h3 className="text-xl font-bold mt-5 mb-3">{contactCardItem.name}</h3>
      <p className="text-sm font-opensans">{contactCardItem.line1}</p>
      <p className="text-sm mt-1 font-opensans">{contactCardItem.line2}</p>
    </div>
  );
};

export default ContactUsPage;
