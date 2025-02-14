import React, { useEffect } from "react";

const steps = [
  {
    id: 1,
    title: "Position Your Design",
    description:
      "Place your transfer in the desired position, ensuring there are no large wrinkles in the area you're pressing. For hats or when using a household iron, heat-resistant tape can be helpful to keep the transfer in place. With experience, you'll know when it's necessary.",
    image: "/heat/heat2.webp",
  },
  {
    id: 2,
    title: "Press",
    description:
      "Set your heat press to 310°F (155°C) with medium to high pressure and press for 13 seconds. It's always a good idea to test on a sample piece first. Use a Silicone Upper Platen Cover and Garment Protector to shield your garment from direct contact with the heat plate. While you can't damage the transfer with excess heat, pressure, or time, applying too much heat may scorch the fabric.",
    image: "/heat/heat3.webp",
  },
  {
    id: 3,
    title: "Peel Hot After a Few Seconds",
    description:
      "Thanks to our Easy Peel Technology, you can remove the transfer while it’s still warm (about 3-5 seconds after pressing). If needed, press again for another 10 seconds.",
    image: "/heat/heat4.webp",
  },
  {
    id: 4,
    title: "Final Press",
    description:
      "Important: Unlike most DTF companies that recommend pressing only once, we have discovered through extensive wash tests that a final press is essential for achieving the best results.",
    image: "/heat/heat5.webp",
  },
];

const HeatPress = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-black">
          Heat Press Instructions For DTF Transfers
        </h1>

        {/* Intro Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-xl md:text-3xl font-extrabold leading-tight text-black">
              Step-by-Step Guide for Applying Easy Peel DTF Transfers Using a
              Heat Press
            </h2>
            <p className="mt-2 text-gray-700">
              Achieve results 3-4 times faster with our innovative Easy Peel
              Technology. Adjust your heat press to{" "}
              <span className="font-semibold">320°F (160°C)</span>
              with medium to high pressure. Press for approximately{" "}
              <span className="font-semibold">5 seconds</span>, then peel while
              hot. If needed, press again for another 10-15 seconds.
            </p>
          </div>

          {/* Main Image */}
          <div className="mt-6 md:w-1/2">
            <img
              src="/heat/heat1.webp"
              alt="Heat Press Process"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <p className="text-lg font-semibold text-gray-800 mt-10">
          We recommend watching the video above for step-by-step pressing
          instructions.
        </p>
      </div>

      {/* Step-by-Step Guide */}
      <div className="max-w-5xl mx-auto mt-12 space-y-12">
        {steps?.map((step, index) => (
          <div
            key={step?.id}
            className={`flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden gap-8 p-9  ${
              index % 2 === 0 ? "flex-row" : "md:flex-row-reverse"
            }`}
          >
            <img
              src={step?.image}
              alt={step?.title}
              className="rounded-lg shadow-lg md:w-1/2"
            />
            <div>
              <h3 className="text-xl font-bold text-blue-600">{step?.title}</h3>
              <p className="mt-2 text-gray-700">{step?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatPress;
