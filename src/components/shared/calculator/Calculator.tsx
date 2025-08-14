"use client";

import { useState, useEffect, useCallback, JSX } from "react";
import { Calculator, DollarSign, Percent, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

interface SliderProps {
  value: number[];
  min: number;
  max: number;
  step: number;
  onValueChange: (value: number[]) => void;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  value,
  min,
  max,
  step,
  onValueChange,
  className,
}) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => onValueChange([Number(e.target.value)])}
      className={`w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider ${className}`}
      style={{
        background: `linear-gradient(to right, #1d4ed8 0%, #1d4ed8 ${
          ((value[0] - min) / (max - min)) * 100
        }%, #e2e8f0 ${((value[0] - min) / (max - min)) * 100}%, #e2e8f0 100%)`,
      }}
    />
  );
};

export default function PaymentCalculator(): JSX.Element {
  const t = useTranslations("calculator");

  const [propertyValue, setPropertyValue] = useState(100000);
  const [months, setMonths] = useState(24);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [downPaymentAmount, setDownPaymentAmount] = useState(20000);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const updateDownPaymentAmount = useCallback((): void => {
    const amount: number = Math.round(
      (propertyValue * downPaymentPercent) / 100
    );
    setDownPaymentAmount(amount);
  }, [propertyValue, downPaymentPercent]);

  useEffect(() => {
    updateDownPaymentAmount();
  }, [updateDownPaymentAmount]);

  const handleDownPaymentAmountChange = useCallback(
    (value: string | number): void => {
      const numValue: number = Math.max(
        0,
        Math.min(propertyValue, Number(value))
      );
      setDownPaymentAmount(numValue);

      const percent: number =
        propertyValue > 0 ? Math.min(100, (numValue / propertyValue) * 100) : 0;
      setDownPaymentPercent(Math.round(percent * 10) / 10);
    },
    [propertyValue]
  );

  const handleDownPaymentPercentChange = useCallback(
    (percent: string | number): void => {
      const numPercent: number = Math.max(0, Math.min(100, Number(percent)));
      setDownPaymentPercent(numPercent);
    },
    []
  );

  useEffect(() => {
    const loanAmount: number = Math.max(0, propertyValue - downPaymentAmount);
    const monthly: number = months > 0 ? loanAmount / months : 0;
    setMonthlyPayment(monthly);
    setTotalPayment(loanAmount);
  }, [propertyValue, months, downPaymentAmount]);

  useEffect(() => {
    if (downPaymentAmount > propertyValue) {
      setDownPaymentAmount(propertyValue);
      setDownPaymentPercent(100);
    }
  }, [propertyValue, downPaymentAmount]);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Math.max(0, value));
  };

  const handlePropertyValueChange = (value: string): void => {
    const numValue: number = Math.max(0, Number(value) || 0);
    setPropertyValue(numValue);
  };

  const handleMonthsChange = (value: string): void => {
    const numValue: number = Math.max(1, Math.min(60, Number(value) || 1));
    setMonths(numValue);
  };

  return (
    <section
      style={{ backgroundImage: `url('/images/bg-body.jpg')` }}
      className="w-full px-6 md:px-16 relative py-10 md:py-5 overflow-hidden tracking-widest font-geo2"
    >
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1d4ed8;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 1px rgba(29, 78, 216, 0.3);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1d4ed8;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 1px rgba(29, 78, 216, 0.3);
        }
      `}</style>

      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center mb-4">
            <Calculator className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 tracking-wide">
              {t("paymentCalculator")}
            </h2>
          </div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent rounded-full w-32" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 p-5">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white flex items-center font-medium text-xl">
                    <DollarSign className="h-5 w-5 mr-2 text-blue-100/70" />
                    {t("propertyValue")}
                  </label>
                  <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 px-3 py-2 rounded-lg">
                    <input
                      type="number"
                      value={propertyValue}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handlePropertyValueChange(e.target.value)
                      }
                      className="w-24 bg-transparent text-white font-medium text-right focus:outline-none"
                      min="0"
                    />
                  </div>
                </div>
                <Slider
                  value={[propertyValue]}
                  min={10000}
                  max={200000}
                  step={5000}
                  onValueChange={(value: number[]) =>
                    setPropertyValue(value[0])
                  }
                />
                <div className="flex justify-between text-base text-blue-100/70">
                  <span>$10,000</span>
                  <span>$200,000</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 p-5">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white flex items-center font-medium text-xl">
                    <Percent className="h-5 w-5 mr-2 text-blue-100/70" />
                    {t("downPayment")}
                  </label>
                  <div className="flex space-x-2">
                    <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 px-3 py-2 rounded-lg">
                      <input
                        type="number"
                        value={downPaymentPercent}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleDownPaymentPercentChange(e.target.value)
                        }
                        className="w-12 bg-transparent text-white font-medium text-right focus:outline-none"
                        min="0"
                        max="100"
                        step="0.1"
                      />
                      <span className="text-white font-medium">%</span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 px-3 py-2 rounded-lg">
                      <input
                        type="number"
                        value={Math.round(downPaymentAmount)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleDownPaymentAmountChange(e.target.value)
                        }
                        className="w-20 bg-transparent text-white font-medium text-right focus:outline-none"
                        min="0"
                        max={propertyValue}
                      />
                    </div>
                  </div>
                </div>
                <Slider
                  value={[downPaymentPercent]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value: number[]) =>
                    handleDownPaymentPercentChange(value[0])
                  }
                />
                <div className="flex justify-between text-base text-blue-100/70">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 p-5">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white flex items-center font-medium text-xl">
                    <Clock className="h-5 w-5 mr-2 text-blue-100/70" />
                    {t("paymentPeriod")}
                  </label>
                  <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 px-3 py-2 rounded-lg flex items-center">
                    <input
                      type="number"
                      value={months}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleMonthsChange(e.target.value)
                      }
                      className="w-12 bg-transparent text-white font-medium text-right focus:outline-none"
                      min="1"
                      max="60"
                    />
                    <span className="text-white font-medium ml-2">
                      {months === 1 ? t("month") : t("months")}
                    </span>
                  </div>
                </div>
                <Slider
                  value={[months]}
                  min={1}
                  max={60}
                  step={1}
                  onValueChange={(value: number[]) => setMonths(value[0])}
                />
                <div className="flex justify-between text-base text-blue-100/70">
                  <span>1 {t("month")}</span>
                  <span>60 {t("months")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 p-4">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {t("paymentSummary")}
              </h3>
              <div className="h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 rounded-lg p-4">
                <div className="text-blue-100/70 text-base font-medium mb-1">
                  {t("propertyValue")}
                </div>
                <div className="text-xl font-semibold text-white">
                  {formatCurrency(propertyValue)}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 rounded-lg p-4">
                <div className="text-blue-100/70 text-base font-medium mb-1">
                  {t("paymentPeriod")}
                </div>
                <div className="text-xl font-semibold text-white">
                  {months} {months === 1 ? t("month") : t("months")}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 rounded-lg p-4">
                <div className="text-blue-100/70 text-base font-medium mb-1">
                  {t("downPayment")}
                </div>
                <div className="text-xl font-semibold text-white">
                  {formatCurrency(downPaymentAmount)}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 rounded-lg p-4">
                <div className="text-blue-100/70 text-base font-medium mb-1">
                  {t("financeAmount")}
                </div>
                <div className="text-xl font-semibold text-white">
                  {formatCurrency(totalPayment)}
                </div>
              </div>
              <div className="col-span-2 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 border border-white/50 rounded-lg p-4">
                <div className="text-blue-100/70 text-sm font-medium mb-1">
                  {t("monthlyPayment")}
                </div>
                <div className="text-2xl font-bold text-white">
                  {formatCurrency(monthlyPayment)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
