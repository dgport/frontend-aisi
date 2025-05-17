"use client";

import { useState, useEffect } from "react";
import { Calculator, DollarSign, Percent, Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function PaymentCalculator() {
  const [propertyValue, setPropertyValue] = useState(100000);
  const [months, setMonths] = useState(24);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [downPaymentAmount, setDownPaymentAmount] = useState(20000);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const [isUpdatingPercent, setIsUpdatingPercent] = useState(false);

  useEffect(() => {
    if (!isUpdatingPercent) {
      const amount = (propertyValue * downPaymentPercent) / 100;
      setIsUpdatingPercent(true);
      setDownPaymentAmount(amount);
    } else {
      setIsUpdatingPercent(false);
    }
  }, [propertyValue, downPaymentPercent]);

  const handleDownPaymentAmountChange = (value: number) => {
    setDownPaymentAmount(value);
    const percent = (value / propertyValue) * 100;
    setDownPaymentPercent(Number.parseFloat(percent.toFixed(1)));
  };

  useEffect(() => {
    const loanAmount = propertyValue - downPaymentAmount;
    const monthly = months > 0 ? loanAmount / months : 0;

    setMonthlyPayment(monthly);
    setTotalPayment(loanAmount);
  }, [propertyValue, months, downPaymentAmount]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full p-4 md:px-16 pb-20 pt-10 mx-auto bg-gradient-to-b from-white to-indigo-50 rounded-xl shadow-md overflow-hidden border border-indigo-100">
      <div className="sm:p-8">
        <div className="flex flex-col mb-6">
          <div className="flex items-center">
            <Calculator className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-700">
              Payment Calculator
            </h2>
          </div>
          <div className="h-[3px] bg-gradient-to-r from-indigo-400 via-white to-indigo-400 mt-2 w-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-indigo-700 flex items-center">
                  <DollarSign className="h-4 w-4 mr-1 text-indigo-500" />
                  Property Value
                </label>
                <div className="bg-indigo-50 px-3 py-1 rounded-lg">
                  <input
                    type="number"
                    value={propertyValue}
                    onChange={(e) =>
                      setPropertyValue(Math.max(0, Number(e.target.value)))
                    }
                    className="w-24 bg-transparent text-indigo-600 font-medium text-right focus:outline-none"
                  />
                </div>
              </div>
              <Slider
                value={[propertyValue]}
                min={10000}
                max={1000000}
                step={5000}
                onValueChange={(value) => setPropertyValue(value[0])}
                className="[&_[role=slider]]:bg-indigo-600 [&_[role=slider]]:border-indigo-600 [&_[role=track]]:bg-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-600">
                <span>$10,000</span>
                <span>$1,000,000</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-indigo-700 flex items-center">
                  <Percent className="h-4 w-4 mr-1 text-indigo-500" />
                  Down Payment
                </label>
                <div className="flex space-x-2">
                  <div className="bg-indigo-50 px-3 py-1 rounded-lg">
                    <input
                      type="number"
                      value={downPaymentPercent}
                      onChange={(e) => {
                        setDownPaymentPercent(
                          Math.max(0, Math.min(100, Number(e.target.value)))
                        );
                      }}
                      className="w-12 bg-transparent text-indigo-600 font-medium text-right focus:outline-none"
                    />
                    <span className="text-indigo-600 font-medium">%</span>
                  </div>
                  <div className="bg-indigo-50 px-3 py-1 rounded-lg">
                    <input
                      type="number"
                      value={Math.round(downPaymentAmount)}
                      onChange={(e) => {
                        const value = Math.max(
                          0,
                          Math.min(propertyValue, Number(e.target.value))
                        );
                        handleDownPaymentAmountChange(value);
                      }}
                      className="w-20 bg-transparent text-indigo-600 font-medium text-right focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <Slider
                value={[downPaymentPercent]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => setDownPaymentPercent(value[0])}
                className="[&_[role=slider]]:bg-indigo-600 [&_[role=slider]]:border-indigo-600 [&_[role=track]]:bg-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-600">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-indigo-700 flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-indigo-500" />
                  Payment Period
                </label>
                <div className="bg-indigo-50 px-3 py-1 rounded-lg flex items-center">
                  <input
                    type="number"
                    value={months}
                    onChange={(e) =>
                      setMonths(
                        Math.max(1, Math.min(60, Number(e.target.value)))
                      )
                    }
                    className="w-12 bg-transparent text-indigo-600 font-medium text-right focus:outline-none"
                  />
                  <span className="text-indigo-600 font-medium ml-1">
                    months
                  </span>
                </div>
              </div>
              <Slider
                value={[months]}
                min={1}
                max={60}
                step={1}
                onValueChange={(value) => setMonths(value[0])}
                className="[&_[role=slider]]:bg-indigo-600 [&_[role=slider]]:border-indigo-600 [&_[role=track]]:bg-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-600">
                <span>1 month</span>
                <span>60 months</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-indigo-50 to-white rounded-xl p-5 shadow-sm border border-indigo-100">
            <div className="flex flex-col mb-4">
              <h3 className="text-lg font-semibold text-indigo-700">
                Payment Summary
              </h3>
              <div className="h-[2px] bg-gradient-to-r from-indigo-400 via-white to-indigo-400 mt-1 w-full"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-200">
                <div className="text-gray-500 text-sm">Monthly Payment</div>
                <div className="text-2xl font-bold text-indigo-500">
                  {formatCurrency(monthlyPayment)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-indigo-200">
                  <div className="text-gray-500 text-xs">Total Amount</div>
                  <div className="text-lg font-medium text-indigo-700">
                    {formatCurrency(propertyValue)}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-indigo-200">
                  <div className="text-gray-500 text-xs">Down Payment</div>
                  <div className="text-lg font-medium text-indigo-700">
                    {formatCurrency(downPaymentAmount)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-indigo-200">
                  <div className="text-gray-500 text-xs">Amount to Finance</div>
                  <div className="text-lg font-medium text-indigo-700">
                    {formatCurrency(totalPayment)}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-indigo-200">
                  <div className="text-gray-500 text-xs">Payment Schedule</div>
                  <div className="text-lg font-medium text-indigo-700">
                    {months} months
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 mt-2">
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}