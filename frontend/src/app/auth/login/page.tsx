"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, provider } from "../../../../firebase-auth";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../../public/Logo M.svg";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/");
        console.log(user);
      })
      .catch((error) => {
        setError(true);
      });
  };

  const loginwithgoogle = () => {
    signInWithPopup(auth, provider);
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
            Log In
          </h1>
          <p className="mb-6 max-w-[612px] text-base text-center text-white md:mb-8">
            Please enter the email and password associated with your account.
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
              className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:border-none focus:outline-none focus:ring focus:ring-yellowPrimary"
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
              className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:border-none focus:outline-none focus:ring focus:ring-yellowPrimary"
            />
            <div className="flex justify-end">
              <div className="text-sm mt-2">
                <div
                  onClick={() => router.push("/auth/forgot-password")}
                  className="cursor-pointer font-semibold text-white hover:text-grey-300"
                >
                  Forgot password?
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={() =>
              signIn("credentials", {
                email,
                password,
                redirect: true,
                callbackUrl: "/",
              })
            }
            disabled={!email || !password}
            className="block w-full px-4 py-3 text-lg font-semibold text-blackPrimary bg-yellowPrimary rounded-lg focus:outline-none focus:ring cursor-pointer"
          >
            Log In
          </button>
          {error && (
            <span>
              <div className="text-rose-500 mt-8 justify-center flex">
                Wrong Email or Password
              </div>
            </span>
          )}
        </form>
        <p className="mt-8 text-base text-white flex items-center justify-center">
          Dont have an account yet?{" "}
          <button
            onClick={() => router.push("signup")}
            className="hover:underline font-bold ml-2"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
