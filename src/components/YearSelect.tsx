import React from "react";
import useTaxStore from "../store/store";
import { years } from "../utils/helpers";

const YearSelect: React.FC = () => {
  const { year, setYear, setTotalTax, isLoading } = useTaxStore();

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTotalTax(0);
    const selectedYear = parseInt(event.target.value);
    setYear(selectedYear);
  };
  return (
    <div className="mt-10">
      <label
        htmlFor="year"
        className="block pl-1 text-lg font-medium leading-6 text-label"
      >
        Select the Year
      </label>
      <select
        id="year"
        name="year"
        disabled={isLoading}
        className="mt-2 block bg-input_bg w-full rounded-md border-0 py-2 pl-3 pr-10 text-input_color ring-1 ring-inset ring-input_placeholder focus:ring-2 focus:ring-input_placeholder sm:text-sm sm:leading-6 font-semibold"
        value={year}
        onChange={handleYearChange}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelect;
