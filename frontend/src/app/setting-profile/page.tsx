"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Logo from "../../../public/Logo M.svg";
import Navbar from "../components/navbar";

export default function Setting() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/login");
    },
  });
  return (
    <div className="h-screen w-full mx-auto flex flex-col items-center relative">
      <div className="w-[389px] h-full text-sm bg-blackPrimary pt-10 pb-12">
        <div className="px-7 pb-28">
          <div className="flex justify-center">
            <Link href="/">
              <IoIosArrowBack className="text-white w-8 h-8" />
            </Link>
            <div className="mx-auto">
              <h1 className="text-white text-center text-lg font-semibold">
                Settings
              </h1>
            </div>
            <Link href="/" className="w-8 h-8">
              <IoIosArrowBack className="text-white w-8 h-8 hidden" />
            </Link>
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <div className="flex w-full px-4 py-3 text-lg font-semibold text-blackPrimary bg-yellowPrimary rounded-t-lg focus:outline-none focus:ring">
              <div className="mt-2 flex items-center gap-x-3">
                <svg
                  className="h-12 w-12 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-black flex items-center mx-4">
                {session?.data?.user?.email}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col w-full px-4 py-3 text-lg font-normal bg-white border-b-4 border-black focus:outline-none focus:ring">
              <div className="my-4 flex flex-col gap-y-4">
                <h2 className="text-slate-500">Account Settings</h2>
                <div className="flex items-center justify-between">
                  <Link href="/setting-profile/profile">
                    <h2 className="text-blackPrimary font-semibold">
                      Edit Profile
                    </h2>
                  </Link>
                  <Link
                    href="/setting-profile/profile"
                    className="flex items-center"
                  >
                    <IoIosArrowForward className="text-black w-6 h-6" />
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/setting-profile/forgot-password-profile">
                    <h2 className="text-blackPrimary font-semibold">
                      Change Password
                    </h2>
                  </Link>
                  <Link
                    href="/setting-profile/forgot-password-profile"
                    className="flex items-center"
                  >
                    <IoIosArrowForward className="text-black w-6 h-6" />
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-blackPrimary font-semibold">
                    Notification
                  </h2>
                  <Link href="/" className="flex items-center">
                    <IoIosArrowForward className="text-black w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full px-4 py-3 text-lg font-normal bg-white rounded-b-lg focus:outline-none focus:ring">
              <div className="my-4 flex flex-col gap-y-4">
                <h2 className="text-slate-500">More</h2>
                <div className="flex items-center justify-between">
                  <h2 className="text-blackPrimary font-semibold">About Us</h2>
                  <Link href="/" className="flex items-center">
                    <IoIosArrowForward className="text-black w-6 h-6" />
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-blackPrimary font-semibold">
                    Privacy Policy
                  </h2>
                  <Link href="/" className="flex items-center">
                    <IoIosArrowForward className="text-black w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="mt-8 mx-auto block w-full px-4 py-3 text-lg font-semibold text-white bg-yellowPrimary rounded-lg focus:outline-none focus:ring"
          >
            Log out
          </button>
        </div>
        <div className="w-[389px] mx-auto absolute bottom-0">
            <Navbar />
          </div>
      </div>
    </div>
  );
}

Setting.requireAuth = true;
