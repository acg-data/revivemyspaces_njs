import { Check, X } from 'lucide-react';

export default function Comparison() {
  const comparisons = [
    { feature: 'Custom Organization Systems', us: true, them: false },
    { feature: 'In-Home Consultation', us: true, them: true },
    { feature: 'Maintenance Plans', us: true, them: false },
    { feature: 'Same-Day Transformation', us: true, them: false },
    { feature: 'Local Newton Expertise', us: true, them: false },
    { feature: 'Follow-Up Support', us: true, them: false },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Why Choose Us?</h2>
          <p className="text-gray-400 text-lg">See how we compare to DIY or other services</p>
        </div>

        <div className="bg-gray-900 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800 font-bold text-white">
            <div>Feature</div>
            <div className="text-center">Revive My Spaces</div>
            <div className="text-center">DIY / Others</div>
          </div>
          {comparisons.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800 last:border-0 items-center">
              <div className="text-gray-300">{item.feature}</div>
              <div className="text-center">
                {item.us ? (
                  <Check className="w-6 h-6 text-white mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-gray-600 mx-auto" />
                )}
              </div>
              <div className="text-center">
                {item.them ? (
                  <Check className="w-6 h-6 text-gray-500 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-gray-600 mx-auto" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
