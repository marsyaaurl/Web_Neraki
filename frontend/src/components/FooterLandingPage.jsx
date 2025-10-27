import { Instagram } from "lucide-react";

export default function FooterLandingPage() {
  return (
    <footer className=" bg-blue flex flex-col gap-10 px-10 py-10 md:px-28 lg:px-40">
      <div className=" flex flex-col md:flex-row justify-between gap-4">
        <h1 className="uppercase font-rubikmaps text-5xl text-white">Neraki</h1>
        <div className=" flex flex-col md:flex-row gap-4  md:gap-10">
          <div className=" text-white flex flex-col gap-2">
            <h1 className=" font-light text-sm">Social</h1>
            <div className=" flex flex-col gap-1">
              <a href="https://www.instagram.com/"> Instagram</a>
              <a href="https://x.com/">Twitter</a>
            </div>
          </div>
          <div className=" text-white flex flex-col gap-2">
            <h1 className=" font-light text-sm">Our Team</h1>
            <div className=" flex flex-col gap-1">
              <a href=""> Linkedin</a>
              <a href="">Profile</a>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-end">
        <p className=" text-white text-sm">&copy; 2025 Neraki. All rights reserved.</p>
      </div>
    </footer>

    /*<footer className=" flex bg-blue py-10 lg:px-40 ">
      <div className=" flex w-full justify-between">
        <h1 className="uppercase font-rubikmaps text-5xl text-white">Neraki</h1>
        <div className=" flex gap-10">
          <div className=" flex flex-col gap-1.5">
            <h1 className=" text-white font-light text-sm">Social</h1>
            <div className=" flex flex-col text-white text-base gap-1">
              <a href="https://www.instagram.com/" className=" ">
                Instagram
              </a>
              <a href="https://x.com/">Twitter</a>
            </div>
          </div>
          <div className=" flex flex-col gap-1.5">
            <h1 className=" text-white font-light text-sm">Our Team</h1>
            <div className=" flex flex-col text-white text-base gap-1">
              <a href="" className=" ">
                Linkedin
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </footer>*/
  );
}
