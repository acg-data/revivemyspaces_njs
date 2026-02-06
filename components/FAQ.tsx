import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'How long does a typical organization project take?',
      answer: 'Project duration depends on the scope. A single closet typically takes 4-6 hours, while a whole home transformation may take 2-3 days. We work efficiently to minimize disruption to your daily life.',
    },
    {
      question: 'Do you provide the organizing supplies and containers?',
      answer: 'Yes! Our packages include basic to premium organizing supplies depending on your chosen plan. We source high-quality containers, dividers, and storage solutions that match your aesthetic.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Newton, MA and surrounding areas including Brookline, Chestnut Hill, Wellesley, and Needham. Contact us if you\'re slightly outside these areas - we may still be able to help!',
    },
    {
      question: 'Do I need to be home during the organization?',
      answer: 'We prefer you to be available for the initial consultation and final walkthrough. However, once we have your approval on the plan, you don\'t need to be present during the actual organizing work.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We understand plans change. You can reschedule or cancel up to 48 hours before your scheduled appointment with no penalty. Cancellations within 48 hours may incur a small fee.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-gray-50 rounded-xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-black">
                {faq.question}
                <ChevronDown className="w-5 h-5 text-gray-400 toggle-icon" />
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
