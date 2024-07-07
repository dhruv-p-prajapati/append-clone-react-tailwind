import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { NavLinkSlugs } from "../../components/Navbar";

interface IBlogItem {
  blogImageSrc: string;
  category: string;
  title: string;
  authorImageSrc: string;
  authorName: string;
  publishedAt: string;
}

const BlogItems: IBlogItem[] = [
  {
    blogImageSrc: "/images/blog-1.jpg",
    category: "Politics",
    title: "Dolorum optio tempore voluptas dignissimos",
    authorImageSrc: "/images/blog-author-1.jpg",
    authorName: "Maria Doe",
    publishedAt: "Jan 1, 2022",
  },
  {
    blogImageSrc: "/images/blog-2.jpg",
    category: "Sports",
    title: "Nisi magni odit consequatur autem nulla dolorem",
    authorImageSrc: "/images/blog-author-2.jpg",
    authorName: "Allisa Mayer",
    publishedAt: "Jun 5, 2022",
  },
  {
    blogImageSrc: "/images/blog-3.jpg",
    category: "Entertainment",
    title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
    authorImageSrc: "/images/blog-author-3.jpg",
    authorName: "Mark Dower",
    publishedAt: "Jun 22, 2022",
  },
];

const BlogPage = () => {
  return (
    <div id={NavLinkSlugs.BLOG} className="py-16 container">
      <SectionTitle
        title="Recent Posts"
        desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {BlogItems.map((blogItem: IBlogItem) => (
          <div
            key={blogItem.blogImageSrc}
            className="shadow-custom rounded-xl overflow-hidden"
          >
            <div className="h-56">
              <img
                src={blogItem.blogImageSrc}
                alt="blog"
                className="size-full object-cover"
              />
            </div>
            <div className="p-4 pb-6 px-6 flex flex-col gap-4">
              <div>
                <p className="text-sm mb-[10px] text-[#b2b2b2] font-opensans">
                  {blogItem.category}
                </p>
                <Link to="/blog-details">
                  <h2 className="text-xl mb-[5px] font-bold hover:text-accent duration-300">
                    {blogItem.title}
                  </h2>
                </Link>
              </div>
              <div className="flex items-center gap-4 font-opensans">
                <div className="size-12 rounded-full overflow-hidden">
                  <img
                    src={blogItem.authorImageSrc}
                    alt="author"
                    className="size-full"
                  />
                </div>
                <div>
                  <p className="font-semibold mb-1">{blogItem.authorName}</p>
                  <p className="text-[#b2b2b2]">{blogItem.publishedAt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
