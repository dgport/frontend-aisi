import { useState, useEffect } from "react";

export default function MortgageCalculator() {
  const [propertyAmount, setPropertyAmount] = useState(200000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(10);
  const [loanTermMonths, setLoanTermMonths] = useState(36);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const downPaymentAmount = (propertyAmount * downPaymentPercent) / 100;

  const loanAmount = propertyAmount - downPaymentAmount;

  const annualInterestRate = 5;
  const monthlyInterestRate = annualInterestRate / 100 / 12;

  useEffect(() => {
    if (loanTermMonths > 0 && loanAmount > 0) {
      const numerator =
        loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTermMonths);
      const denominator = Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1;
      const payment = numerator / denominator;
      setMonthlyPayment(payment);
    } else {
      setMonthlyPayment(0);
    }
  }, [propertyAmount, downPaymentPercent, loanTermMonths, loanAmount]);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md z-50">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Property Payment Calculator
      </h2>

      <div className="mb-6">
        <label className="  text-gray-700 mb-2 flex justify-between">
          <span className="font-semibold">Property Amount:</span>
          <span className="text-blue-600 font-bold">
            ${propertyAmount.toLocaleString()}
          </span>
        </label>
        <input
          type="range"
          min="50000"
          max="1000000"
          step="10000"
          value={propertyAmount}
          onChange={(e) => setPropertyAmount(Number(e.target.value))}
          className="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$50,000</span>
          <span>$1,000,000</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2 flex justify-between">
          <span className="font-semibold">Down Payment:</span>
          <span className="text-blue-600 font-bold">
            {downPaymentPercent}% (${downPaymentAmount.toLocaleString()})
          </span>
        </label>
        <input
          type="range"
          min="10"
          max="50"
          step="1"
          value={downPaymentPercent}
          onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
          className="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>10% (Minimum)</span>
          <span>50%</span>
        </div>
      </div>

      <div className="mb-8">
        <label className=" text-gray-700 mb-2 flex justify-between">
          <span className="font-semibold">Loan Term:</span>
          <span className="text-blue-600 font-bold">
            {loanTermMonths} months
          </span>
        </label>
        <input
          type="range"
          min="12"
          max="60"
          step="1"
          value={loanTermMonths}
          onChange={(e) => setLoanTermMonths(Number(e.target.value))}
          className="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>12 months</span>
          <span>60 months (Maximum)</span>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold mb-3 text-blue-800">
          Calculation Results
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-gray-700 font-medium">Loan Amount:</div>
          <div className="font-semibold text-right">
            ${loanAmount.toLocaleString()}
          </div>

          <div className="text-gray-700 font-medium">Interest Rate:</div>
          <div className="font-semibold text-right">
            {annualInterestRate}% annually
          </div>

          <div className="text-gray-700 font-medium">Loan Term:</div>
          <div className="font-semibold text-right">
            {loanTermMonths} months
          </div>

          <div className="text-gray-800 font-bold text-lg border-t pt-2 border-blue-200">
            Monthly Payment:
          </div>
          <div className="font-bold text-xl text-blue-700 text-right border-t pt-2 border-blue-200">
            ${monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
        </div>
      </div>
    </div>
  );
}
