"use client";
import { useState, useEffect } from "react";
import { Calculator, DollarSign, Percent, Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import img from "@/root/public/images/binary.jpg";
import background from "@/root/public/images/bg-body.jpg";

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
    <div
      style={{ backgroundImage: `url(${background.src})` }}
      className="  bg-white relative overflow-hidden"
    >
      <div className="relative z-10 px-4 py-16 sm:px-8 md:px-10 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full p-3 px-4 sm:px-8 md:px-12 pt-0 mx-auto overflow-hidden rounded-2xl  shadow-2xl border border-slate-900">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${img.src || img})`,
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-slate-400/30 rounded-full animate-pulse"
                  style={{
                    left: `${10 + i * 10}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: "4s",
                  }}
                />
              ))}
            </div>
            <div className="relative z-10">
              <div className="relative z-10 p-3 sm:p-6 pt-8 sm:pt-12">
                <div className="flex flex-col items-center mb-6 sm:mb-10">
                  <div className="flex items-center mb-2 sm:mb-4">
                    <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-2 sm:mr-3" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-white tracking-wide">
                      Payment Calculator
                    </h2>
                  </div>
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full w-24 sm:w-32"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-700/50 via-slate-600/40 to-slate-800/60 backdrop-blur-xl border border-white/20 shadow-lg p-3 sm:p-5">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex justify-between items-center">
                          <label className="text-white/90 flex items-center font-medium text-sm sm:text-base">
                            <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-white/70" />
                            Property Value
                          </label>
                          <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-white/20">
                            <input
                              type="number"
                              value={propertyValue}
                              onChange={(e) =>
                                setPropertyValue(
                                  Math.max(0, Number(e.target.value))
                                )
                              }
                              className="w-20 sm:w-24 bg-transparent text-white font-medium text-right focus:outline-none text-sm sm:text-base"
                            />
                          </div>
                        </div>
                        <Slider
                          value={[propertyValue]}
                          min={10000}
                          max={200000}
                          step={5000}
                          onValueChange={(value) => setPropertyValue(value[0])}
                        />
                      </div>
                    </div>
                    <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-700/50 via-slate-600/40 to-slate-800/60 backdrop-blur-xl border border-white/20 shadow-lg p-3 sm:p-5">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex justify-between items-center">
                          <label className="text-white/90 flex items-center font-medium text-sm sm:text-base">
                            <Percent className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-white/70" />
                            Down Payment
                          </label>
                          <div className="flex space-x-1 sm:space-x-2">
                            <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-white/20">
                              <input
                                type="number"
                                value={downPaymentPercent}
                                onChange={(e) => {
                                  setDownPaymentPercent(
                                    Math.max(
                                      0,
                                      Math.min(100, Number(e.target.value))
                                    )
                                  );
                                }}
                                className="w-8 sm:w-12 bg-transparent text-white font-medium text-right focus:outline-none text-sm sm:text-base"
                              />
                              <span className="text-white/90 font-medium text-sm sm:text-base">
                                %
                              </span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-white/20">
                              <input
                                type="number"
                                value={Math.round(downPaymentAmount)}
                                onChange={(e) => {
                                  const value = Math.max(
                                    0,
                                    Math.min(
                                      propertyValue,
                                      Number(e.target.value)
                                    )
                                  );
                                  handleDownPaymentAmountChange(value);
                                }}
                                className="w-16 sm:w-20 bg-transparent text-white font-medium text-right focus:outline-none text-sm sm:text-base"
                              />
                            </div>
                          </div>
                        </div>
                        <Slider
                          value={[downPaymentPercent]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={(value) =>
                            setDownPaymentPercent(value[0])
                          }
                        />
                      </div>
                    </div>
                    <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-700/50 via-slate-600/40 to-slate-800/60 backdrop-blur-xl border border-white/20 shadow-lg p-3 sm:p-5">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex justify-between items-center">
                          <label className="text-white/90 flex items-center font-medium text-sm sm:text-base">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-white/70" />
                            Payment Period
                          </label>
                          <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-white/20 flex items-center">
                            <input
                              type="number"
                              value={months}
                              onChange={(e) =>
                                setMonths(
                                  Math.max(
                                    1,
                                    Math.min(60, Number(e.target.value))
                                  )
                                )
                              }
                              className="w-8 sm:w-12 bg-transparent text-white font-medium text-right focus:outline-none text-sm sm:text-base"
                            />
                            <span className="text-white/90 font-medium ml-1 sm:ml-2 text-sm sm:text-base">
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
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-700/60 via-slate-600/50 to-slate-800/70 backdrop-blur-xl border border-white/20 shadow-xl p-4 sm:p-6">
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-base sm:text-lg font-semibold text-white/95 mb-2 sm:mb-3">
                        Payment Summary
                      </h3>
                      <div className="h-[2px] bg-gradient-to-r from-white/30 via-white/60 to-white/30 rounded-full w-full"></div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                        <div className="text-white/60 text-xs font-medium mb-1 sm:mb-2">
                          Property Value
                        </div>
                        <div className="text-sm sm:text-lg font-semibold text-white/95">
                          {formatCurrency(propertyValue)}
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                        <div className="text-white/60 text-xs font-medium mb-1 sm:mb-2">
                          Payment Period
                        </div>
                        <div className="text-sm sm:text-lg font-semibold text-white/95">
                          {months} months
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                        <div className="text-white/60 text-xs font-medium mb-1 sm:mb-2">
                          Down Payment
                        </div>
                        <div className="text-sm sm:text-lg font-semibold text-white/95">
                          {formatCurrency(downPaymentAmount)}
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                        <div className="text-white/60 text-xs font-medium mb-1 sm:mb-2">
                          Finance Amount
                        </div>
                        <div className="text-sm sm:text-lg font-semibold text-white/95">
                          {formatCurrency(totalPayment)}
                        </div>
                      </div>
                      <div className="col-span-2 lg:col-span-1 xl:col-span-2 bg-gradient-to-br from-slate-600/70 via-slate-500/60 to-slate-700/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/30 shadow-lg">
                        <div className="text-white/70 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                          Monthly Payment
                        </div>
                        <div className="text-lg sm:text-2xl font-bold text-white">
                          {formatCurrency(monthlyPayment)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
