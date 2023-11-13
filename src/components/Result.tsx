import useTaxStore from "../store/store";
import TaxInfo from "./TaxInfo";
import Loading from "./Loading";

const Result: React.FC = () => {
  const { year, totalTax, isLoading } = useTaxStore();

  const taxCurrency = totalTax.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="lg:w-1/2 bg-result rounded-lg p-5 flex flex-col place-content-around gap-6">
      <div className="flex gap-4 place-content-between">
        <div>
          <h3 className="text-white text-lg">Tax Amount</h3>
          <p className="text-sm text-input_placeholder pl-1">in {year}</p>
        </div>
      </div>
      <div>
        <h3 className="text-green_number font-bold text-4xl">{taxCurrency}</h3>
      </div>
      {isLoading && <Loading />}
      <TaxInfo />
    </div>
  );
};

export default Result;
