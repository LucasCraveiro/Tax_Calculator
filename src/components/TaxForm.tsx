import useStore from "../store/store";
import { useQuery } from "react-query";

import SalaryInput from "./SalaryInput";
import YearSelect from "./YearSelect";

import { getTaxRate } from "../utils/helpers";
import { TaxDataType } from "../utils/types";

const TaxForm: React.FC = () => {
  const {
    salary,
    year,
    setTotalTax,
    setErrorFetch,
    isSalaryZero,
    setIsLoading,
  } = useStore();

  const { refetch, isFetching } = useQuery<
    TaxDataType,
    Error,
    TaxDataType,
    string[]
  >(
    ["taxData", String(year)],
    async () => {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5002/tax-calculator/tax-year/${year}`
      );

      if (!response.ok) {
        setTotalTax(0);
        setErrorFetch(true);
        setIsLoading(false);
        throw new Error(`Failed to fetch tax data. Status: ${response.status}`);
      }
      const data = await response.json();
      const userTaxRate = getTaxRate(data, salary);

      if (userTaxRate) {
        setErrorFetch(false);
        const calculatedTax = Number((salary * userTaxRate).toFixed(2));
        setTotalTax(calculatedTax);
        setIsLoading(false);
      }

      return data;
    },
    {
      enabled: false,
      retry: 2,
    }
  );

  const calculateTax: React.MouseEventHandler<Element> = async () => {
    await refetch();
  };

  return (
    <div className="lg:w-1/2">
      <SalaryInput />
      <YearSelect />
      <button
        type="button"
        onClick={calculateTax}
        disabled={isSalaryZero || isFetching}
        className={`flex w-full justify-center rounded-md mt-16 ${
          isSalaryZero || isFetching
            ? "bg-disabled cursor-not-allowed"
            : "bg-button_bg cursor-pointer hover:bg-button_bg_hover"
        } px-3 py-2 uppercase text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        Calculate
      </button>
    </div>
  );
};

export default TaxForm;
