import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Counter from "../components/Counter";

const products = [
  {
    id: 1,
    title: "DTF Transfers By Size",
    price: 1.49,
    description:
      "Versatile Printing: Print any design and transfer it onto any product, material, or color with outstanding durability.",
    mainImage: "/product/bySize.webp",
    sizes: [
      '2"x2"',
      '3"x3"',
      '4"x2"',
      '4"x4"',
      '5"x3"',
      '5"x5"',
      '6"x6"',
      '7"x7"',
      '8"x8"',
      '9"x11"',
      '10"x10"',
      '11"x5"',
      '11"x11"',
      '12"x17"',
    ],
  },
  {
    id: 2,
    title: "DTF Gang Sheet Transfers",
    price: 11.0,
    description:
      "If you need a larger DTF gang sheet, adjust the quantity in your order to get more sheets. Add them to your cart and repeat the process until you have the desired number of sheets.",
    mainImage: "/product/sheetTrans.webp",
    sizes: [
      "22.5 in x 12 in",
      "22.5 in x 24 in",
      "22.5 in x 36 in",
      "22.5 in x 48 in",
      "22.5 in x 60 in",
      "22.5 in x 84 in",
      "22.5 in x 120 in",
    ],
  },
  {
    id: 3,
    title: "DTF Gang Sheet Transfers - Gang Sheet Builder",
    price: 17.99,
    description:
      "Maximize your savings with our budget-friendly DTF Gang Sheets Builder, designed for your ready-to-print designs.",
    mainImage: "/product/build.webp",
    sizes: [
      "22.5 in x 12 in",
      "22.5 in x 24 in",
      "22.5 in x 36 in",
      "22.5 in x 60 in",
      "22.5 in x 84 in",
      "22.5 in x 120 in",
    ],
  },
];

const features = [
  {
    title: "Product Details",
    content:
      "Discover the ultimate in professional-quality convenience with King DTF Transfers.",
  },
  {
    title: "DTF Transfer Features",
    content:
      "Committed to delivering top-tier DTF transfers crafted with precision.",
  },
  {
    title: "Image Requirements",
    content: "Upload high-resolution PNG images.",
  },
  {
    title: "Pressing Instructions",
    content: "Use a heat press at 310°F (155°C) for 15 seconds.",
  },
  {
    title: "Washing Instructions",
    content: "Wash inside out with cold water for durability.",
  },
  {
    title: "Shipping & Returns",
    content: "Free shipping on orders above $50. No returns accepted.",
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert id from URL params to number
  const getProductById = (id) =>
    products.find((p) => p.id === Number(id)) || products[0];

  // State for selected product
  const [selectedProduct, setSelectedProduct] = useState(getProductById(id));
  const [expandedFeature, setExpandedFeature] = useState(null);

  // Update product when route changes
  useEffect(() => {
    setSelectedProduct(getProductById(id));
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={selectedProduct?.mainImage}
            alt={selectedProduct?.title}
            className="w-full sticky top-16 rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{selectedProduct?.title}</h1>
          <p className="text-gray-700 mt-2">
            ${selectedProduct?.price.toFixed(2)} USD
          </p>
          <p className="mt-4">{selectedProduct?.description}</p>

         
          <label className="w-full bg-black text-white py-2 rounded-md my-5 flex items-center justify-center cursor-pointer">
            <span>Drag and drop your file or Browse</span>
            <input type="file" className="hidden" />
          </label>

          {/* Sizes */}
          <h2>Size:</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedProduct?.sizes.map((size, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer"
              >
                {size}
              </span>
            ))}
          </div>

          {/* Quantity */}
          <h2 className="my-5">Quantity :</h2>
          <Counter />

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full bg-black text-white py-2 rounded-md">
              Add to cart
            </button>
            <div className="w-full bg-purple-600 text-white text-center py-2 rounded-md">
            <a
            href="https://www.visa.com/"
            target="_blank"
            >
              Buy with VISA
            </a>
            </div>
          </div>

          {/* Expandable Features Section */}
          <div className="mt-10 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-md">
                <button
                  onClick={() =>
                    setExpandedFeature(expandedFeature === index ? null : index)
                  }
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="font-semibold">{feature.title}</span>
                  <span>
                    {expandedFeature === index ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </span>
                </button>
                {expandedFeature === index && (
                  <p className="mt-2 text-gray-600">{feature.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">You may also like</h2>
        <div className="flex gap-10">
          {products
            .filter((product) => product.id !== selectedProduct?.id)
            .map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 shadow-md cursor-pointer w-80 hover:shadow-lg transition"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                <img
                  src={item.mainImage}
                  alt={item.title}
                  className="h-40 object-cover rounded-lg"
                />
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="text-gray-700">${item.price.toFixed(2)} USD</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
