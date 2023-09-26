"use client";

import { usePayStore } from "@/store/PayStore";

const Summary = () => {
  const [fundsOut, country] = usePayStore((state) => [
    state.fundsOut,
    state.country,
  ]);

  return (
    <div className="min-h-[300px] p-2 flex flex-col">
      {/* Header */}
      <div className="bg-slate-600 text-white tracking-wide p-2">
        <h1>SUMMARY</h1>
      </div>

      <div className="mt-6 p-8">
        <div className="flex justify-between items-center">
          <p className="text-sm font-light">Transfer Amount</p>
          <p className="text-sm font-light">0.00 EUR</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-light">Transfer Fee</p>
          <p className="text-sm font-light">0.00 EUR</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-light">Total to Receiver</p>
          <p className="text-sm font-light">0.00 EUR</p>
        </div>
        {(country === "RO" || country === "PL") &&
        fundsOut === "Receiver Choice" ? (
          <div className="flex justify-between items-center bg-yellow-400 p-1">
            <p className="text-sm font-light">BONUS FOR RECEIVER</p>
            <p className="text-sm font-light">10 EUR</p>
          </div>
        ) : (
          <div></div>
        )}

        <div className="mt-8 h-[1.5px] bg-black w-full" />

        <div className="mt-1 flex justify-between items-center">
          <p className="text-sm font-bold">Transfer Total</p>
          <p className="text-sm font-bold">0.00 EUR</p>
        </div>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-sm font-bold">Delivery method</p>
          <p className="text-sm font-bold">{fundsOut}</p>
        </div>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-sm font-bold">Delivery time</p>
          <p className="text-sm font-bold">
            {fundsOut === "Receiver Choice" || fundsOut === "Money in Minutes"
              ? "In Minutes"
              : "1-3 Business Days"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
