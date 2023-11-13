import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import useTaxStore from "../store/store";
import { z } from "zod";

const SalaryInput: React.FC = () => {
  const {
    salary,
    setSalary,
    isSalaryZero,
    setIsSalaryZero,
    setTotalTax,
    isLoading,
  } = useTaxStore();

  const salarySchema = z.number().gt(0, "Your income is required.");

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTotalTax(0);
    const salaryValidationResult = salarySchema.safeParse(salary);
    setIsSalaryZero(!salaryValidationResult.success);

    const newSalary = parseFloat(event.target.value || "0.00");
    setSalary(newSalary);
  };

  return (
    <div>
      <label
        htmlFor="income"
        className="block pl-1 text-lg font-medium leading-6 text-label"
      >
        Income
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          name="income"
          value={salary}
          disabled={isLoading}
          onChange={handleSalaryChange}
          id="income"
          className="block bg-input_bg w-full rounded-md border-0 py-2 pl-7 pr-12 text-input_color ring-1 ring-inset ring-input_placeholder placeholder:text-input_placeholder focus:ring-2 focus:ring-inset focus:ring-green_number sm:text-sm sm:leading-6"
          placeholder="0.00"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {isSalaryZero && (
            <ExclamationCircleIcon
              className="h-5 w-5 text-red"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      {isSalaryZero ? (
        <p className="mt-2 text-sm text-red pl-3" id="salary-error">
          Your income is required.
        </p>
      ) : (
        <p className="text-white">.</p>
      )}
    </div>
  );
};

export default SalaryInput;
