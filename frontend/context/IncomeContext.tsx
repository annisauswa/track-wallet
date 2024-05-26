'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
  totalIncome: number;
  setTotalIncome: Dispatch<SetStateAction<number>>;
  totalExpense: number;
  setTotalExpense: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<GlobalContextType>({
  totalIncome: 0,
  setTotalIncome: ():number => 0,
  totalExpense: 0,
  setTotalExpense: ():number => 0,
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({children}) => {
  const [totalIncome, setTotalIncome] = useState(16800000);
  const [totalExpense, setTotalExpense] = useState(560000);

  return (
    <GlobalContext.Provider value={{ totalIncome, setTotalIncome, totalExpense, setTotalExpense }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);