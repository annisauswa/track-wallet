'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Profile() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="max-w-[389px] min-h-screen w-full items-center text-sm bg-blackPrimary py-8 px-7">


        <div className="flex justify-start w-full">
          <Link href="/auth/setting-profile">
            <IoIosArrowBack className="text-white w-8 h-8" />
          </Link>
          
          <div className='mx-auto'>
            <h1 className='text-white text-center text-lg font-semibold'>
                Edit Profile
            </h1>
          </div>

          <Link href="/" className='w-8 h-8'>
            <IoIosArrowBack className="text-white w-8 h-8 hidden" />
          </Link>          
        </div>

        <div className='w-full flex flex-col justify-center items-center mt-2'>
                <div className="mt-2 flex items-center gap-x-3">
                    <svg className="h-64 w-64 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div>
                    Change Profile
                </div>
        </div>

        <div className="w-full max-w-sm mt-4">
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-base text-white">
                    Name
                </label>
            
                <div className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary">
                    <div className='text-white flex items-center mx-2'>{session?.data?.user?.email }</div>
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-base text-white">
                    Email
                </label>
            
                <div className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary">
                    <div className='text-white flex items-center mx-2'>{session?.data?.user?.email }</div>
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-base text-white">
                    No Telp
                </label>
            
                <div className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary">
                    <div className='text-white flex items-center mx-2'>{session?.data?.user?.email }</div>
                </div>
            </div>
        </div>     
      
        <button
          onClick={() => signOut()}
          className="mt-8 mx-auto block w-1/2 px-4 py-3 text-lg font-semibold text-blackPrimary bg-yellowPrimary rounded-lg focus:outline-none focus:ring">
            Save Changes
          </button> 
      </div>
    </div>
  )
}

Profile.requireAuth = true