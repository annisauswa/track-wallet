'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import IncomeSmall from "../../../../public/income.png";
import ExpenseSmall from "../../../../public/expense.png";
import StatisticSmall from "../../../../public/statistic.png";
import AIScanSmall from "../../../../public/file.png";
import HistorySmall from "../../../../public/Transaction.png";
import formatPrice from "../../../../utils/formatPrice";
import { useGlobalContext } from '../../../../context/IncomeContext';

const Features = () => {
  const { totalIncome, totalExpense, setTotalIncome, setTotalExpense } = useGlobalContext();

  return (
    <div className="min-h-full flex flex-col pt-1 pb-7 px-7">
      <Link href="/income">
        <button className="w-full py-5 px-6 bg-yellowPrimary rounded-[24px]">
          <div className="flex items-center">
            <div className="rounded-[16px] bg-white p-[13px]">
              <Image
                src={IncomeSmall}
                alt="Income icon"
                width={31}
                height={32}
                className="w-7"
              />
            </div>
            <div className="flex flex-col text-left ml-3 space-y-1">
              <p className="text-[16px]">Income</p>
              <p className="text-[22px] font-semibold">{formatPrice(totalIncome)}</p>
            </div>
            <RiArrowRightSLine className="ml-auto text-white" size={38} />
          </div>
        </button>
      </Link>
      <Link href="/expense">
        <button className="w-full mt-5 py-5 px-6 bg-redPrimary rounded-[24px]">
          <div className="flex items-center">
            <div className="rounded-[16px] bg-white p-[13px]">
              <Image
                src={ExpenseSmall}
                alt="Expense icon"
                width={31}
                height={32}
                className="w-7"
              />
            </div>
            <div className="flex flex-col text-left ml-3 space-y-1">
              <p className="text-[16px]">Expense</p>
              <p className="text-[22px] font-semibold">{formatPrice(totalExpense)}</p>
            </div>
            <RiArrowRightSLine className="ml-auto text-white" size={38} />
          </div>
        </button>
      </Link>
      <p className="mt-7 mb-4 text-[18px] font-medium text-left">Features</p>
      <div className="flex flex-wrap gap-x-8 gap-y-5">
        <Link href="/income" className="text-center">
          <button className="flex flex-col items-center justify-center rounded-[16px] bg-white p-[13px]">
            <Image
              src={IncomeSmall}
              alt="Income icon"
              width={21}
              height={25}
              className="w-8"
            />
          </button>
          <p className="pt-1.5">Income</p>
        </Link>
        <Link href="/expense" className="text-center">
          <button className="flex flex-col items-center justify-center rounded-[16px] bg-white p-[13px]">
            <Image
              src={ExpenseSmall}
              alt="Expense icon"
              width={21}
              height={25}
              className="w-8"
            />
          </button>
          <p className="pt-1.5">Expense</p>
        </Link>
        <Link href="#!" className="text-center">
          <button className="flex flex-col items-center justify-center rounded-[16px] bg-white px-[13px] py-[19px]">
            <Image
              src={StatisticSmall}
              alt="Statistic icon"
              width={21}
              height={25}
              className="w-8"
            />
          </button>
          <p className="pt-1.5">Statistic</p>
        </Link>
        <Link href="aiscanner" className="text-center">
          <button className="flex flex-col items-center justify-center rounded-[16px] bg-white py-[15px] px-[16px]">
            <Image
              src={AIScanSmall}
              alt="AI Scan icon"
              width={21}
              height={25}
              className="w-7"
            />
          </button>
          <p className="pt-1.5">AI Scan</p>
        </Link>
        <Link href="/transaction" className="text-center">
          <button className="flex flex-col items-center justify-center rounded-[16px] bg-white py-[17px] px-[13px]">
            <Image
              src={HistorySmall}
              alt="History icon"
              width={21}
              height={30}
              className="w-8"
            />
          </button>
          <p className="pt-1.5">History</p>
        </Link>
      </div>
    </div>
  );
};

export default Features;
