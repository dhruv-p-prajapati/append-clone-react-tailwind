import { Link } from "react-router-dom";
import { NavLinkSlugs } from "../../components/Navbar";
import SectionTitle from "../../components/SectionTitle";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

interface ITeamItem {
  src: string;
  name: string;
  role: string;
  summary: string;
}

const TeamItems: ITeamItem[] = [
  {
    src: "/images/team-1.jpg",
    name: "Walter White",
    role: "Chief Executive Officer",
    summary:
      "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
  },
  {
    src: "/images/team-2.jpg",
    name: "Sarah Jhonson",
    role: "Product Manager",
    summary:
      "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
  },
  {
    src: "/images/team-3.jpg",
    name: "William Anderson",
    role: "CTO",
    summary:
      "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
  },
  {
    src: "/images/team-4.jpg",
    name: "Amanda Jepson",
    role: "Accountant",
    summary:
      "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur",
  },
  {
    src: "/images/team-5.jpg",
    name: "Brian Doe",
    role: "Marketing",
    summary:
      "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
  },
  {
    src: "/images/team-6.jpg",
    name: "Josepha Palas",
    role: "Operation",
    summary:
      "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel",
  },
];

const TeamPage = () => {
  return (
    <div id={NavLinkSlugs.TEAM} className="bg-aboutBg py-14">
      <div className="container">
        <SectionTitle
          title="Team"
          desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {TeamItems.map((teamItem: ITeamItem, index: number) => {
            return (
              <GenerateTeamItem
                key={teamItem.src}
                index={index + 1}
                teamItem={teamItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const GenerateTeamItem = ({
  teamItem,
  index,
}: {
  teamItem: ITeamItem;
  index: number;
}) => {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 500}>
      {/* Image */}
      <div className="mx-20 rounded-full relative border-4 border-white overflow-hidden shadow-lg group">
        <img
          src={teamItem.src}
          alt={teamItem.name}
          className="relative h-auto max-w-full z-10 align-middle"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] flex gap-5 text-white text-xl justify-center items-center z-20 pb-5 invisible opacity-0 h-5/6 duration-150 group-hover:visible group-hover:opacity-100 group-hover:h-full">
          <Link to="#" className="cursor-pointer">
            <BsTwitterX />
          </Link>
          <Link to="#" className="cursor-pointer">
            <BsFacebook />
          </Link>
          <Link to="#" className="cursor-pointer">
            <BsInstagram />
          </Link>
          <Link to="#" className="cursor-pointer">
            <BsLinkedin />
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="mt-7 text-center">
        <h4 className="text-xl font-bold mb-[6px]">{teamItem.name}</h4>
        <span className="italic text-default opacity-60 mb-[10px] font-opensans">
          {teamItem.role}
        </span>
        <p className="text-sm font-opensans">{teamItem.summary}</p>
      </div>
    </div>
  );
};

export default TeamPage;
