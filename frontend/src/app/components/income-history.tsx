'use client'

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Salary from "../../../public/salary-green.png";
import PassiveIncome from "../../../public/briefcase.png";
import Others from "../../../public/salary-black.png";
import { incomeCollection } from "../lib/controller";
import { NewIncomeType } from "../types/expanse";
import { useEffect, useState } from "react";
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import FormatPrice from "../../../utils/formatPrice";
import { useGlobalContext } from "../../../context/IncomeContext";

const IncomeHistory = () => {
  const {totalIncome, setTotalIncome} = useGlobalContext();
  const [incomes, setIncomes] = useState<NewIncomeType[]>([]);
  // const [total, setTotal] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(incomeCollection, (snapshot: QuerySnapshot<DocumentData>) => {
      const newIncomes: NewIncomeType[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          description: data.description,
          category: data.category,
          price: data.price,
          date: data.date,
        };
      });
      setIncomes(newIncomes);

      const totalPrice = newIncomes.reduce(
        (sum, income) => sum + income.price,
        0
      );
      setTotalIncome(totalPrice);
    });

    return () => unsubscribe();
  }, []);
  console.log(incomes)

  const categoryIcons: { [key: string]: StaticImageData } = {
    salary: Salary,
    passiveincome: PassiveIncome,
    others: Others,
  };

  const getCategoryBackgroundColor = (category: string) => {
    switch (category) {
      case 'salary':
        return '#CFFAEA';
      case 'passiveincome':
        return '#E5EFFF';
      case 'others':
        return '#B8B8B8';
      default:
        return '#FFFFFF';
    }
  };

  return (
<div className="w-full px-7 pb-7">
      <div className="w-full flex flex-row justify-between items-center pb-4">
        <h1 className="text-[16px]">Income History</h1>
      </div>
      <div className="flex flex-col space-y-4">
        {incomes.map((income) => (
          <Link
            href="#"
            key={income.id}
            className="bg-white py-4 px-5 flex items-center justify-between rounded-[24px]"
          >
            <div className="flex items-center space-x-3">
              <div
                style={{
                  backgroundColor: getCategoryBackgroundColor(income.category),
                }}
                className="p-2.5 rounded-[15px]"
              >
                <Image
                  src={categoryIcons[income.category]}
                  alt="History icon"
                  width={31}
                  height={32}
                  className="w-8"
                />
              </div>
              <div>
                <p className="text-[15px] text-blackPrimary mb-1.5">
                  {income.title}
                </p>
                <p className="text-[#91919F] text-[13px]">{income.category}</p>
              </div>
            </div>
            <div className="text-right right-0">
              <p className="text-[14px] text-[#FD3C4A] mb-1.5">
                {FormatPrice(income.price)}
              </p>
              <p className="text-[#91919F] text-[12px]">{income.date}</p>
            </div>
          </Link>
        ))}
      </div>
        {/* {incomes.length <1 ? (
          '0'
        ) : (
          <div>
            <span>Total</span>
            <span>${total}</span>
          </div>
        )} */}

    </div>
  );
};

export default IncomeHistory;



