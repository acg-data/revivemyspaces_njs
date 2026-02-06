'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';

export default function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [stressLevel, setStressLevel] = useState(7);

  const annualTimeWasted = hoursPerWeek * 52;
  const annualCost = annualTimeWasted * hourlyRate;
  const timeSaved = Math.round(annualTimeWasted * 0.75);
  const moneySaved = Math.round(annualCost * 0.75);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">Calculate Your Time Savings</h2>
          <p className="text-gray-400 text-lg">See how much time and money disorganization is costing you</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-white font-semibold mb-2">
                Hours spent looking for things per week
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-2xl font-bold text-white mt-2">{hoursPerWeek} hours</div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Your hourly value ($)
              </label>
              <input
                type="range"
                min="25"
                max="200"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-2xl font-bold text-white mt-2">${hourlyRate}/hr</div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-6">
                <p className="text-gray-400 mb-2">Time wasted annually</p>
                <p className="text-4xl font-extrabold text-red-400">{annualTimeWasted} hours</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <p className="text-gray-400 mb-2">Money lost annually</p>
                <p className="text-4xl font-extrabold text-red-400">${annualCost.toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-black" />
                <p className="font-bold text-black">With professional organization, you could save:</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Time saved per year</p>
                  <p className="text-3xl font-extrabold text-green-600">{timeSaved} hours</p>
                </div>
                <div>
                  <p className="text-gray-600">Money saved per year</p>
                  <p className="text-3xl font-extrabold text-green-600">${moneySaved.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
