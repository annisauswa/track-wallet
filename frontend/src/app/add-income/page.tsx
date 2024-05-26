'use client';

import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from "../components/navbar";
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { addIncome } from "../lib/controller";

function AddIncome() {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [date, setDate] = useState("")

  const addNewIncome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addIncome({
      title,
      description,
      category,
      price: parseFloat(price),
      date,
    });
    console.log("successfully added a new hotel");
  };

  return (
    <div className="h-fit w-fit mx-auto flex flex-col items-center relative">
      <div className="absolute z-10 h-40 w-full rounded-b-[70px] bg-greenPrimary"></div>
      <div className="w-[389px] z-5 min-h-screen text-sm bg-blackPrimary pt-10">
        <div className="w-full px-7">
          <div className="w-full flex flex-row items-center justify-start pb-7">
            <div className="flex z-30 flex-row items-center justify-start">
              <Link href="/income">
                <RiArrowRightSLine className="ml-auto text-white rotate-180 left-0" size={38} />
              </Link>
            </div>
            <h1 className="relative z-30 mx-auto text-center font-bold text-[20px] -translate-x-3">
              Add Income
            </h1>
          </div>
          <div>
            <form onSubmit={(e) => addNewIncome(e)} className="flex flex-col space-y-4">
              <div className="bg-gray-100 z-30 text-black mb-2 p-5 rounded-[11px]">
                <label htmlFor="title" className="text-black mb-2">
                  Title:
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="title"
                  name="title"
                  className="w-full text-black border-b border-black bg-transparent p-2 focus:outline-none focus:ring-0"
                  placeholder=""
                />
              </div>
              <div className="bg-gray-100 z-30 text-black mb-2 p-5 rounded-[11px]">
                <label htmlFor="description" className="text-black mb-2">
                  Description:
                </label>
                <input
                 onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  id="description"
                  name="description"
                  className="w-full text-black border-b border-black bg-transparent p-2 focus:outline-none focus:ring-0"
                  placeholder=""
                />
              </div>
              <div className="bg-gray-100 z-30 text-black mb-2 p-5 rounded-[11px]">
                <label htmlFor="category" className="text-black mb-2">
                  Category:
                </label>
                <select className="w-full text-black border-b border-black bg-transparent p-2 focus:outline-none focus:ring-0" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="salary">salary</option>
                  <option value="passiveincome">passiveincome</option>
                  <option value="others">others</option>
               </select>
              </div>
              <div className="bg-gray-100 z-30 text-black mb-2 p-5 rounded-[11px]">
                <label htmlFor="price" className="text-black mb-2">
                  Price:
                </label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  min="1"
                  step="any"
                  id="price"
                  name="price"
                  className="w-full text-black border-b border-black bg-transparent p-2 focus:outline-none focus:ring-0"
                  placeholder=""
                />
              </div>
              <div className="bg-gray-100 z-30 text-black p-5 rounded-[11px]">
                <label htmlFor="date" className="text-black mb-2">
                  Date:
                </label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="text"
                  id="date"
                  name="date"
                  className="w-full text-black border-b border-black bg-transparent p-2 focus:outline-none focus:ring-0"
                  placeholder=""
                />
              </div>
              <button
                type="submit"
                className="mt-10 mb-20 py-2 h-[45px] bg-yellowPrimary text-white text-base rounded-[10px]"
              >
                Create
              </button>
            </form>
            {/* <ul>
              {items.map((item, id) => (
                <li key={id}>
                  <div>
                    <span>{item.name}</span>
                    <span>{item.description}</span>
                    <span>{item.category}</span>
                    <span>{item.price}</span>
                    <span>{item.date}</span>
                  </div>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
        <div className="w-[389px] mx-auto absolute bottom-0">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
