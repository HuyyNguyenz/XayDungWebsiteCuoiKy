import { faCircleArrowUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import userImg from "../../assets/images/user.png";
import { Comment, EditComment, User, Video } from "../../interface";
import { root } from "../../utils";

interface Props {
  close: Function;
  video: Video;
}

const Comments: React.FC<Props> = (props) => {
  const { video } = props;
  const [scrollTop, setScrollTop] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const [commentValue, setCommentValue] = useState<string>("");
  const [comments, setComments] = useState<Array<Comment>>([]);
  const [commentsForVideo, setCommentsForVideo] = useState<Array<Comment>>([]);
  const [comment, setComment] = useState<Comment>({
    id: "",
    content: "",
    date_posted: "",
    account_id: "",
    video_id: "",
  });
  const [isEditComment, setEditComment] = useState<EditComment>({
    id: "",
    state: false,
  });

  useEffect(() => {
    const getComments = async () => {
      await axios.get(`${root}/api/comments`).then((res) => {
        if (res.data.length > 0) {
          setComments(res.data);
        }
      });
    };
    getComments();
  }, [comment]);

  useEffect(() => {
    if (comments.length > 0) {
      const commentArray: Array<Comment> = [];
      comments.forEach((comment: Comment) => {
        if (comment.video_id === video.id + "") {
          commentArray.push(comment);
        }
      });
      setCommentsForVideo(commentArray);
    }
  }, [comments]);

  useEffect(() => {
    if (comments.length > 0) {
      const getUsers = async () => {
        await axios.get(`${root}/api/account`).then((res) => {
          if (res.data.length > 0) {
            setUsers(res.data);
          }
        });
      };
      getUsers();
    }
  }, [comments]);

  const getUserForComment = (id: string) => {
    let author: string = "";
    users.forEach((user: User) => {
      if (user.id + "" === id) {
        author = user.username;
      }
    });
    return author;
  };

  const handleScroll = (e: BaseSyntheticEvent) => {
    if (e.target.scrollTop > 300) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  const handleScrollTop = () => {
    const e: HTMLDivElement = document.querySelector(
      ".comment_container"
    ) as HTMLDivElement;
    e.scrollTop = 0;
  };

  const handleCloseComment = () => {
    document.body.classList.remove("overflow-hidden");
    props.close(true);
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    const value: string = e.target.value;
    const btnPost: HTMLButtonElement = document.querySelector(
      ".btn_post"
    ) as HTMLButtonElement;
    if (e.target.value.trim() !== "") {
      btnPost.classList.remove("bg-[#cccccc]");
      btnPost.classList.remove("cursor-not-allowed");
      btnPost.classList.add("bg-primary-color");
    } else {
      btnPost.classList.remove("bg-primary-color");
      btnPost.classList.add("bg-[#cccccc]");
      btnPost.classList.add("cursor-not-allowed");
    }
    setCommentValue((prev) => (prev !== "" ? value : value.trim()));
  };

  const handleClearText = () => {
    const btnPost: HTMLButtonElement = document.querySelector(
      ".btn_post"
    ) as HTMLButtonElement;
    btnPost.classList.remove("bg-primary-color");
    btnPost.classList.add("bg-[#cccccc]");
    btnPost.classList.add("cursor-not-allowed");
    setCommentValue("");
  };

  const handlePostComment = () => {
    if (commentValue !== "") {
      const d: Date = new Date();
      const date: number = d.getDate();
      const month: number = d.getMonth() + 1;
      const year: number = d.getFullYear();
      const datePosted: string = `${date}/${month}/${year}`;
      const userToken: string = sessionStorage.getItem("user_token") as string;
      const comment: Comment = {
        content: commentValue,
        date_posted: datePosted,
        account_id: userToken,
        video_id: video.id,
      };
      const postComment = async () => {
        await axios.post(`${root}/api/comments`, comment).then((res) => {
          if (res.data.status === true) {
            setComment(res.data.data);
            handleClearText();
          }
        });
      };
      postComment();
    }
  };

  const handleDeleteComment = (commentId: string) => {
    const deleteComment = async () => {
      await axios.delete(`${root}/api/comments/${commentId}`).then((res) => {
        if (res.data) {
          setComment({
            id: "",
            content: "",
            date_posted: "",
            account_id: "",
            video_id: "",
          });
        }
      });
    };
    deleteComment();
  };

  const handleEditComment = (commentId: string, content: string) => {
    const btnPost: HTMLButtonElement = document.querySelector(
      ".btn_post"
    ) as HTMLButtonElement;
    btnPost.innerText = "Cập nhật";
    btnPost.classList.remove("bg-[#cccccc]");
    btnPost.classList.remove("cursor-not-allowed");
    btnPost.classList.add("bg-primary-color");
    setCommentValue(content);
    setEditComment({ id: commentId, state: true });
  };

  const handleUpdateComment = () => {
    const btnPost: HTMLButtonElement = document.querySelector(
      ".btn_post"
    ) as HTMLButtonElement;
    const updateComment = async () => {
      await axios
        .put(`${root}/api/comments/${isEditComment.id}`, {
          content: commentValue,
        })
        .then((res) => {
          if (res.data.data) {
            setComment(res.data.data);
            handleClearText();
            btnPost.innerText = "Bình luận";
            setEditComment({ id: "", state: false });
          }
        });
    };
    updateComment();
    console.log("Update:", isEditComment.id, commentValue);
  };

  return (
    <>
      <div
        onScroll={handleScroll}
        className="fixed top-0 right-0 w-[50%] h-screen bg-white z-30 px-10 pb-14 pt-3 animate-rightToLeft comment_container overflow-y-scroll scroll-smooth"
      >
        <div className="text-18 text-text-color font-semibold flex items-center justify-between">
          <h4>{commentsForVideo.length} bình luận</h4>
          <FontAwesomeIcon
            onClick={handleCloseComment}
            className="cursor-pointer p-4 hover:opacity-70"
            icon={faTimes}
          />
        </div>
        <div className="w-[90%] mb-12">
          <div className="flex items-start justify-start mt-12">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={userImg}
              alt="userImg"
            />
            <textarea
              onChange={handleChange}
              value={commentValue}
              className="w-full border border-solid border-black outline-none rounded-lg resize-none ml-4 px-2 pt-2 pb-8 overflow-hidden"
              name="comment"
              id="comment"
              placeholder="Bạn có thắc mắc gì trong bài học này?"
            ></textarea>
          </div>
          <div className="flex items-center justify-end text-14 font-semibold text-title-color mt-4">
            <button
              onClick={isEditComment.state ? () => {} : handleClearText}
              className="px-4 py-2"
            >
              Huỷ
            </button>
            <button
              onClick={
                isEditComment.state ? handleUpdateComment : handlePostComment
              }
              className="text-white px-4 py-2 rounded-full bg-[#cccccc] ml-4 hover:opacity-80 transition-all ease-linear duration-200 btn_post"
            >
              Bình luận
            </button>
          </div>
        </div>
        <hr />
        <div className="mt-12">
          {commentsForVideo.map((comment: Comment) => {
            let visible: boolean = false;
            const author: string = getUserForComment(comment.account_id);
            const currentId: string = sessionStorage.getItem(
              "user_token"
            ) as string;
            if (currentId === comment.account_id) {
              visible = true;
            }
            return (
              <div key={comment.id} className="mb-4">
                {author ? (
                  <>
                    <div className="flex items-start justify-start">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        src={userImg}
                        alt="user_img"
                      />
                      <div className="text-14 ml-4 max-w-[31.25rem] min-w-[25rem] rounded-2xl bg-[#f2f3f5] px-4 pt-2 pb-6">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{author} </span>{" "}
                          <span>{comment.date_posted}</span>
                        </div>
                        <p className="mt-4">{comment.content} </p>
                      </div>
                    </div>
                    {visible ? (
                      <div className="flex items-center justify-start text-14 font-semibold ml-14">
                        <button
                          onClick={() =>
                            handleEditComment(
                              comment.id as string,
                              comment.content
                            )
                          }
                          className="text-text-color p-2 mr-2"
                        >
                          Sửa
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteComment(comment.id as string)
                          }
                          className="text-red-600 p-2"
                        >
                          Xoá
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {scrollTop ? (
          <FontAwesomeIcon
            onClick={handleScrollTop}
            className="fixed bottom-[4%] right-[3%] cursor-pointer text-32 text-text-color"
            icon={faCircleArrowUp}
          />
        ) : (
          ""
        )}
      </div>
      <div onClick={handleCloseComment} className="overlay"></div>
    </>
  );
};

export default Comments;
