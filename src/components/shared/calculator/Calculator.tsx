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

  // Custom Slider Component

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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Enhanced subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Enhanced floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-slate-400/30 rounded-full animate-pulse"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 sm:px-8 md:px-20  md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full p-4 px-8 md:px-16 pb-20 pt-0 mx-auto overflow-hidden md:rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] border border-white/10">
            {/* Enhanced background with stronger overlay */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-800/70 via-slate-800/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/40 to-slate-800/50"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
              {/* Additional shadow layer for depth */}
              <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.2)]"></div>
            </div>

            <div className="relative z-10 sm:p-8 pt-16">
              {/* Header with enhanced styling */}
              <div className="flex flex-col mb-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center">
                    <Calculator className="h-6 w-6 text-white mr-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    <h2 className="text-xl sm:text-2xl font-normal text-white tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      Payment Calculator
                    </h2>
                  </div>
                </div>

                {/* Enhanced decorative line */}
                <div className="flex justify-center items-center">
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-white/60 to-white/30 rounded-full w-32 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                  <div className="mx-4 w-3 h-3 bg-gradient-to-br from-white/80 via-white/60 to-white/40 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.4)] border border-white/30 rotate-45">
                    <div className="absolute inset-1 bg-gradient-to-br from-slate-700/50 to-slate-800/70 rounded-sm"></div>
                  </div>
                  <div className="h-[2px] bg-gradient-to-l from-transparent via-white/60 to-white/30 rounded-full w-32 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Controls Section */}
                <div className="space-y-6">
                  {/* Property Value */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700/50 via-slate-600/40 to-slate-800/60 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.6),0_8px_16px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)] p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="text-white/90 flex items-center font-medium">
                          <DollarSign className="h-4 w-4 mr-2 text-white/70" />
                          Property Value
                        </label>
                        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                          <input
                            type="number"
                            value={propertyValue}
                            onChange={(e) =>
                              setPropertyValue(
                                Math.max(0, Number(e.target.value))
                              )
                            }
                            className="w-24 bg-transparent text-white font-medium text-right focus:outline-none placeholder-white/50"
                          />
                        </div>
                      </div>
                      <Slider
                        value={[propertyValue]}
                        min={10000}
                        max={1000000}
                        step={5000}
                        onValueChange={(value) => setPropertyValue(value[0])}
                      />
                      <div className="flex justify-between text-xs text-white/60">
                        <span>$10,000</span>
                        <span>$1,000,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Down Payment */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700/50 via-slate-600/40 to-slate-800/60 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.6),0_8px_16px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)] p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="text-white/90 flex items-center font-medium">
                          <Percent className="h-4 w-4 mr-2 text-white/70" />
                          Down Payment
                        </label>
                        <div className="flex space-x-2">
                          <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
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
                              className="w-12 bg-transparent text-white font-medium text-right focus:outline-none"
                            />
                            <span className="text-white/90 font-medium">%</span>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
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
                              className="w-20 bg-transparent text-white font-medium text-right focus:outline-none"
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
                      <div className="flex justify-between text-xs text-white/60">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Period */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700/50 via-slate-600/40 to-slate-800/60 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.6),0_8px_16px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)] p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="text-white/90 flex items-center font-medium">
                          <Clock className="h-4 w-4 mr-2 text-white/70" />
                          Payment Period
                        </label>
                        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center">
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
                            className="w-12 bg-transparent text-white font-medium text-right focus:outline-none"
                          />
                          <span className="text-white/90 font-medium ml-2">
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
                      <div className="flex justify-between text-xs text-white/60">
                        <span>1 month</span>
                        <span>60 months</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700/60 via-slate-600/50 to-slate-800/70 backdrop-blur-xl border border-white/20 shadow-[0_25px_50px_rgba(0,0,0,0.7),0_12px_24px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] p-6">
                  <div className="flex flex-col mb-6">
                    <h3 className="text-lg font-semibold text-white/95 mb-4">
                      Payment Summary
                    </h3>
                    <div className="h-[2px] bg-gradient-to-r from-white/30 via-white/60 to-white/30 rounded-full w-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                  </div>

                  <div className="space-y-4">
                    {/* Monthly Payment - Featured */}
                    <div className="bg-gradient-to-br from-slate-600/70 via-slate-500/60 to-slate-700/80 backdrop-blur-sm rounded-xl p-5 border border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]">
                      <div className="text-white/70 text-sm font-medium mb-1">
                        Monthly Payment
                      </div>
                      <div className="text-3xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                        {formatCurrency(monthlyPayment)}
                      </div>
                    </div>

                    {/* Summary Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="text-white/60 text-xs font-medium mb-1">
                          Property Value
                        </div>
                        <div className="text-lg font-semibold text-white/95">
                          {formatCurrency(propertyValue)}
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="text-white/60 text-xs font-medium mb-1">
                          Down Payment
                        </div>
                        <div className="text-lg font-semibold text-white/95">
                          {formatCurrency(downPaymentAmount)}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="text-white/60 text-xs font-medium mb-1">
                          Finance Amount
                        </div>
                        <div className="text-lg font-semibold text-white/95">
                          {formatCurrency(totalPayment)}
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="text-white/60 text-xs font-medium mb-1">
                          Payment Schedule
                        </div>
                        <div className="text-lg font-semibold text-white/95">
                          {months} months
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
