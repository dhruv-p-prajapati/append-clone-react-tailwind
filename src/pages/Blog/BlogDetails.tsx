import BreadCrumb from "../../components/Breadcrumb";
import DetailPageHeader from "../../components/DetailPageHeader";
import Navbar from "../../components/Navbar";
import BlogDetailsLeft from "./BlogDetailsLeft";
import BlogDetailsRight from "./BlogDetailsRight";

const BlogDetails = () => {
  return (
    <div>
      <Navbar isOtherRoute={true} />

      <div className="mt-24">
        <DetailPageHeader
          title="Blog Details"
          desc="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
        />

        <BreadCrumb />

        <div className="container flex flex-col lg:flex-row gap-8 py-16">
          <div className="lg:basis-8/12">
            <div className="flex flex-col">
              <BlogDetailsLeft />
            </div>
          </div>
          <div className="lg:basis-4/12">
            <BlogDetailsRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
