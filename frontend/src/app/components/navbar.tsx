"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "../../../public/home.png";
import TransactionIcon from "../../../public/transaction-nav.png";
import StatisticIcon from "../../../public/statistic-nav.png";
import SettingIcon from "../../../public/settings.png";
import AddIcon from "../../../public/add.png";
import HomeActiveIcon from "../../../public/home-active.png";
import TransactionActiveIcon from "../../../public/Transaction-active.png";
import StatisticActiveIcon from "../../../public/statistic-active.png";
import SettingActiveIcon from "../../../public/settings-active.png";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState<string>("home");

  const handleTabClick = (tabName: string) => {
    setActiveNav(tabName);
  };

  return (
    <div className="min-w-full flex flex-row items-center justify-center bottom-0 bg-white rounded-t-[40px] z-20 px-7 py-5">
      <div className="w-full flex flex-row justify-between">
        <div className="flex space-x-9">
          <Link
            href="#!"
            className="flex flex-col items-center"
            onClick={() => handleTabClick("home")}
          >
            <Image
              src={activeNav === "home" ? HomeActiveIcon : HomeIcon}
              alt="Home icon"
              width={23}
              height={23}
              className="w-6"
            />
            <p
              className={`text-[11px] ${
                activeNav === "home" ? "text-yellowPrimary" : "text-[#777777]"
              } `}
            >
              Home
            </p>
          </Link>
          <Link
            href="#!"
            className="flex flex-col items-center"
            onClick={() => handleTabClick("transaction")}
          >
            <Image
              src={
                activeNav === "transaction"
                  ? TransactionActiveIcon
                  : TransactionIcon
              }
              alt="Transaction icon"
              width={23}
              height={23}
              className="w-8"
            />
            <p
              className={`text-[11px] ${
                activeNav === "transaction"
                  ? "text-yellowPrimary"
                  : "text-[#777777]"
              } `}
            >
              Transaction
            </p>
          </Link>
        </div>
        <Link
          href="#!"
          className="relative bottom-11 flex flex-col items-center rounded-full p-4 bg-yellowPrimary"
        >
          <Image
            src={AddIcon}
            alt="Add icon"
            width={23}
            height={23}
            className="w-7"
          />
        </Link>
        <div className="flex space-x-9">
          <Link
            href="#!"
            className="flex flex-col items-center"
            onClick={() => handleTabClick("statistic")}
          >
            <Image
              src={
                activeNav === "statistic" ? StatisticActiveIcon : StatisticIcon
              }
              alt="Statistic icon"
              width={23}
              height={23}
              className="pt-1 w-7 h-6"
            />
            <p
              className={`text-[11px] ${
                activeNav === "statistic"
                  ? "text-yellowPrimary"
                  : "text-[#777777]"
              } `}
            >
              Statistic
            </p>
          </Link>
          <Link
            href="#!"
            className="flex flex-col items-center"
            onClick={() => handleTabClick("settings")}
          >
            <Image
              src={activeNav === "settings" ? SettingActiveIcon : SettingIcon}
              alt="Setting icon"
              width={23}
              height={23}
              className="w-6"
            />
            <p
              className={`text-[11px] ${
                activeNav === "settings"
                  ? "text-yellowPrimary"
                  : "text-[#777777]"
              } `}
            >
              Settings
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
