import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostsType } from "../../interface";

interface Props {
  posts: PostsType;
}

const Post: React.FC<Props> = (props) => {
  const { posts } = props;
  const views: string = posts.views.toLocaleString("vi-vn");

  return (
    <div className="w-[60vw] mr-4 mb-4 flex-shrink-0 md:w-full md:flex-shrink-0 md:mb-0 md:mr-0">
      <div className="group relative top-0 left-0 cursor-pointer select-none">
        <div className="w-full">
          <img
            className="w-full h-full rounded-2xl object-cover"
            src={posts.image}
            alt={posts.title}
          />
        </div>
        <div className="overlay absolute w-full h-full rounded-2xl group-hover:opacity-100 opacity-0"></div>
        <button className="center_item text-14 font-semibold text-text-color py-2 px-4 rounded-full bg-white z-20 animate-bottom-up group-hover:block hidden">
          Xem bài viết
        </button>
      </div>
      <h3 className="text-16 text-text-color font-semibold mt-2 mb-3 cursor-pointer select-none line-clamp-1">
        {posts.title}
      </h3>
      <div className="flex items-center justify-start cursor-pointer select-none">
        <div className="w-6 h-6 mr-2">
          <img
            className="w-full h-full rounded-full"
            src={posts.author.image}
            alt="author_img"
          />
        </div>
        <div className="flex items-center justify-start text-14 text-text-color font-semibold">
          <span>
            {posts.author.firstName} {posts.author.lastName}
          </span>
          {/* {posts.author.role === "admin" ? (
            <div className="text-check-color ml-1">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
          ) : (
            ""
          )} */}
        </div>
        <span className="text-14 text-text-color-2 ml-2">{views} lượt xem</span>
      </div>
    </div>
  );
};

export default Post;
