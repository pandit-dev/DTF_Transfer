import React from "react";

const dtfFeatures = [
  {
    title: "Enhanced Flexibility",
    description:
      "Our DTF transfers undergo rigorous stretch and durability testing. After hundreds of wash cycles, they remain in excellent condition. These transfers are so durable that you'd need scissors to cut the shirt to remove them.",
    image: "/home/stretchbility.webp",
  },
  {
    title: "Precision Thin Lines",
    description:
      "Our DTF transfers offer endless opportunities for printing a wide variety of designs. If you're unsure, go ahead and experiment. You'll be continually amazed and pleased with each unique design you create and every order you place.",
    image: "/home/thin_lines.webp",
  },
  {
    title: "Light Or Dark Fabrics",
    description:
      "Our DTF transfers stand out for their ease of use, delivering cleaner and sharper images, more vibrant colors, superior durability, and greater versatility than any transfers you've used before.",
    image: "/home/light_dark.webp",
  },
  {
    title: "Vivid Color Contrast",
    description:
      "Our customers value vibrant, true-to-life colors in their DTF transfers. Expect your designs to pop with remarkable clarity on any garment, consistently impressing with their brilliance and the striking beauty they bring to your products.",
    image: "/home/vivid.webp",
  },
];

const garmentTypes = [
  { title: "100% Cotton or Poly/Cotton Blend", image: "/home/trans1.webp" },
  { title: "Tote Bags", image: "/home/trans2.png" },
  { title: "Spandex", image: "/home/trans3.webp" },
  { title: "Denim", image: "/home/trans4.webp" },
  { title: "Hoodies", image: "/home/trans5.png" },
  { title: "And more...", image: "/home/trans6.webp" },
];

const DTFTransfersSection = () => {
  return (
    <div className="bg-white py-12 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {dtfFeatures?.map((feature, index) => (
            <div
              key={index}
              className="p-4 shadow-lg hover:shadow-xl rounded-lg"
            >
              <img
                src={feature?.image}
                alt={feature?.title}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">{feature?.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-bold text-2xl mt-12">
          Our DTF Transfers Work On Any Garment!
        </h2>
        <p className="text-gray-600 mt-2">
          Enhance your custom apparel with our top-quality DTF transfers.
          Whether you're a hobbyist, a major brand, or just beginning, our DTF
          transfers deliver vibrant whites, rich colors, smooth gradients, and
          crisp fine details on any garment, with no limitations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {garmentTypes?.map((garment, index) => (
            <div key={index} className="px-9 rounded-lg hover:shadow-md">
              <img
                src={garment?.image}
                alt={garment?.title}
                className=" border-2 p-2 rounded-full mx-auto w-20 mb-4"
              />
              <span className="font-semibold text-sm">{garment?.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DTFTransfersSection;
