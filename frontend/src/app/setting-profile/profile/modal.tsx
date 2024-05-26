"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import AdvertisementImg from "../../../../public/Picture.svg";
import Image from 'next/image';
import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion, AnimatePresence} from "framer-motion";
import { RiArrowRightSLine } from 'react-icons/ri';
import Link from "next/link";

export default function Modals() {
    const [open, setOpen] = useState<boolean>(false);

  return (
    <> 

            <div 
            onClick={() => setOpen(true)}
            className="cursor-pointer mt-6 text-center font-bold text-[20px]">
                Edit profile
            </div>

        
        <div className="w-full">
        <motion.div
        animate={
            open ? { opacity:0.6, zIndex:3 } : { opacity:0, display:"none"}
        }
        initial={{opacity:0}}
        className=" top-0 bottom-0 right-0 left-0 h-full w-screen bg-white"
        />

        <AnimatePresence initial={false}>
            {open && (
                <motion.div
                key='content'
                initial='collapsed'
                animate='open'
                exit='collapsed'
                variants={{
                    open:{y:0, height:'15%', width:'389px' },
                    collapsed:{y:'100%', height:0, width:'389px'},
                }}
                transition={{ duration:0.4, ease:[0.04, 0.62, 0.23, 0.98]}}
                className="border-gray-50 fixed bottom-0 z-50 w-full rounded-t-3xl border-2 border-b-0 bg-white shadow-[0px_-8px_20px_-6px_rgba(0,0,0,3)]"
                >
                    <div className="h-6 p-4 text-black flex flex-col space-y-6">
                        
                        <div className="flex justify-between">
                            <h1 className=" font-medium text-[20px] ">
                                Change Profile Picture
                            </h1>

                            <div className="flex">
                                <XMarkIcon className="w-6" onClick={() => setOpen(false)}/>
                            </div>
                        </div>
                       
                        
                        <div className="flex justify-between">
                            <div className="flex space-x-4">
                                <Image
                                src={AdvertisementImg}
                                alt="Advertisement 1"
                                width={20}
                                height={20}
                                />

                                <h1 className=" font-medium text-[12px] ">
                                    choose from gallery
                                </h1>
                            </div>

                            <Link href="/">
                                <RiArrowRightSLine
                                className="text-black"
                                size={20}
                                />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        </div>
 
    </>
  );
}