import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from "../components/navbar";
import IncomeHistory from "../components/income-history";
import ExpenseHistory from "../components/expense-history";

export default function Transaction() {
  return (
    <div className="h-screen w-fit mx-auto flex flex-col items-center">
      <div className="w-[389px] text-sm bg-blackPrimary pt-10">
        <div className="w-full px-7 pb-20">
          <div className="w-full flex flex-row items-center justify-start pb-9">
            <div className="flex flex-row items-center justify-start">
              <Link href="/">
                <RiArrowRightSLine
                  className="ml-auto text-white rotate-180 left-0"
                  size={38}
                />
              </Link>
            </div>
            <h1 className="mx-auto text-center font-bold text-[20px] -translate-x-4">
              Transaction History
            </h1>
          </div>
          <div>
            <IncomeHistory />
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
