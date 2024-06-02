"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "../../../../firebase-auth";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../../public/Logo M.svg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const router = useRouter();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        router.push("/");
        console.log(user);
      }
    );
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="max-w-[389px] min-h-screen w-full items-center text-sm bg-blackPrimary py-8 px-7">
        <div className="flex justify-between w-full">
          <Link href="/">
            <IoIosArrowBack className="text-white w-8 h-8" />
          </Link>
          <Image src={Logo} alt="Track Wallet logo" width={86} height={39} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mt-8 mb-6 text-yellowPrimary">
            Sign Up
          </h1>
          <p className="mb-6 max-w-[612px] text-base text-center text-white md:mb-8">
            Please enter the email, password, and confirm password to make an
            account.
          </p>
        </div>
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-base text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="username@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white focus:border-none rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-base text-white"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-4 py-3 text-white placeholder-stone-400 focus:border-none bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary"
            />
          </div>
          <div className="mb-9">
            <label
              htmlFor="password"
              className="block mb-2 text-base text-white"
            >
              Confirm Password
            </label>
            <input
              id="passwordAgain"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPasswordAgain(e.target.value)}
              required
              className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary focus:border-none text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary"
            />
          </div>
          <button
            disabled={
              !email ||
              !password ||
              !passwordAgain ||
              password !== passwordAgain
            }
            type="submit"
            className="block w-full px-4 py-3 text-lg font-semibold text-blackPrimary bg-yellowPrimary rounded-lg focus:outline-none focus:ring cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-8 text-base text-white flex items-center justify-center">
          Already have an account?{" "}
          <Link href="/auth/login" className="hover:underline font-bold ml-2">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
