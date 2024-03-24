import Image from "next/image";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import Person from "../../../public/Ellipse 6.png";
import IncomeLarge from "../../../public/Group 222.png";
import ExpenseLarge from "../../../public/Group 223.png";
import IncomeSmall from "../../../public/Group 223 (1).png";
import ExpenseSmall from "../../../public/Group 223 (3).png";
import StatisticSmall from "../../../public/Group 223 (4).png";
import AIScanSmall from "../../../public/Group 223 (5).png";
import HistorySmall from "../../../public/Group 223 (7).png";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col pt-16 px-7">
      <div className="flex items-center justify-between w-full py-2">
        <div className="flex items-center space-x-3">
          <Image
            src={Person}
            alt="Profile Picture"
            width={42}
            height={42}
            className="rounded-full w-12"
          />
          <p className="ml-3 font-medium text-[18px]">Hi, John Doe</p>
        </div>
        <IoNotifications className="ml-4" size={29} />
      </div>
      <button className="w-full mt-6 py-5 px-7 bg-yellowPrimary rounded-[24px]">
        <div className="flex items-center">
          <Image
            src={IncomeLarge}
            alt="Income icon"
            width={47.11}
            height={47.11}
            className="w-14"
          />
          <div className="flex flex-col text-left ml-3 space-y-1">
            <p className="text-[16px]">Income</p>
            <p className="text-[22px] font-semibold">Rp5.000.000</p>
          </div>
          <RiArrowRightSLine className="ml-auto text-white" size={35} />
        </div>
      </button>
      <button className="w-full mt-6 py-5 px-7 bg-redPrimary rounded-[24px]">
        <div className="flex items-center">
          <Image
            src={ExpenseLarge}
            alt="Expense icon"
            width={47.11}
            height={47.11}
            className="w-14"
          />
          <div className="flex flex-col text-left ml-3 space-y-1">
            <p className="text-[16px]">Expense</p>
            <p className="text-[22px] font-semibold">Rp500.000</p>
          </div>
          <RiArrowRightSLine className="ml-auto text-white" size={35} />
        </div>
      </button>
      <p className="mt-8 mb-4 text-[16px] text-left">Features</p>
      <div className="flex flex-wrap gap-x-8 gap-y-5">
        <Link href="#!" className="text-center">
          <button className="flex flex-col items-center justify-center p-1 bg-white rounded-[14px]">
            <Image
              src={IncomeSmall}
              alt="Income icon"
              width={47.11}
              height={47.11}
              className="w-12"
            />
          </button>
          <p className="pt-2">Income</p>
        </Link>
        <Link href="#!" className="text-center">
          <button className="flex flex-col items-center justify-center p-1 bg-white rounded-[14px]">
            <Image
              src={ExpenseSmall}
              alt="Expense icon"
              width={47.11}
              height={47.11}
              className="w-12"
            />
          </button>
          <p className="pt-2">Expense</p>
        </Link>
        <Link href="#!" className="text-center">
          <button className="flex flex-col items-center justify-center p-1 bg-white rounded-[14px]">
            <Image
              src={StatisticSmall}
              alt="Statistic icon"
              width={47.11}
              height={47.11}
              className="w-12"
            />
          </button>
          <p className="pt-2">Statistic</p>
        </Link>
        <Link href="#!" className="text-center">
          <button className="flex flex-col items-center justify-center p-1 bg-white rounded-[14px]">
            <Image
              src={AIScanSmall}
              alt="AI Scan icon"
              width={47.11}
              height={47.11}
              className="w-12"
            />
          </button>
          <p className="pt-2">AI Scan</p>
        </Link>
        <Link href="#!" className="text-center">
          <button className="flex flex-col items-center justify-center p-1 bg-white rounded-[14px]">
            <Image
              src={HistorySmall}
              alt="History icon"
              width={47.11}
              height={47.11}
              className="w-12"
            />
          </button>
          <p className="pt-2">History</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
