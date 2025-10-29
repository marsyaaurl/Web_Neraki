import { CircleUser } from "lucide-react";
import Button from "./Button";

const profileData = [
  { label: "Nama Lengkap", value: "Mazmur Daud" },
  { label: "Tanggal Lahir", value: "19 Oktober 2005" },
  { label: "Email", value: " daudpsalm@gmail.com" },
  { label: "Nomor Telepon", value: " +62 812 3456 7890" },
  {
    label: "Alamat",
    value: " Saint John St. 103 A/III, California Blue, Vatican",
  },
];

export default function Dialog() {
  return (
    <main className=" fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
      <div className=" bg-white mx-8 md:mx-10 w-full lg:w-1/2 p-10 rounded-3xl  flex flex-col gap-7 justify-center mt-20 shadow-md">
        <div className=" flex justify-center">
          <h2 className="text-4xl font-bold text-blue">Your Profile</h2>
        </div>

        {/*DATA & PHOTO */}
        <div className="flex flex-wrap-reverse justify-center lg:flex-nowrap lg:justify-between gap-5">
          {/*DATA */}
          <div className=" w-full">
            <div className=" flex flex-col gap-3">
              {profileData.map((item, index) => (
                <div key={index} className=" flex flex-col">
                  <label className=" text-blue text-sm">{item.label}</label>
                  <p className=" outline-none font-medium text-blue">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/*PHOTO */}

          <div className=" border-2 border-red rounded-2xl w-full h-72 flex items-center justify-center py-3">
            <CircleUser size={34} color="#8c2b02" />
          </div>
        </div>
        <div>
          <Button label="Edit" variant="yellow" className=" py-2.5 w-full" />
        </div>
      </div>
    </main>
  );
}
