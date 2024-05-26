'use client';

import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import IncomeIcon from "../../../public/income.png";
import ExpenseIcon from "../../../public/expense.png";
import AIScanIcon from "../../../public/file.png";
import Navbar from "../components/navbar";
import { useState } from "react";
import { db } from "../../../firebase-database";
import { collection, addDoc } from 'firebase/firestore';

const AddExpanse = () => {
  const [items, setItems] = useState([
    {
      name: 'play',
      description: 'play football',
      category: 'playing',
      price: "5000",
      date: "10-02-03"
    },
  ]);
  const [newItem, setNewItem] = useState({ name: '', description: '', category: '', price: '', date: '' });

  const additem = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (newItem.name !== '' && newItem.description !== '' && newItem.category !== '' && newItem.price !== '' && newItem.date !== '') {
      setItems([...items, newItem]);
      try {
        const docRef = await addDoc(collection(db, 'sure'), {
          name: newItem.name.trim(),
          description: newItem.description,
          category: newItem.category,
          price: newItem.price,
          date: newItem.date,
        });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div className="h-fit w-fit mx-auto flex flex-col items-center relative">
      <div className="absolute z-10 h-40 w-full rounded-b-[70px] bg-redPrimary"></div>
      <div className="w-[389px] z-5 min-h-screen text-sm bg-blackPrimary pt-10">
        <div className="w-full px-7">
          <div className="w-full flex flex-row items-center justify-start pb-7">
            <div className="flex z-30 flex-row items-center justify-start">
              <Link href="/">
                <RiArrowRightSLine className="ml-auto text-white rotate-180 left-0" size={38} />
              </Link>
            </div>
            <h1 className="relative z-30 mx-auto text-center font-bold text-[20px] -translate-x-3">
              Add Expanse
            </h1>
          </div>
          <div>
            <form onSubmit={additem} className="flex flex-col space-y-4">
              <div className="bg-gray-100 z-30 text-black mb-2 p-5 rounded-[11px]">
                <label htmlFor="title" className="text-black mb-2">
                  Title:
                </label>
                <input
                  value={newItem.name}
                  onChange={e => setNewItem({ ...newItem, name: e.target.value })}
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
                  value={newItem.description}
                  onChange={e => setNewItem({ ...newItem, description: e.target.value })}
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
                <input
                  value={newItem.category}
                  onChange={e => setNewItem({ ...newItem, category: e.target.value })}
                  type="text"
                  id="category"
                  name="category"
                  className="w-full text-black border-b border-black bg-transparent p-2 focus:outline-none focus:ring-0"
                  placeholder=""
                />
              </div>
              <div className="bg-gray-100 z-30 text-black mb-2 p-5 rounded-[11px]">
                <label htmlFor="price" className="text-black mb-2">
                  Price:
                </label>
                <input
                  value={newItem.price}
                  onChange={e => setNewItem({ ...newItem, price: e.target.value })}
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
                  value={newItem.date}
                  onChange={e => setNewItem({ ...newItem, date: e.target.value })}
                  type="text"
                  id="date"
                  name="date"
                  className="w-full text-black border-b border-black bg-transparent p-2 focus:outline-none focus:ring-0"
                  placeholder=""
                />
              </div>
              <button
                onClick={additem}
                type="submit"
                className="mt-10 py-2 h-[45px] bg-yellowPrimary text-white text-base rounded-[10px]"
              >
                Create
              </button>
            </form>
            <ul>
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
            </ul>
          </div>
        </div>
        <div className="w-[389px] mx-auto absolute bottom-0">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default AddExpanse;
