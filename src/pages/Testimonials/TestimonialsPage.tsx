import { BsStarFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface ITestimonialItem {
  src: string;
  name: string;
  role: string;
  desc: string;
}

const TestimonialItems: ITestimonialItem[] = [
  {
    src: "/images/testimonials-1.jpg",
    name: "Saul Goodman",
    role: "Ceo & Founder",
    desc: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    src: "/images/testimonials-2.jpg",
    name: "Sara Wilsson",
    role: "Designer",
    desc: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    src: "/images/testimonials-3.jpg",
    name: "Jena Karlis",
    role: "Store Owner",
    desc: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    src: "/images/testimonials-4.jpg",
    name: "John Larson",
    role: "Entrepreneur",
    desc: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
  },
  {
    src: "/images/testimonials-4.jpg",
    name: "Matt Brandon",
    role: "Freelancer",
    desc: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="bg-aboutBg">
      <div className="container py-16 flex flex-col gap-5 lg:flex-row justify-center items-center mx-auto">
        <div className="basis-5/12">
          <h3 className="text-3xl font-bold text-default mb-2">Testimonials</h3>
          <p className="text-primary font-opensans">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>
        </div>

        <Carousel
          className="pb-16 w-full basis-7/12 bg-white shadow-accordian"
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          transitionDuration={2000}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          {TestimonialItems.map((testimonialItem: ITestimonialItem) => {
            return (
              <GenerateTestimonialItem testimonialItem={testimonialItem} />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const GenerateTestimonialItem = ({
  testimonialItem,
}: {
  testimonialItem: ITestimonialItem;
}) => {
  return (
    <div className="flex flex-col justify-center items-start p-7">
      <div className="flex justify-center items-center gap-[10px]">
        <img
          src={testimonialItem.src}
          alt={testimonialItem.name}
          className="w-[80px] h-[80px] rounded-full"
        />

        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-default text-lg">{testimonialItem.name}</h3>
            <h4 className="text-primary text-sm opacity-50">
              {testimonialItem.role}
            </h4>
          </div>

          <div className="flex justify-start items-start gap-[2px]">
            <i>
              <BsStarFill className="text-[#ffc107]" />
            </i>
            <i>
              <BsStarFill className="text-[#ffc107]" />
            </i>
            <i>
              <BsStarFill className="text-[#ffc107]" />
            </i>
            <i>
              <BsStarFill className="text-[#ffc107]" />
            </i>
            <i>
              <BsStarFill className="text-[#ffc107]" />
            </i>
          </div>
        </div>
      </div>

      <p className="mt-6 text-primary font-opensans italic">
        <i className="inline-block mr-2">
          <FaQuoteLeft />
        </i>
        <span>{testimonialItem.desc}</span>
        <i className="inline-block ml-2">
          <FaQuoteRight />
        </i>
      </p>
    </div>
  );
};

export default TestimonialsPage;
