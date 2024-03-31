import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../../public/Logo M.png";

const SignUp = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-16 px-7">
      <div className="flex justify-between w-full pb-14">
        <Link href="/">
          <IoIosArrowBack className="text-white w-8 h-8" />
        </Link>
        <Image src={Logo} alt="Track Wallet logo" width={86} height={39} />
      </div>
      <h1 className="text-4xl font-bold mt-2 mb-10 text-yellowPrimary">
        Sign up
      </h1>
      <form className="w-full max-w-sm">
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-base text-white">
            Email
          </label>
          <input
            type="email"
            placeholder="username@gmail.com"
            className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:border-transparent focus:ring focus:ring-yellowPrimary"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-base text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:border-transparent focus:ring focus:ring-yellowPrimary"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-base text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:border-transparent focus:ring focus:ring-yellowPrimary"
          />
        </div>
        <button className="block w-full px-4 py-3 text-lg font-semibold text-blackPrimary bg-yellowPrimary rounded-xl">
          Sign Up
        </button>
      </form>
      <div className="w-full flex justify-between items-center mt-8 mb-6">
        <div className="bg-white h-[1px] w-[79px]"></div>
        <p className="text-base text-white">Or sign up with</p>
        <div className="bg-white h-[1px] w-[79px]"></div>
      </div>
      <div className="flex items-center justify-between space-x-11">
        <button className="border border-white py-4 px-7 bg-blackPrimary rounded-xl">
          <FaFacebookF className="text-[#3C5A99]" size={25} />
        </button>
        <button className="border border-white py-4 px-7 bg-blackPrimary rounded-xl">
          <FcGoogle size={25} />
        </button>
        <button className="border border-white py-4 px-7 bg-blackPrimary rounded-xl">
          <FaApple className="text-white" size={27} />
        </button>
      </div>
      <p className="mt-8 text-base text-white">
        Already have an account?{" "}
        <Link href="/login" className="hover:underline font-bold">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
