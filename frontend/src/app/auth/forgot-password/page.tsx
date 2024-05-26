'use client';
import { useState } from 'react';
import { auth } from '../../../../firebase-auth';
import { sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";
import Image from "next/image"
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../../public/Logo M.svg";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  };

  return (
    <>
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="max-w-[389px] min-h-screen w-full items-center text-sm bg-blackPrimary py-8 px-7">

        <div className="flex justify-between w-full">
          <Link href="/auth/login">
            <IoIosArrowBack className="text-white w-8 h-8" />
          </Link>

          <Image src={Logo} alt="Track Wallet logo" width={86} height={39} />
        </div>

      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold mt-8 mb-8 text-yellowPrimary">
          Forget Password
        </h1>
        <p className="mb-6 max-w-[612px] text-sm text-center leading-loose text-white md:mb-8">
          Don’t worry! It happens. Please enter the email and associated with your account.
        </p>
        </div>

        <div className="w-full max-w-sm">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-base text-white">
              Email
            </label>
            <input
            id='email'
            type="email"
            placeholder="username@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary"/>
          </div>
           
            <button
            onClick={() => resetEmail()}
            disabled={!email}
            className="block w-full px-4 py-3 text-lg font-semibold text-blackPrimary bg-yellowPrimary rounded-lg focus:outline-none focus:ring">
              Send Code
            </button>
        </div>
          
        <div className='flex justify-center items-center mt-auto'>
          <p className="mt-8 text-base text-white">
            Remember Password?{" "}
            <Link href="/auth/login" className="hover:underline font-bold">
              Log in
            </Link>
          </p>
        </div>

        </div>
      </div>
    </>
  )
}