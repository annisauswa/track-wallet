import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getFirestore,
    setDoc,
  } from "firebase/firestore";
  import { NavigateFunction } from "react-router-dom";
  // This is tree shaking from firestore
  
  import { AddExpanseType, AddIncomeType } from "../types/expanse";
  import { app } from "../../../firebase-database";
  
  export const firestore = getFirestore(app);
  
  // HOTELS COLLECTION
  export const expanseCollection = collection(firestore, "expanses");
  export const incomeCollection = collection(firestore, "income");
  
  // ADD A NEW DOCUMENT TO YOUR COLLECTION
  export const addExpanse = async (expanseData: AddExpanseType) => {
    const newExpanse = await addDoc(expanseCollection, { ...expanseData });
    console.log(`The new expanse was created at ${newExpanse.path}`);
  };
  
  export const addIncome = async (incomeData: AddIncomeType) => {
    const newIncome = await addDoc(incomeCollection, { ...incomeData });
    console.log(`The new Income was created at ${newIncome.path}`);
  };
  // DELETE A DOCUMENT IN YOUR COLLECTION
  export const deleteHotel = async (
    id: string | undefined,
    navigate: NavigateFunction
  ) => {
    const document = doc(firestore, `hotels/${id}`);
    await deleteDoc(document);
    console.log(`The hotel has now been deleted`);
    navigate("/");
  };
  
  // EDIT A DOCUMENT / DESCRIPTION
  export const updateHotel = async (id: string | undefined, docData: any) => {
    const getHotel = doc(firestore, `hotels/${id}`);
    await setDoc(getHotel, docData, { merge: true });
    console.log("The value has been written to the database");
  };