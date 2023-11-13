import { render, screen, fireEvent } from "@testing-library/react";
import SalaryInput from "./SalaryInput";

describe("SalaryInput", () => {
  test("renders SalaryInput component", () => {
    render(<SalaryInput />);
    const inputElement = screen.getByLabelText(/income/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("updates salary value on input change", () => {
    render(<SalaryInput />);
    const inputElement = screen.getByLabelText(/income/i) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "50000" } });

    expect(inputElement.value).toBe("50000");
  });
});
