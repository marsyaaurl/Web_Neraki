"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function ChallengePost({
  username,
  caption,
  hashtags,
  imgUser,
  imgSrc,
  imgContent,
  userNameComment,
  userComment,
  currentUserName,
  currentUserProfilePic,
}) {
  const [commentText, setCommentText] = useState("");

  const [comments, setComments] = useState(
    userComment
      ? [
          {
            userName: userNameComment,
            comment: userComment,
            imgSrc: imgUser || "/avatar-default.png",
          },
        ]
      : []
  );

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        userName: currentUserName,
        comment: commentText,
        imgSrc:
          currentUserProfilePic && currentUserProfilePic.trim() !== ""
            ? currentUserProfilePic
            : "/avatar-default.png",
      };

      setComments([...comments, newComment]);
      setCommentText("");
    }
  };

  return (
    <div className="flex gap-4 lg:gap-7">
      {/* AVATAR */}
      <div className="w-fit h-fit flex justify-center rounded-full shrink-0">
        <img
          src={imgSrc || "/avatar-default.png"}
          className="rounded-full object-cover w-10 h-10 lg:w-[55px] lg:h-[55px]"
        />
      </div>

      {/* POST CARD */}
      <div
        className="w-full px-5 py-5 backdrop-blur-md rounded-3xl"
        style={{ boxShadow: "0 0 7px rgba(0,0,0,0.1)" }}
      >
        {/* FLEX WRAPPER */}
        <div className="flex flex-col lg:flex-row gap-5 lg:items-start">
          {/* IMAGE */}
          <div className="w-full lg:w-2/5">
            <img
              src={imgContent || "/image-placeholder.png"}
              className="rounded-xl object-cover w-full aspect-[4/3] lg:h-64"
            />
          </div>

          {/* TEXT + COMMENT */}
          <div className="w-full flex flex-col gap-4">
            <div>
              <h1 className="font-semibold text-xl text-blue">{username}</h1>
              <p>{caption}</p>
              <p className="font-medium">{hashtags}</p>
            </div>

            <hr />

            {/* COMMENTS LIST */}
            <div className="px-1 rounded-xl w-full flex items-start">
              <div className="flex flex-col gap-y-3 w-full">
                <h2 className="font-semibold text-yellowHover">Comments</h2>

                {comments.map((comment, index) => (
                  <div key={index} className="flex flex-row gap-3">
                    <img
                      src={comment.imgSrc || "/avatar-default.png"}
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10 lg:w-[55px] lg:h-[55px]"
                    />

                    <div>
                      <h1 className="font-medium text-base text-blue">
                        {comment.userName}
                      </h1>
                      <p className="text-sm">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COMMENT INPUT */}
            <div className="flex gap-4 items-center mt-2">
              <div className="border-2 border-blue px-4 py-2.5 rounded-full w-full">
                <input
                  type="text"
                  placeholder="Comment"
                  value={commentText}
                  onChange={handleCommentChange}
                  className="w-full outline-none placeholder:text-blueHover"
                />
              </div>

              <div
                className="bg-blue p-3 rounded-full cursor-pointer hover:shadow-lg hover:shadow-blueHover transition-shadow"
                onClick={handleAddComment}
              >
                <Send size={22} color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
