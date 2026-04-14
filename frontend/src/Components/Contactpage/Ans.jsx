"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

function Ans() {
  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer: "Usually within 24 hours our team replies to your email.",
    },
    {
      question: "Do you offer custom pricing for large teams?",
      answer: "Yes, we provide custom pricing for companies with large teams.",
    },
    {
      question: "Can I migrate my existing data to Codeofy?",
      answer: "Yes, our team will help you migrate your existing data easily.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-linear-to-b from-white to-blue-400/70 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
            Quick Answers
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
            Can't wait for an email? These might help.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-gray-900 dark:text-white"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform text-gray-500 dark:text-gray-400 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              View all FAQs →
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
export default Ans;
