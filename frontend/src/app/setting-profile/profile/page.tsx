"use client";

import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import AdvertisementImg from "../../../../public/edit-profile.svg";
import Image from 'next/image';
import { RiArrowRightSLine } from 'react-icons/ri';
import Link from "next/link";
import Modals from './modal';


export default function Profile() {
    const session = useSession({
        required: true,
        onUnauthenticated() {
          redirect('auth/login');
        },
      });

      
  return (
    <div className="h-screen w-fit mx-auto flex flex-col items-center">
        <div className="w-[389px] min-h-screen text-sm bg-blackPrimary pt-10">
            <div className="w-full">
                
                <div className="w-full flex flex-row items-center justify-start pb-7 px-7">
                    <div className="flex flex-row items-center justify-start">
                        <Link href="/setting-profile">
                            <RiArrowRightSLine
                            className="ml-auto text-white rotate-180 left-0"
                            size={38}
                            />
                        </Link>
                    </div>
                    
                    <h1 className="relative mx-auto text-center font-bold text-[20px] -translate-x-3">
                        Edit Profile
                    </h1>
                </div>
        
                <div className='flex flex-col items-center justify-center mb-8'>
                    <Image
                    src={AdvertisementImg}
                    alt="Advertisement 1"
                    width={250}
                    height={250}
                    className='px-7'
                    />

                    <Modals />
                </div>

          
                <div className="w-full max-w-sm px-7">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-base text-white">
                            Name
                        </label>
                        <input
                        id='name'
                        type="name"
                        placeholder="John Doe"
                        required
                        className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary"/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-base text-white">
                            Email
                        </label>
                          <div className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary">
                          {session?.data?.user?.email}
                          </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="phonenumber" className="block mb-2 text-base text-white">
                            Phone Number
                        </label>
                        <input
                        id='phonenumber'
                        type="phonenumber"
                        placeholder="+6281920410921"
                        required
                        className="block w-full px-4 py-3 text-white placeholder-stone-400 bg-blackPrimary text-base border border-white rounded-lg focus:outline-none focus:ring focus:ring-yellowPrimary"/>
                    </div>
           
                    <button className="block w-full px-4 py-3 text-lg font-semibold text-blackPrimary bg-yellowPrimary rounded-lg focus:outline-none focus:ring">
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    </div>
  );
}
Profile.requireAuth = true