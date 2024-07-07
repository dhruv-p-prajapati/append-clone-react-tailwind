import {
  BsChatDots,
  BsClock,
  BsFacebook,
  BsFolder2,
  BsInstagram,
  BsPerson,
  BsTags,
  BsTwitterX,
} from "react-icons/bs";
import BlogDetailsComments from "./BlogDetailsComments";

const BlogDetailsLeft = () => {
  return (
    <>
      <div>
        <img src="/images/blog-1.jpg" alt="img" />
      </div>

      <div className="shadow-md px-7 flex flex-col py-7 gap-4 text-primary font-opensans">
        <div>
          <h2 className="text-3xl font-bold font-montserrat">
            Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam
            quia
          </h2>
        </div>

        <ul className="flex py-3 gap-6">
          <li className="flex items-center gap-2 text-[#575757] text-sm">
            <BsPerson className="text-md" />
            <p>John Doe</p>
          </li>
          <li className="flex items-center gap-2 text-[#575757]">
            <BsClock className="text-md" />
            <p>Jan 1, 2024</p>
          </li>
          <li className="flex items-center gap-2 text-[#575757]">
            <BsChatDots className="text-md" />
            <p>John Doe</p>
          </li>
        </ul>

        <p>
          Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam
          animi praesentium. Aliquam et laboriosam eius aut nostrum quidem
          aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque
          deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt.
          Voluptate porro consequatur assumenda perferendis dolore.
        </p>

        <p>
          Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
          reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam
          nihil cumque odio. Et voluptate cupiditate.
        </p>

        <blockquote className="p-16 text-xl font-medium italic text-default text-center bg-[#F4F4F4] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[80%] before:bg-accent before:w-[3px]">
          Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt
          animi aut. Aut eos aliquam doloribus minus autem quos.
        </blockquote>

        <p>
          Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta
          inventore tempore provident voluptas mollitia aliquid. Id repellendus
          quia. Asperiores nihil magni dicta est suscipit perspiciatis.
          Voluptate ex rerum assumenda dolores nihil quaerat. Dolor porro
          tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti
          velit quisquam rerum. Omnis dolorum exercitationem harum qui qui
          blanditiis neque. Iusto autem itaque. Repudiandae hic quae aspernatur
          ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora
          deleniti error rerum nihil tempora.
        </p>

        <h3 className="font-bold text-[22px] text-default font-montserrat mt-4">
          Et quae iure vel ut odit alias.
        </h3>

        <p>
          Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui
          quos fugit ut rerum atque. Optio provident dolores atque voluptatem
          rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam
          perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid
          qui. Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt
          nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum
          eveniet dicta exercitationem minima. Exercitationem omnis asperiores
          natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores
          sint consequatur quidem ea. Beatae minima sunt libero soluta sapiente
          in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem
          voluptatem accusamus mollitia aut atque aut.
        </p>

        <div>
          <img src="/images/blog-inside-post.jpg" alt="Blog Inside Post" />
        </div>

        <h3 className="font-bold text-[22px] text-default font-montserrat mt-4">
          Ut repellat blanditiis est dolore sunt dolorum quae.
        </h3>

        <p>
          Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet
          nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero
          sed occaecati aut porro autem. Consectetur sed excepturi sint non
          placeat quia repellat incidunt labore. Autem facilis hic dolorum
          dolores vel. Consectetur quasi id et optio praesentium aut asperiores
          eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam
          et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
        </p>

        <p>
          Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis
          ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est
          veniam.
        </p>

        <div className="pt-4 border-t border-[#b2b2b282] flex gap-4">
          <div className="flex items-center gap-2 text-[#575757]">
            <BsFolder2 />
            <p>Business</p>
          </div>
          <div className="flex items-center gap-1 text-[#575757]">
            <BsTags />
            <p>Creative, Tips, Marketing</p>
          </div>
        </div>
      </div>

      <div className="p-5 shadow-custom flex justify-start gap-5 my-9">
        <img
          src="/images/blog-author-1.jpg"
          alt="Blog Author"
          className="size-[120px] rounded-[50%] bg-cover"
        />

        <div>
          <h4 className="font-semibold text-xl text-default opacity-80">
            Jane Smith
          </h4>

          <div className="flex gap-2 mb-[10px]">
            <i className="text-default opacity-40">
              <BsTwitterX />
            </i>
            <i className="text-default opacity-40">
              <BsFacebook />
            </i>
            <i className="text-default opacity-40">
              <BsInstagram />
            </i>
          </div>

          <p className="italic text-default opacity-70 font-opensans">
            Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed
            possimus accusantium. Quas repellat voluptatem officia numquam sint
            aspernatur voluptas. Esse et accusantium ut unde voluptas.
          </p>
        </div>
      </div>

      <BlogDetailsComments />
    </>
  );
};

export default BlogDetailsLeft;
