import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from "../components/navbar";
import ExpenseSmall from "../../../public/expense.png";
import ExpenseHistory from "../components/expense-history";

export default function Expense() {
  return (
    <div className="h-screen w-fit relative mx-auto flex flex-col items-center overflow-visible">
      <div className="w-[389px] min-h-full text-sm bg-redPrimary pt-10">
        <div className="w-full z-40">
          <div className="w-full flex flex-row items-center justify-start px-7 pb-7 z-40">
            <div className="flex flex-row items-center justify-start">
              <Link href="/">
                <RiArrowRightSLine
                  className="ml-auto text-white rotate-180 left-0"
                  size={36}
                />
              </Link>
            </div>
            <h1 className="relative mx-auto text-center font-bold text-[20px] -translate-x-3">
              Expense
            </h1>
          </div>
          <div className="flex flex-col pt-1 pb-6 px-7 space-y-3">
            <h2 className="text-[18px]">Total Expense</h2>
            <p className="text-[30px] font-semibold">Rp500.000</p>
          </div>
          <div className="bg-blackPrimary py-5 pt-7 pb-14 px-8 space-y-5 h-screen text-white text-[16px] rounded-t-[40px]">
            <div>
              <Link href="/add-expanse">
                <button className="w-full py-4 px-5 bg-redPrimary rounded-[24px]">
                  <div className="flex items-center">
                    <div className="rounded-[15px] bg-white p-[13px]">
                      <Image
                        src={ExpenseSmall}
                        alt="Expense icon"
                        width={31}
                        height={32}
                        className="w-5"
                      />
                    </div>
                    <p className="text-[16px] ml-3 font-medium">Add Expense</p>
                    <RiArrowRightSLine
                      className="ml-auto text-white"
                      size={30}
                    />
                  </div>
                </button>
              </Link>
            </div>
            <ExpenseHistory />
          </div>
        </div>
        <div className="w-[389px] mx-auto absolute bottom-0">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
