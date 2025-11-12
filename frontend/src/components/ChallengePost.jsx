"use-client";
import { CircleUser, Image, Send } from "lucide-react";

export default function ChallengePost({
  username = "John Doe",
  caption = " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  hashtags = "#UMKM #Neraki #Enak",
  imgUser = "",
  userNameComment = "Jane Doe",
  userComment = "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  imgSrc = "",
  imgContent = "",
}) {
  return (
    <div className=" flex flex-row gap-6 lg:gap-7">
      <div className=" w-fit h-fit border-2 border-red flex justify-center rounded-full">
        <img
          src={imgSrc}
          width={65}
          height={65}
          className=" flex justify-center rounded-full"
        />
      </div>

      <div className=" w-full border-2 p-6 border-blue rounded-3xl">
        <div className=" gap-4 items-center flex flex-col lg:flex-row ">
          <div className="w-full lg:w-2/5 h-64 border-2 border-blue rounded-2xl flex  justify-center">
            <img src={imgContent} sizes="100%" className=" rounded-xl" />
          </div>
          <div className=" w-full flex flex-col justify-between gap-4">
            <div>
              <h1 className=" font-semibold text-xl text-blue">{username}</h1>

              <div className=" flex flex-col gap-3">
                <p>{caption}</p>
                <p className=" font-medium">{hashtags}</p>
              </div>
            </div>

            <div className=" border-2 border-blue px-4 py-3.5 rounded-3xl w-full flex gap-4 items-center">
              <div className=" w-fit h-fit border-2 border-red  rounded-full">
                <img
                  src={imgUser}
                  width={45}
                  height={45}
                  className=" flex justify-center rounded-full"
                />
              </div>
              <div>
                <h1 className=" font-semibold text-base text-blue">
                  {userNameComment}
                </h1>

                <div className=" flex flex-col gap-3 text-sm">
                  <p>{userComment}</p>
                </div>
              </div>
            </div>

            <div className=" flex gap-5 items-center">
              <div className=" border-2 border-blue px-4 py-3.5 rounded-full w-full">
                <input
                  type="text"
                  placeholder="Comment"
                  className=" w-full outline-none placeholder:text-blueHover"
                />
              </div>

              <div className=" bg-blue p-4 rounded-full cursor-pointer w-fit hover:shadow-lg hover:shadow-blueHover transition-shadow">
                <Send size={24} color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
