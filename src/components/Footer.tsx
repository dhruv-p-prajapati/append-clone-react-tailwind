import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const UsefulLinkItems: string[] = [
  "Home",
  "About Us",
  "Services",
  "Terms of service",
  "Privacy policy",
];

const OurServicesItems: string[] = [
  "Web Design",
  "Web Development",
  "Product Management",
  "Marketing",
  "Graphic Design",
];

const Footer = () => {
  return (
    <div className="bg-aboutBg py-16">
      <div className="container flex flex-col gap-5 justify-center items-center">
        <div className="grid grid-cols-12 gap-4 justify-between items-start">
          {/* Content */}
          <div className="col-span-12 lg:col-span-5">
            <h3 className="mb-6 text-default text-3xl font-bold">Append</h3>
            <p className="text-sm text-default font-normal font-opensans">
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="flex gap-[10px] justify-start items-center mt-6">
              <Link to="#">
                <i className="flex justify-center items-center text-default border border-default opacity-50 w-[40px] h-[40px] rounded-full duration-150 hover:text-accent hover:opacity-100 hover:border-accent">
                  <BsTwitterX className="text-xl" />
                </i>
              </Link>
              <Link to="#">
                <i className="flex justify-center items-center text-default border border-default opacity-50 w-[40px] h-[40px] rounded-full duration-150 hover:text-accent hover:opacity-100 hover:border-accent">
                  <BsFacebook className="text-xl" />
                </i>
              </Link>
              <Link to="#">
                <i className="flex justify-center items-center text-default border border-default opacity-50 w-[40px] h-[40px] rounded-full duration-150 hover:text-accent hover:opacity-100 hover:border-accent">
                  <BsInstagram className="text-xl" />
                </i>
              </Link>
              <Link to="#">
                <i className="flex justify-center items-center text-default border border-default opacity-50 w-[40px] h-[40px] rounded-full duration-150 hover:text-accent hover:opacity-100 hover:border-accent">
                  <BsLinkedin className="text-xl" />
                </i>
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-span-6 lg:col-span-2">
            <h4 className="font-bold pb-3">Useful Links</h4>
            <ul>
              {UsefulLinkItems.map((usefulLinkItem) => (
                <li
                  key={usefulLinkItem}
                  className="pb-[10px] text-sm font-opensans opacity-80"
                >
                  {usefulLinkItem}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-6 lg:col-span-2">
            <h4 className="font-bold pb-3">Our Services</h4>
            <ul>
              {OurServicesItems.map((ourServicesItem) => (
                <li
                  key={ourServicesItem}
                  className="pb-[10px] text-sm font-opensans opacity-80"
                >
                  {ourServicesItem}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-12 lg:col-span-3 text-sm">
            <h4 className="font-bold text-base pb-3">Contact Us</h4>
            <p className="mb-[5px]">A108 Adam Street</p>
            <p className="mb-[5px]">New York, NY 535022</p>
            <p className="mb-[5px]">United States</p>
            <p className="mt-6 mb-[5px]">
              <strong>Phone: </strong> <span>+1 5589 55488 55</span>
            </p>
            <p>
              <strong>Email: </strong> <span>info@example.com</span>
            </p>
          </div>
        </div>

        <div className="py-6 bg-default bg-opacity-5 w-full mt-6 flex justify-center items-center flex-col font-opensans text-sm">
          <p>
            &#169; <span>Copyright</span> <strong>Append</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <p className="mt-[6px]">
            Designed by <span className="text-accent">Dhruv Prajapati</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
