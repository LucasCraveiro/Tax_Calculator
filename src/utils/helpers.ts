import { TaxDataType } from "./types";

// Years for the dropdown
export const years = [2019, 2020, 2021, 2022];

/**
 * Get the Tax Rate from a given income.
 *
 * @param {taxData}  - The data with income brackets.
 * @param {salary} b - The salary from the input.
 * @returns {number} The rate for a given salary.
 */
export const getTaxRate = (taxData: TaxDataType, salary: number): number => {
  const matchingBracket = taxData.tax_brackets?.find((bracket) => {
    if (bracket.max !== undefined) {
      return salary >= bracket.min && salary < bracket.max;
    } else {
      return salary >= bracket.min;
    }
  });

  return matchingBracket ? matchingBracket.rate : 0;
};
