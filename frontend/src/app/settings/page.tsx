"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from "../components/navbar";
import Profile from "../../../public/Ellipse 6.png";

export default function Settings() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
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
              Settings
            </h1>
          </div>
          <div className="flex flex-col pt-1">
            <div className="flex items-center justify-start rounded-t-2xl space-x-3 px-5 py-3 bg-yellowPrimary border-b-black border-b-[1px]">
              <Image
                src={Profile}
                alt="Profile dummy"
                width={31}
                height={32}
                className="w-10"
              />
              <p className="text-lg">John Doe</p>
            </div>
            <div className="bg-white py-5 px-5 border-b-black border-b-[1px] text-blackPrimary text-[16px]">
              <h2 className="pb-4 text-[#ADADAD]">Account Settings</h2>
              <Link href="#!">
                <button className="w-full flex items-center justify-between mb-4">
                  <p>Edit profile</p>
                  <RiArrowRightSLine
                    className="mr-0 text-blackPrimary right-0"
                    size={18}
                  />
                </button>
              </Link>
              <Link href="#!">
                <button className="w-full flex items-center justify-between mb-4">
                  <p>Change password</p>
                  <RiArrowRightSLine
                    className="mr-0 text-blackPrimary right-0"
                    size={18}
                  />
                </button>
              </Link>
              <div className="w-full flex items-center justify-between">
                <p>Notification</p>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div className="block h-6 w-10 rounded-full bg-[#E5E7EB]"></div>
                    <div className="dot absolute left-1 top-1 h-[16px] w-[16px] rounded-full bg-white transition"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="text-blackPrimary bg-white py-5 px-5 rounded-b-2xl text-[16px]">
              <h2 className="pb-4 text-[#ADADAD]">Others</h2>
              <Link href="#!">
                <button className="w-full flex items-center justify-between mb-4">
                  <p>About us</p>
                  <RiArrowRightSLine
                    className="mr-0 text-blackPrimary right-0"
                    size={18}
                  />
                </button>
              </Link>
              <Link href="#!">
                <button className="w-full flex items-center justify-between">
                  <p>Privacy policy</p>
                  <RiArrowRightSLine
                    className="mr-0 text-blackPrimary right-0"
                    size={18}
                  />
                </button>
              </Link>
            </div>
          </div>
          <Link href="#!">
            <button className="w-full py-3 bg-yellowPrimary text-white rounded-2xl my-5 mt-8 text-[16px] font-semibold">
              <p>Logout</p>
            </button>
          </Link>
        </div>
        <div className="w-[389px] mx-auto absolute bottom-0">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
