import React from "react";

const DTFOrderingSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Submit Artwork & Finalize Order",
      description:
        "Experiment with any design and color scheme—whether it’s full color, minimalistic, or highly detailed—and see the results for yourself!",
      image: "/home/dtf-step1.webp",
    },
    {
      id: 2,
      title: "Printed And Dispatched Within 24 Hours.",
      description:
        "With our premium DTF ink and film, we quickly produce your transfers, ensuring both the fastest delivery and the highest quality.",
      image: "/home/dtf-step2.webp",
    },
    {
      id: 3,
      title: "Iron-On Or Heat Press",
      description:
        "Apply the DTF transfer at 320°F with medium pressure for 10 seconds. Peel the film either cold or hot, depending on the type you selected.",
      image: "/home/dtf-step3.webp",
    },
  ];

  return (
    <section className="bg-blue-50 py-12 px-4">
      <h2 className="text-5xl font-bold text-center">
        DTF Transfer Ordering Procedure: <span className="text-black">3 Easy Steps</span>
      </h2>
      <p className="text-gray-600 text-center m-10 mb-8">
        Effortless Instructions for Perfect Results Every Time
      </p>

      <div className=" gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center bg-white shadow-lg rounded-lg overflow-hidden ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <img src={step.image} alt={step.title} className="w-1/2 object-cover" />
            <div className="p-6 w-1/2">
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DTFOrderingSteps;
