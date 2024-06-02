"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import HomeIcon from "../../../public/home.png";
import AddIcon from "../../../public/add-icon.png";
import TransactionIcon from "../../../public/transaction-nav.png";
import SettingIcon from "../../../public/settings.png";
import HomeActiveIcon from "../../../public/home-active.png";
import AddActiveIcon from "../../../public/add-active.png";
import TransactionActiveIcon from "../../../public/transaction-active.png";
import SettingActiveIcon from "../../../public/settings-active.png";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState<string>("home");

  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveNav("home");
        break;
      case "/input":
        setActiveNav("add");
        break;
      case "/transaction":
        setActiveNav("transaction");
        break;
      case "/setting-profile":
        setActiveNav("settings");
        break;
      default:
        setActiveNav("");
    }
  }, [pathname]);

  const handleTabClick = (tabName: string, href: string) => {
    setActiveNav(tabName);
    router.push(href);
  };

  return (
    <div className="w-[389px] fixed flex flex-row items-center justify-center bottom-0 bg-white rounded-t-[40px] z-40 px-7 py-4">
      <div className="w-full flex flex-row justify-between">
        <div className="w-full flex justify-between items-end">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleTabClick("home", "/")}
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
          </div>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleTabClick("add", "/input")}
          >
            <Image
              src={activeNav === "add" ? AddActiveIcon : AddIcon}
              alt="Add icon"
              width={23}
              height={23}
              className="w-7"
            />
            <p
              className={`text-[11px] ${
                activeNav === "add" ? "text-yellowPrimary" : "text-[#777777]"
              } `}
            >
              Add
            </p>
          </div>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleTabClick("transaction", "/transaction")}
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
          </div>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleTabClick("settings", "/setting-profile")}
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
          </div>
        </div>
      </div>
    </div>
  );
}
