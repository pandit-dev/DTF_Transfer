import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    image: "/home/man1.png",
    review:
      "Kings DTF Transfer has revolutionized the way I create custom apparel. The quality of their transfers is unmatched, and their customer service is exceptional.",
  },
  {
    id: 2,
    name: "Sarah Wong",
    image: "/home/man4.png",
    review:
      "I've tried various DTF transfer providers, but Kings DTF Transfer stands out for their reliability and consistency. My designs always come out looking vibrant and sharp.",
  },
  {
    id: 3,
    name: "David Nguyen",
    image: "/home/man2.png",
    review:
      "As a small business owner, finding a reliable DTF transfer supplier was crucial for me. Kings DTF Transfer not only delivers top-notch quality but also offers fast turnaround times, helping me meet my customers' demands.",
  },
  {
    id: 4,
    name: "Samantha Chen",
    image: "/home/man3.png",
    review:
      "I've been using Kings DTF Transfer for all my printing needs, and I couldn't be happier with the results. Their transfers are durable, wash well, and add a professional touch to my designs.",
  },
  {
    id: 5,
    name: "Michael Brown",
    image: "/home/man5.png",
    review:
      "Kings DTF Transfer has become my go-to for all my custom printing projects. Their transfers adhere perfectly to various fabrics, and the colors remain vibrant even after multiple washes.",
  },
  {
    id: 6,
    name: "Emily Davis",
    image: "/home/man6.png",
    review:
      "I stumbled upon Kings DTF Transfer while searching for high-quality DTF printing services, and I'm glad I did. Their transfers exceeded my expectations, and their team goes above and beyond to ensure customer satisfaction.",
  },
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  return (
    <section className="bg-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-8">
          What Our Customers Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((testimonial) => (
              <div
                key={testimonial?.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                {/* Image */}
                <img
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  className="w-full h-auto md:h-48 object-cover rounded-lg"
                />

                {/* Name & Stars */}
                <h3 className="font-semibold mt-4">{testimonial?.name}</h3>
                <div className="flex justify-center text-blue-500 mt-1">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 fill-blue-500" />
                  ))}
                </div>

                {/* Quote Icon & Review */}
                <Quote className="w-6 h-6 text-gray-600 mx-auto mt-2" />
                <p className="text-gray-600 text-sm mt-2">
                  {testimonial?.review}
                </p>
              </div>
            ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          {/* Previous Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
            }
            className="p-4 rounded-full hover:bg-gray-300"
          >
            <ChevronLeft />
          </button>

          {/* Page Indicators */}
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full ${
                  currentPage === index ? "bg-black" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
            className="p-4 rounded-full hover:bg-gray-300"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
