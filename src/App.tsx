import TaxForm from "./components/TaxForm";
import Result from "./components/Result";
import "./App.css";

const App: React.FC = () => {
  return (
    <main className="bg-main min-h-screen flex flex-col justify-center items-center px-2 sm:p-0">
      <h1 className="text-3xl text-input_color font-semibold mb-10 text-center uppercase">
        Tax <br />
        Calculator
      </h1>
      <div className="w-full sm:w-1/2 sm:min-w-[70%] 2xl:w-1/3 2xl:min-w-[50%] flex flex-col lg:flex-row gap-10 bg-white p-8 rounded-lg shadow-lg">
        <TaxForm />
        <Result />
      </div>
    </main>
  );
};

export default App;
