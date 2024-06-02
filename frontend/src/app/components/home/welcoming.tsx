import Image from "next/image";
import LaptopImg from "../../../../public/Logo M.svg";
import Link from "next/link";
import { resolve } from "path";

export default function WelcomePage() {
  return (
    <div className="flex justify-center h-screen bg-white ">
      <div className="w-[640px] max-w-[768px] flex flex-col justify-center bg-blackPrimary items-center py-8 px-7">
        <div className="px-4">
          <div className=" mb-12">
            <Image
              src={LaptopImg}
              alt="coming-soon"
              className=" min-w-[339px] max-h-[250px] "
            />
          </div>
          <h1 className="mb-3 text-[22px] font-bold text-center leading-snug sm:text-2xl ">
            Explore The APP
          </h1>
          <p className="mb-6 max-w-[612px] text-sm text-center leading-loose text-gray-500 md:mb-8">
            Now your finances are in one place and always under control
          </p>
          <div className="mt-8 bg-primary flex flex-col justify-center w-full gap-4">
            <Link href="/auth/signup">
              <button className="block w-full px-4 py-3 text-lg font-semibold text-blackPrimary bg-yellowPrimary rounded-lg focus:outline-none focus:ring">
                Sign Up
              </button>
            </Link>
            <Link href="/auth/login">
              <button className="block w-full px-4 py-3 text-lg font-semibold text-blackPrimary bg-white rounded-lg focus:outline-none focus:ring">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
