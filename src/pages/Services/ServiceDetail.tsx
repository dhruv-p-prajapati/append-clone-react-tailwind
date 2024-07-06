import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import BreadCrumb from "../../components/Breadcrumb";
import DetailPageHeader from "../../components/DetailPageHeader";
import Navbar from "../../components/Navbar";
import {
  BsArrowRightCircle,
  BsEnvelope,
  BsFileEarmarkWord,
  BsFiletypePdf,
  BsHeadset,
  BsTelephone,
} from "react-icons/bs";
import { useEffect } from "react";
import { cn, scrollToTop } from "../../utils/helpers";

interface IServiceListItem {
  title: string;
  isSelected?: boolean;
}

interface ICatalogItem {
  icon: React.ReactNode;
  title: string;
}

const ServiceListItems: IServiceListItem[] = [
  {
    title: "Web Design 1",
    isSelected: true,
  },
  {
    title: "Web Design",
  },
  {
    title: "Product Management",
  },
  {
    title: "Graphic Design",
  },
  {
    title: "Marketing",
  },
];

const CatalogItems: ICatalogItem[] = [
  {
    icon: <BsFiletypePdf />,
    title: "Catalog PDF",
  },
  {
    icon: <BsFileEarmarkWord />,
    title: "Catalog DOC",
  },
];

const ServiceDetail = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <Navbar isOtherRoute={true} />

      <div className="mt-24">
        <DetailPageHeader
          title="Service Details"
          desc=" Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
        odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis
        veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
        />

        <BreadCrumb />

        <div className="flex justify-center items-center w-[95vw] sm:w-[70vw] lg:w-[85vw] mx-auto my-10">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:basis-[35%] lg:mr-8 flex flex-col gap-8">
              <div className="shadow-accordian p-5">
                <h4 className="text-xl font-bold border-b-2 border-[#eeeeee] pb-3 mb-4">
                  Service List
                </h4>
                <div className="flex gap-4 flex-col">
                  {ServiceListItems.map((serviceListItem: IServiceListItem) => {
                    return (
                      <div
                        className={cn(
                          "flex justify-start items-center gap-2 py-3 px-4 cursor-pointer font-opensans duration-300",
                          serviceListItem.isSelected
                            ? "bg-accent text-white hover:bg-[#f6f6f7] hover:text-default"
                            : "bg-[#f6f6f7] hover:text-accent hover:bg-[#fef5f5] "
                        )}
                      >
                        <i>
                          <BsArrowRightCircle />
                        </i>
                        <span>{serviceListItem.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="shadow-accordian p-5">
                <h4 className="text-xl font-bold border-b-2 border-[#eeeeee] pb-3 mb-4">
                  Download Catalog
                </h4>
                <div className="flex gap-2 flex-col">
                  {CatalogItems.map((catalogItem: ICatalogItem) => {
                    return (
                      <div className="flex justify-start items-center gap-2 py-2 cursor-pointer font-opensans duration-300 hover:text-accent">
                        <i className="text-2xl text-accent">
                          {catalogItem.icon}
                        </i>
                        <span>{catalogItem.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex just items-center flex-col py-8 px-4 bg-accent text-white">
                <i className="text-5xl mb-1">
                  <BsHeadset />
                </i>

                <h4 className="text-2xl mb-2 mt-1">Have a Question?</h4>

                <p className="flex items-center gap-1 mt-2 font-opensans">
                  <i>
                    <BsTelephone />
                  </i>
                  <span>+1 5589 55488 55</span>
                </p>

                <p className="flex items-center gap-1 mt-1 font-opensans cursor-pointer">
                  <i>
                    <BsEnvelope />
                  </i>
                  <span>contact@example.com</span>
                </p>
              </div>
            </div>

            <div className="lg:basis-[65%]">
              <div className="mb-4">
                <img src="/images/services.jpg" alt="Service Detail" />
              </div>
              <h1 className="text-2xl font-bold mb-2">
                Temporibus et in vero dicta aut eius lidero plastis trand lined
                voluptas dolorem ut voluptas
              </h1>
              <div className="flex flex-col gap-4 font-opensans text-sm">
                <p>
                  Blanditiis voluptate odit ex error ea sed officiis deserunt.
                  Cupiditate non consequatur et doloremque consequuntur.
                  Accusantium labore reprehenderit error temporibus saepe
                  perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem
                  architecto eum et quos deleniti officia qui.
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-1 items-center">
                    <IoIosCheckmarkCircleOutline className="text-2xl text-accent" />
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </li>
                  <li className="flex gap-1 items-center">
                    <IoIosCheckmarkCircleOutline className="text-2xl text-accent" />
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </p>
                  </li>
                  <li className="flex gap-1 items-center">
                    <IoIosCheckmarkCircleOutline className="text-2xl text-accent" />
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </li>
                </ul>
                <p>
                  Est reprehenderit voluptatem necessitatibus asperiores neque
                  sed ea illo. Deleniti quam sequi optio iste veniam repellat
                  odit. Aut pariatur itaque nesciunt fuga.
                </p>
                <p>
                  Sunt rem odit accusantium omnis perspiciatis officia.
                  Laboriosam aut consequuntur recusandae mollitia doloremque est
                  architecto cupiditate ullam. Quia est ut occaecati fuga.
                  Distinctio ex repellendus eveniet velit sint quia sapiente
                  cumque. Et ipsa perferendis ut nihil. Laboriosam vel
                  voluptates tenetur nostrum. Eaque iusto cupiditate et totam et
                  quia dolorum in. Sunt molestiae ipsum at consequatur vero.
                  Architecto ut pariatur autem ad non cumque nesciunt qui
                  maxime. Sunt eum quia impedit dolore alias explicabo ea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
