'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from "../../../../firebase-auth"
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../../public/Logo M.svg";


const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: { preventDefault: () => void; }) =>{
    e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    router.push("/")
    console.log(user);
  })
  .catch((error) => {
    setError(true);
  });
  }
  return (
  
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="max-w-[389px] min-h-screen w-full items-center text-sm bg-blackPrimary py-8 px-7">

        <div className="flex justify-between w-full">
          <Link href="/">
            <IoIosArrowBack className="text-white w-8 h-8" />
          </Link>
          <Image src={Logo} alt="Track Wallet logo" width={86} height={39} />
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className="text-4xl font-bold mt-8 mb-8 text-yellowPrimary">
            Log In
          </h1>
          <p className="mb-6 max-w-[612px] text-sm text-center leading-loose text-white md:mb-8">
            Please enter the email, password and associated with your account.
          </p>
        </div>

        <form onSubmit={handleLogin} className="w-full max-w-sm">
          
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-base text-white">
              Email
            </label>
            
            <input
            id='email'
            type="email"
            placeholder="username@gmail.com"
            onChange={e => setEmail(e.target.value)}
            required
            className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary"/>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-base text-white">
              Password
            </label>
            
            <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            required
            className="block w-full px-4 py-3 text-white placeholder-white bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary"/>

            <div className='flex justify-end'>
              <div className="text-sm mt-8">
                <div onClick={() => router.push('/')} className="cursor-pointer font-semibold text-white hover:text-grey-300">
                  Forgot password?
                </div>
              </div>
            </div>
          </div>

          <button
          type='submit'
          onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})}
          disabled={!email || !password}
          className="block w-full px-4 py-3 text-lg font-semibold text-blackPrimary bg-yellowPrimary rounded-lg focus:outline-none focus:ring">
            Log In
          </button> 
          {error && <span> 
                    <div className='text-rose-500 mt-8 justify-center flex'>
                    Wrong Email or Password 
                    </div>
                    </span>} 
        </form>


        <div className="w-full flex justify-between items-center mt-8 mb-6">
          <div className="bg-white h-[1px] w-[79px]"></div>
          <p className="text-base text-white">Or sign up with</p>
          <div className="bg-white h-[1px] w-[79px]"></div>
        </div>

        <div className="flex items-center justify-between space-x-10">
          <button className="border border-white py-4 px-7 bg-blackPrimary rounded-lg">
            <FaFacebookF className="text-[#3C5A99] w-7 h-7" />
          </button>
          <button className="border border-white py-4 px-7 bg-blackPrimary rounded-lg">
            <FcGoogle className="w-7 h-7" />
          </button>
          <button className="border border-white py-4 px-7 bg-blackPrimary rounded-lg">
            <FaApple className="text-white w-7 h-7" />
          </button>
        </div>

        <p className="mt-8 text-base text-white flex items-center justify-center">
          Not a member?{' '}
          <button onClick={() => router.push('signup')} className="hover:underline font-bold">
            Sign Up
          </button>
        </p>
        
      </div>
    </div>
    
  )
}

export default LogIn