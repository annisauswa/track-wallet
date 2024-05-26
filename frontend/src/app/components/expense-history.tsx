'use client'

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ShoppingBag from "../../../public/shopping-bag.png";
import Bill from "../../../public/recurring-bill.png";
import Restaurant from "../../../public/restaurant.png";
import { expanseCollection } from "../lib/controller";
import { NewExpanseType } from "../types/expanse";
import { useEffect, useState } from "react";
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";

const ExpenseHistory = () => {

  const [expanses, setExpanses] = useState<NewExpanseType[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(expanseCollection, (snapshot: QuerySnapshot<DocumentData>) => {
      const newExpanses: NewExpanseType[] = snapshot.docs.map((doc) => {
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
      setExpanses(newExpanses);

      const totalPrice = newExpanses.reduce(
        (sum, expanse) => sum + expanse.price,
        0
      );
      setTotal(totalPrice);
    });

    return () => unsubscribe();
  }, []);

  const categoryIcons: { [key: string]: StaticImageData } = {
    food: Restaurant,
    shooping: ShoppingBag,
    subscription: Bill,
  };

  const getCategoryBackgroundColor = (category: string) => {
    switch (category) {
      case 'shooping':
        return '#FCEED4';
      case 'subscription':
        return '#E5EFFF';
      case 'food':
        return '#FDD5D7';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <div className="w-full px-7 pb-7">
      <div className="w-full flex flex-row justify-between items-center pb-4">
        <h1 className="text-[16px]">Expense History</h1>
      </div>
      <div className="flex flex-col space-y-4">
        {expanses.map((expanse) => (
          <Link
            href="#"
            key={expanse.id}
            className="bg-white py-4 px-5 flex items-center justify-between rounded-[24px]"
          >
            <div className="flex items-center space-x-3">
              <div
                style={{
                  backgroundColor: getCategoryBackgroundColor(expanse.category),
                }}
                className="p-2.5 rounded-[15px]"
              >
                <Image
                  src={categoryIcons[expanse.category]} // Fallback to Restaurant icon if category not found
                  alt="History icon"
                  width={31}
                  height={32}
                  className="w-8"
                />
              </div>
              <div>
                <p className="text-[15px] text-blackPrimary mb-1.5">
                  {expanse.title}
                </p>
                <p className="text-[#91919F] text-[13px]">{expanse.category}</p>
              </div>
            </div>
            <div className="text-right right-0">
              <p className="text-[14px] text-[#FD3C4A] mb-1.5">
                {expanse.price}
              </p>
              <p className="text-[#91919F] text-[12px]">{expanse.date}</p>
            </div>
          </Link>
        ))}
      </div>
        {expanses.length <1 ? (
          '0'
        ) : (
          <div>
            <span>Total</span>
            <span>${total}</span>
          </div>
        )}

    </div>
  );
};

export default ExpenseHistory;
