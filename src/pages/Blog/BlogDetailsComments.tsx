import { BsReplyFill } from "react-icons/bs";

interface ICommentItem {
  src: string;
  name: string;
  publishedAt: string;
  desc: string;
  replies?: ICommentItem[];
}

const CommentItems: ICommentItem[] = [
  {
    src: "/images/comments-1.jpg",
    name: "Georgia Reader",
    publishedAt: "01 Jan, 2022",
    desc: "Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.",
  },
  {
    src: "/images/comments-2.jpg",
    name: "Aron Alvarado ",
    publishedAt: "02 Jan, 2022",
    desc: "Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.",
    replies: [
      {
        src: "/images/comments-3.jpg",
        name: "Lynda Small",
        publishedAt: "03 Jan, 2022",
        desc: "Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae. Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat. Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.",
        replies: [
          {
            src: "/images/comments-4.jpg",
            name: "Sianna Ramsay",
            publishedAt: "04 Jan, 2022",
            desc: "Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam possimus. Perferendis id consectetur necessitatibus.",
          },
          {
            src: "/images/comments-6.jpg",
            name: "Dhruv's Comment",
            publishedAt: "22 April, 2003",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti dolorum, nulla reiciendis laboriosam atque iste pariatur ad aspernatur unde. Odio consectetur accusamus labore expedita illum deleniti quidem repellat doloribus et optio cupiditate voluptatem corrupti enim nostrum laboriosam ex ipsam nulla sapiente eaque, fuga rerum facere, consequuntur, commodi molestias! Minus.",
          },
        ],
      },
    ],
  },
  {
    src: "/images/comments-5.jpg",
    name: "Nolan Davidson ",
    publishedAt: "05 Jan, 2022",
    desc: "Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius repellendus quia nihil ut accusantium tempore. Nesciunt expedita id dolor exercitationem aspernatur aut quam ut. Voluptatem est accusamus iste at. Non aut et et esse qui sit modi neque. Exercitationem et eos aspernatur. Ea est consequuntur officia beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio veniam. Quam officia sit nostrum dolorem.",
  },
  {
    src: "/images/comments-6.jpg",
    name: "Kay Duggan ",
    publishedAt: "06 Jan, 2022",
    desc: "Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis ut velit tempore. Cumque sed quia ut maxime. Est ad aut cum. Ut exercitationem non in fugiat.",
  },
];

const BlogDetailsComments = () => {
  const getCommentsLength = (commentItems: ICommentItem[]): number => {
    if (commentItems.length === 0) {
      return 0;
    }

    let commentLength = 0;

    commentItems.forEach((commentItem: ICommentItem) => {
      commentLength += 1;

      if (commentItem.replies) {
        commentLength += getCommentsLength(commentItem.replies);
      }
    });

    return commentLength;
  };

  return (
    <>
      <h4 className="text-2xl font-bold text-default">
        {getCommentsLength(CommentItems)} Comments
      </h4>
      <div>
        {CommentItems.map((commentItem: ICommentItem) => {
          return (
            <GenerateComment
              key={commentItem.publishedAt}
              commentItem={commentItem}
            />
          );
        })}
      </div>
    </>
  );
};

const GenerateComment = ({ commentItem }: { commentItem: ICommentItem }) => {
  return (
    <>
      <div className="flex justify-center items-start gap-3 mt-[30px]">
        <img
          src={commentItem.src}
          alt={commentItem.name}
          className="w-[60px]"
        />

        <div>
          <h5 className="mb-[2px] flex items-center">
            <span className="font-bold text-default duration-300 hover:text-accent cursor-pointer">
              {commentItem.name}
            </span>

            <div className="pl-[10px] text-default opacity-80 flex justify-center items-center duration-300 hover:text-accent hover:opacity-100 cursor-pointer">
              <BsReplyFill className="text-lg" />
              <span>Reply</span>
            </div>
          </h5>

          <p className="text-default opacity-60 font-opensans text-sm mb-[5px]">
            {commentItem.publishedAt}
          </p>

          <p className="text-default font-opensans mb-4">{commentItem.desc}</p>
        </div>
      </div>

      {commentItem.replies?.map((commentItemReply: ICommentItem) => {
        return (
          <div className="pl-10">
            <GenerateComment
              key={commentItemReply.publishedAt}
              commentItem={commentItemReply}
            />
          </div>
        );
      })}
    </>
  );
};

export default BlogDetailsComments;
