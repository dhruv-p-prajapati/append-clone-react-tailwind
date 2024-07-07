import { IoSearchOutline } from "react-icons/io5";

interface ICategoryItem {
  title: string;
  qty: number;
}

interface IBlogCardItem {
  src: string;
  title: string;
  publishedAt: string;
}

const CategoryItems: ICategoryItem[] = [
  {
    title: "General",
    qty: 25,
  },
  {
    title: "Lifestyle",
    qty: 12,
  },
  {
    title: "Travel",
    qty: 5,
  },
  {
    title: "Design",
    qty: 22,
  },
  {
    title: "Creative",
    qty: 8,
  },
  {
    title: "Education",
    qty: 14,
  },
];

const TagItems: string[] = [
  "App",
  "IT",
  "Business",
  "MAC",
  "Design",
  "Office",
  "Creative",
  "Studio",
  "Smart",
  "Tips",
  "Marketing",
];

const BlogCardItems: IBlogCardItem[] = [
  {
    src: "/images/blog-recent-1.jpg",
    title: "Nihil blanditiis at in nihil autem",
    publishedAt: "Jan 1, 2020",
  },
  {
    src: "/images/blog-recent-2.jpg",
    title: "Quidem autem et impedit",
    publishedAt: "Jan 1, 2020",
  },
  {
    src: "/images/blog-recent-3.jpg",
    title: "Id quia et et ut maxime similique occaecati ut",
    publishedAt: "Jan 1, 2020",
  },
  {
    src: "/images/blog-recent-4.jpg",
    title: "Laborum corporis quo dara net para",
    publishedAt: "Jan 1, 2020",
  },
  {
    src: "/images/blog-recent-5.jpg",
    title: "Et dolores corrupti quae illo quod dolor",
    publishedAt: "Jan 1, 2020",
  },
];

const BlogDetailsRight = () => {
  return (
    <div className="shadow-custom p-6 flex flex-col">
      <div>
        <h3 className="text-xl mb-4 font-semibold">Search</h3>
        <div className="flex items-center w-full">
          <input
            type="text"
            className="border border-[#b2b2b2] px-4 py-2 outline-none w-full duration-300 focus:border-accent"
          />
          <button className="bg-accent text-white p-[11px] rounded-tr-sm rounded-br-sm">
            <IoSearchOutline className="text-xl" />
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-5">Categories</h3>
        <div className="flex flex-col gap-3 font-opensans">
          {CategoryItems.map((categoryItem: ICategoryItem) => (
            <div key={categoryItem.title} className="flex items-center gap-2">
              <p className="text-[#575757] hover:text-accent cursor-pointer">
                {categoryItem.title}
              </p>
              <p className="text-[#b2b2b2]">({categoryItem.qty})</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-5">Recent Posts</h3>
        <div className="flex flex-col">
          {BlogCardItems.map((blogCardItem: IBlogCardItem) => {
            return (
              <div key={blogCardItem.src} className="flex gap-5 mb-3">
                <img
                  src={blogCardItem.src}
                  alt={blogCardItem.title}
                  className="w-[80px]"
                />
                <div>
                  <h4 className="font-bold text-default duration-300 hover:text-accent mb-[5px] cursor-pointer">
                    {blogCardItem.title}
                  </h4>
                  <p className="italic text-default opacity-80 text-sm">
                    {blogCardItem.publishedAt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-5">Tags</h3>
        <ul className="flex flex-wrap gap-2">
          {TagItems.map((tagItem: string) => (
            <li key={tagItem}>
              <h3 className="border border-default border-opacity-40 text-sm text-[#636669] px-[14px] py-[6px] hover:border-accent hover:bg-accent hover:text-white duration-300 cursor-pointer">
                {tagItem}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetailsRight;
