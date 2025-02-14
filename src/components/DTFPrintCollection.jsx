import React from "react";
import { Link } from "react-router-dom";

const DTFPrintCollection = () => {
  const products = [
    {
      id: 1,
      title: "DTF Transfers By Size",
      description:
        "Our most popular method is also our simplest: upload your design, choose the size and quantity you need!",
      button: "Order DTF Transfers By Size",
      image: "/home/dtf-size.png",
    },
    {
      id: 2,
      title: "DTF Transfers Gang Sheets",
      description:
        "Gang Sheets let you combine multiple design files into one document - All gang sheets come 22 inches wide",
      button: "Order DTF Transfer Gang",
      image: "/home/dtf-gang.png",
    },
    {
      id: 3,
      title: "Online Gang Sheet Builder",
      description:
        "Our Gang Sheet Builder lets you select your gang sheet size and easily build your gang sheet.",
      button: "Online Gang Sheet Builder",
      image: "/home/dtf-builder.webp",
    },
  ];

  return (
    <section className="text-center py-12 mt-8 px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-black">
        Exclusive DTF Print Collection
      </h2>
      <p className=" md:text-xl text-gray-600 mt-4 mb-6">
        Discover Unique Designs and Superior Quality Prints
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-20 md:px-20">
        {products?.map((product) => (
          <div
            key={product?.id}
            className=" p-6 text-center hover:shadow-lg rounded-2xl transition duration-300"
          >
            <img
              src={product?.image}
              alt={product?.title}
              className="mx-auto mb-4  object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{product?.title}</h3>
            <p className="text-gray-600 mb-4">{product?.description}</p>
            <Link
              to={`/products/${product.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              {product?.button}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DTFPrintCollection;
