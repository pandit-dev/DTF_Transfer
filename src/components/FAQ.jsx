import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is DTF?",
    answer:
      "Direct to Film (DTF) is a cutting-edge technique used in T-shirt production, allowing for vibrant, full-color designs to be transferred onto garments using a heat press.",
  },
  {
    question: "What is a gang sheet?",
    answer:
      "A 'gang sheet' refers to the method of printing multiple designs and colors on a single transfer sheet, optimizing material use and production process.",
  },
  {
    question: "What is your TAT (turnaround time)?",
    answer:
      "Orders placed by 4 PM CST will be processed the same day. Those placed after will be completed the next day.",
  },
  {
    question: "What size print is suitable for my shirts?",
    answer: `Pocket: 4 inches\nBaby Onesie: 5 inches\nToddler: 6 inches\nYouth: 8 inches\nAdult: 10-12 inches\n2XL-3XL: 12-14 inches\n4XL: 15 inches`,
  },
  {
    question:
      "What file format should I use, and are there resolution guidelines?",
    answer:
      "Submit files in high-resolution formats like PNG, TIFF, PDF, PSD with a minimum resolution of 300 DPI.",
  },
  {
    question: "Do you offer expedited shipping options?",
    answer:
      "Yes, we offer various shipping options, including express and overnight delivery during checkout.",
  },
  {
    question: "What are the instructions for pressing the transfers?",
    answer:
      "1. Preheat heat press to 320°F (160°C).\n2. Apply medium pressure for 10-15 seconds.\n3. Wait a few seconds or a few minutes, depending on the film.\n4. Peel the transfer slowly from the sides.\n5. Re-press for an additional 10-15 seconds if needed.",
  },
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-lg font-medium bg-blue-50 hover:bg-blue-100 transition-all"
              >
                {faq.question}
                <span>
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border-t border-gray-200">
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i} className="text-gray-700">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
