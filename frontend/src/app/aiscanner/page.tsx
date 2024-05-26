'use client'
import Link from "next/link";
import React, { useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from "../components/navbar";
import IncomeHistory from "../components/income-history";
import ExpenseHistory from "../components/expense-history";

export default function Transaction() {
  const [uploadResult, setUploadResult] = useState({item:'', price:0});
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch(`http://localhost:8000/extract`, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setUploadResult(result.result || result.error);
      } catch (error:any) {
        setError(error.message);
      }
    } else {
      setUploadResult({item:'', price:0});
    }
  };
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  };
  return (
    <div className="h-screen w-fit relative mx-auto flex flex-col items-center overflow-hidden">
      <div className="w-[389px] min-h-full text-sm bg-yellowPrimary pt-10">
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
              AI Scanner
            </h1>
          </div>
          <div className="h-screen bg-blackPrimary py-5 pt-7 pb-14 px-8 space-y-5 text-white text-[16px] rounded-t-[40px]">
            <div className="h-screen ">
              <div className="w-full pb-7">
                <div className="w-full flex flex-row justify-between items-center pb-4">
                  <h1 className="text-[16px]">Upload File</h1>
                </div>
                <div className="flex flex-col space-y-[16px]">
                <div className="bg-white py-4 px-5 flex flex-row items-start justify-start rounded-[24px] text-black">
                  <input type="file" onChange={handleFileChange} className="w-full" />
                </div>
                </div>
              </div>
              {uploadResult.item!=='' && <div className="w-full pb-7">
                <div className="w-full flex flex-row justify-between items-center pb-4">
                  <h1 className="text-[16px]">Result</h1>
                </div>
                <div className="flex flex-col space-y-[16px]">
                <div className="bg-white py-4 px-5 flex flex-col items-start justify-start rounded-[24px] text-black">
                  <p>item: {uploadResult.item}</p>
                  <p>price: {formatPrice(uploadResult.price)}</p>
                </div>
                </div>
              </div>}

            </div>
          </div>
        </div>
        <div className="w-[389px] mx-auto absolute bottom-0">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
