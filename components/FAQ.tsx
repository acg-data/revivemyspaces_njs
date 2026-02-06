import { ChevronDown, ArrowRight } from 'lucide-react';

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
    {
      question: 'How much does home organization cost?',
      answer: 'Our pricing ranges from $299 for a single closet to $1,299 for a whole home transformation. We offer bundle discounts (save 15%) and always provide a detailed quote after your free consultation.',
    },
    {
      question: 'How do I prepare for my organization session?',
      answer: 'No preparation needed! We actually prefer to see your space in its natural state. This helps us understand your habits and create systems that work for you. Just clear a path for us to work safely.',
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes! Our Room Revival and Whole Home packages include follow-up support (30-day and 90-day respectively). We also offer ongoing maintenance plans for clients who want regular check-ins.',
    },
    {
      question: 'Can you work with my existing storage solutions?',
      answer: 'Absolutely! We\'ll assess what you already have and incorporate it into your new system when possible. We only recommend new purchases when they\'ll truly enhance your organization.',
    },
    {
      question: 'What if I\'m not happy with the results?',
      answer: 'Your satisfaction is our priority. We work closely with you throughout the process and make adjustments as needed. If you\'re not completely satisfied, we\'ll work with you until you are.',
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
            <details key={index} className="group glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-black bg-transparent">
                {faq.question}
                <ChevronDown className="w-5 h-5 text-gray-400 toggle-icon" />
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all">
            Contact Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
