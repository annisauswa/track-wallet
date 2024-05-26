import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import IncomeIcon from "../../../public/income.png";
import ExpenseIcon from "../../../public/expense.png";
import AIScanIcon from "../../../public/file.png";
import Navbar from "../components/navbar";

const Input = () => {
  return (
    <div className="h-screen w-fit mx-auto flex flex-col items-center">
      <div className="w-[389px] min-h-screen text-sm bg-blackPrimary pt-10">
        <div className="w-full px-7">
          <div className="w-full flex flex-row items-center justify-start pb-7">
            <div className="flex flex-row items-center justify-start">
              <Link href="/">
                <RiArrowRightSLine
                  className="ml-auto text-white rotate-180 left-0"
                  size={38}
                />
              </Link>
            </div>
            <h1 className="relative mx-auto text-center font-bold text-[20px] -translate-x-4">
              Add
            </h1>
          </div>
          <Link href="/income">
            <button className="w-full py-5 px-6 bg-yellowPrimary rounded-[24px]">
              <div className="flex items-center">
                <div className="rounded-[16px] bg-white p-[13px]">
                  <Image
                    src={IncomeIcon}
                    alt="Income icon"
                    width={31}
                    height={32}
                    className="w-6"
                  />
                </div>
                <p className="text-[18px] ml-3">Add Income</p>
                <RiArrowRightSLine className="ml-auto text-white" size={38} />
              </div>
            </button>
          </Link>
          <Link href="/expense">
            <button className="w-full mt-5 py-5 px-6 bg-redPrimary rounded-[24px]">
              <div className="flex items-center">
                <div className="rounded-[18px] bg-white p-[13px]">
                  <Image
                    src={ExpenseIcon}
                    alt="Expense icon"
                    width={31}
                    height={32}
                    className="w-6"
                  />
                </div>
                <p className="text-[18px] ml-3">Add Expense</p>
                <RiArrowRightSLine className="ml-auto text-white" size={38} />
              </div>
            </button>
          </Link>
          <Link href="/aiscanner">
            <button className="w-full mt-5 py-5 px-6 bg-bluePrimary rounded-[24px]">
              <div className="flex items-center">
                <div className="rounded-[16px] bg-white p-[13px]">
                  <Image
                    src={AIScanIcon}
                    alt="AI Scan icon"
                    width={31}
                    height={32}
                    className="w-6"
                  />
                </div>
                <p className="text-[18px] ml-3">AI Scan</p>
                <RiArrowRightSLine className="ml-auto text-white" size={38} />
              </div>
            </button>
          </Link>
        </div>
        <div className="w-[389px] mx-auto absolute bottom-0">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Input;
