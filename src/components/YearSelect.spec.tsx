import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import YearSelect from "./YearSelect";

describe("YearSelect", () => {
  test("renders YearSelect component", () => {
    render(<YearSelect />);
    const selectElement = screen.getByLabelText(/select the year/i);
    expect(selectElement).toBeInTheDocument();

    expect(screen.getByText("2019")).toBeInTheDocument();
    expect(screen.getByText("2020")).toBeInTheDocument();
    expect(screen.getByText("2021")).toBeInTheDocument();
    expect(screen.getByText("2022")).toBeInTheDocument();
  });

  test("updates year value on select change", () => {
    render(<YearSelect />);
    const selectElement = screen.getByLabelText(
      /select the year/i
    ) as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: "2022" } });

    expect(selectElement.value).toBe("2022");
  });
});
