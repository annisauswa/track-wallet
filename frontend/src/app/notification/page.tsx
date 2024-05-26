import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from "../components/navbar";
import Profile from "../../../public/Ellipse 6.png";

export default function Settings() {
  const notificationsData = [
    {
      message: "Your expense has reached the limit!",
      details: "Please take a look to your daily expense for more details",
      time: "09:27 AM",
    },
    {
      message: "Your expense has reached the limit!",
      details: "Please take a look to your daily expense for more details",
      time: "04:58 AM",
    },
    {
        message: "Your expense has reached the limit!",
        details: "Please take a look to your daily expense for more details",
        time: "08:29 AM",
      },
  ];

  return (
    <div className="h-fit w-fit relative mx-auto flex flex-col items-center">
      <div className="w-[389px] min-h-screen text-sm bg-blackPrimary pt-10">
        <div className="w-full px-7 z-40">
          <div className="w-full flex flex-row items-center justify-start pb-7 z-40">
            <div className="flex flex-row items-center justify-start">
              <Link href="/">
                <RiArrowRightSLine
                  className="ml-auto text-white rotate-180 left-0"
                  size={36}
                />
              </Link>
            </div>
            <h1 className="relative mx-auto text-center font-bold text-[20px] -translate-x-3">
              Notification
            </h1>
          </div>
          <div className="flex flex-col pt-1 space-y-3">
            {notificationsData.map((notification, index) => (
              <div
                key={index}
                className="flex justify-between items-center pb-3 border-b-[1px] border-b-[#727272]"
              >
                <div className="max-w-[257px]">
                  <p className="text-[15px] font-medium mb-2">
                    {notification.message}
                  </p>
                  <p className="text-[13px] truncate">{notification.details}</p>
                </div>
                <span className="text-[11px] font-medium">
                  {notification.time}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[389px] mx-auto absolute bottom-0">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
