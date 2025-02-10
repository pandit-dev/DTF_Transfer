import React from "react";
import { ShieldCheck, Truck, RefreshCcw, Headphones } from "lucide-react";

const SatisfactionSection = () => {
  const features = [
    {
      id: 1,
      title: "Secure Payments",
      description:
        "Our store uses SSL encryption to ensure your payment information is always secure.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    },
    {
      id: 2,
      title: "Same-Day Service",
      description:
        "Get your order ready for Pickup and Shipping fast and hassle-free today! For orders placed before 10 AM PST.",
      icon: <Truck className="w-10 h-10 text-blue-500" />,
    },
    {
      id: 3,
      title: "Money Back",
      description:
        "We stand behind the quality of our products and offer a 30-day money-back guarantee.",
      icon: <RefreshCcw className="w-10 h-10 text-blue-500" />,
    },
    {
      id: 4,
      title: "Customer Support",
      description:
        "Our support team is available 24/7 to assist you with any questions or concerns you have.",
      icon: <Headphones className="w-10 h-10 text-blue-500" />,
    },
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
      {/* Left Side - Heading */}
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl font-bold text-black">
          Your Satisfaction Is Our Priority
        </h2>
        <p className="text-gray-600 text-xl mt-2">Shopping with confidence</p>
      </div>

      {/* Right Side - Features Grid */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-0">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col space-y-5">
            {feature.icon}

            <h3 className="font-semibold text-xl">{feature.title}</h3>
            <p className="text-gray-600 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SatisfactionSection;
