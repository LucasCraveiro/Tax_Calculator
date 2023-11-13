export type StoreState = {
  salary: number;
  year: number;
  totalTax: number;
  errorFetch: boolean;
  isSalaryZero: boolean;
  isLoading: boolean;
};

export type StoreActions = {
  setSalary: (newSalary: number) => void;
  setYear: (newYear: number) => void;
  setTotalTax: (newTotalTax: number) => void;
  setErrorFetch: (newErrorFetch: boolean) => void;
  setIsSalaryZero: (newIsSalaryZero: boolean) => void;
  setIsLoading: (newIsLoading: boolean) => void;
};

export type TaxBracket = {
  max?: number;
  min: number;
  rate: number;
};

export type TaxDataType = {
  tax_brackets: TaxBracket[];
};
