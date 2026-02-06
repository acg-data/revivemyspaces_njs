'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Closet Refresh',
      description: 'Perfect for single closets',
      monthlyPrice: 299,
      annualPrice: 249,
      features: ['In-home consultation', 'Custom organization plan', '4-hour transformation', 'Basic organizing supplies'],
      popular: false,
    },
    {
      name: 'Room Revival',
      description: 'Ideal for kitchens, pantries, or offices',
      monthlyPrice: 599,
      annualPrice: 499,
      features: ['In-home consultation', 'Detailed space planning', '8-hour transformation', 'Premium organizing supplies', '30-day follow-up'],
      popular: true,
    },
    {
      name: 'Whole Home',
      description: 'Complete home transformation',
      monthlyPrice: 1299,
      annualPrice: 1099,
      features: ['Comprehensive home assessment', 'Custom systems for every room', 'Multi-day transformation', 'Premium supplies & containers', '90-day maintenance plan', 'Priority scheduling'],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-extrabold text-black mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">Choose the package that fits your needs</p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-semibold ${!isAnnual ? 'text-black' : 'text-gray-500'}`}>One-Time</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-black rounded-full transition-colors"
          >
            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${isAnnual ? 'left-8' : 'left-1'}`} />
          </button>
          <span className={`text-sm font-semibold ${isAnnual ? 'text-black' : 'text-gray-500'}`}>
            Bundle <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full ml-1">Save 15%</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border-2 transition-all hover:shadow-lg ${
                plan.popular ? 'border-black' : 'border-transparent'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-black">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                <span className="text-gray-500">{isAnnual ? '/bundle' : '/project'}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-black flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${
                  plan.popular
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
