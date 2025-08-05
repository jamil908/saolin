import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: 'How can I order medicines?',
    answer: 'You can order medicines by browsing our products and clicking the "Buy" button. Then proceed to checkout.',
  },
  {
    question: 'Do you deliver outside Dhaka?',
    answer: 'Yes, we deliver all over Bangladesh using our trusted logistics partners.',
  },
  {
    question: 'Is my personal data safe?',
    answer: 'Absolutely. We ensure complete data privacy and use secure payment methods.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact us anytime through email or our 24/7 customer support hotline.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
