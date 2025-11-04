import { CircleUser, Image, Send } from "lucide-react";

export default function ChallengePost() {
  return (
    <div className=" flex justify-between gap-10 ">
      {/*Profile Pic*/}
      <div>
        <div className=" flex border-2 border-red rounded-full p-3">
          <CircleUser size={32} color="#8c2b02" />
        </div>
      </div>
      {/*Content*/}
      <div>
        <div className=" flex flex-col lg:flex-row gap-7 justify-between border-2 border-blue p-8 rounded-3xl w-full">
          <div className=" w-2/3 h-64 border-2 border-blue rounded-2xl flex items-center justify-center">
            <Image size={34} color="#374F86" />
          </div>

          {/*ACCOUNT, CAPTION & COMMENT */}
          <div className=" flex flex-col justify-between">
            <div className=" flex flex-col gap-2.5 ">
              <h1 className=" font-medium text-xl">Neraki_88</h1>

              <div className=" flex flex-col gap-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  qui a deserunt molestiae maxime neque totam. Minus, ipsa
                  dolores, expedita est aut earum tenetur quasi, reprehenderit
                  iure adipisci rem mollitia.
                </p>
                <p>#Lorem #Ipsum #Lorem #Ipsum #UMKM</p>
              </div>
            </div>
            <div className=" flex gap-2 justify-between items-center">
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
