import useTaxStore from "../store/store";

const TaxInfo: React.FC = () => {
  const { salary, year, totalTax, errorFetch } = useTaxStore();

  const salaryCurrency = salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  if (errorFetch) {
    return (
      <p className="text-warning text-sm bg-white p-2 rounded-md text-center">
        Sorry! Something happened on our end. <br />
        Please try calculating your Tax again!
      </p>
    );
  }

  if (totalTax > 0) {
    return (
      <p className="text-white text-lg">
        With {salaryCurrency} of income in {year} you will have to pay ${" "}
        {totalTax} of Tax
      </p>
    );
  }

  return <p className="text-result">.</p>;
};

export default TaxInfo;
