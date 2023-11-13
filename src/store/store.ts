import { StoreApi, UseBoundStore, create } from "zustand";
import { StoreActions, StoreState } from "../utils/types";

const useTaxStore: UseBoundStore<StoreApi<StoreState & StoreActions>> = create(
  (set) => ({
    salary: 1,
    year: 2019,
    totalTax: 0.0,
    errorFetch: false,
    isSalaryZero: false,
    isLoading: false,

    setSalary: (newSalary) => set({ salary: newSalary }),
    setYear: (newYear) => set({ year: newYear }),
    setTotalTax: (newTotalTax) => set({ totalTax: newTotalTax }),
    setErrorFetch: (errorFetch) => set({ errorFetch: errorFetch }),
    setIsSalaryZero: (isSalaryZero) => set({ isSalaryZero: isSalaryZero }),
    setIsLoading: (isLoading) => set({ isLoading: isLoading }),
  })
);

export default useTaxStore;
