import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Counter from "../components/Counter.jsx";

const products = [
  {
    id: 1,
    title: "DTF Transfers By Size",
    basePrice: 1.49,
    description:
      "Versatile Printing: Print any design and transfer it onto any product, material, or color with outstanding durability.",
    mainImage: "/product/bySize/1.webp",
    sizes: [
      { size: '2"x2"', price: 1.49, image: "/product/bySize/1.webp" },
      { size: '3"x3"', price: 2.49, image: "/product/bySize/2.webp" },
      { size: '4"x2"', price: 1.99, image: "/product/bySize/3.webp" },
      { size: '4"x4"', price: 2.99, image: "/product/bySize/4.webp" },
      { size: '5"x3"', price: 3, image: "/product/bySize/5.webp" },
      { size: '5"x5"', price: 3.25, image: "/product/bySize/6.webp" },
      { size: '6"x6"', price: 3.49, image: "/product/bySize/7.webp" },
      { size: '7"x7"', price: 3.99, image: "/product/bySize/8.webp" },
      { size: '8"x8"', price: 4.49, image: "/product/bySize/9.webp" },
      { size: '9"x11"', price: 5.29, image: "/product/bySize/10.webp" },
      { size: '10"x10"', price: 5.49, image: "/product/bySize/11.webp" },
      { size: '11"x5"', price: 5.49, image: "/product/bySize/12.webp" },
      { size: '11"x11"', price: 5.99, image: "/product/bySize/13.webp" },
      { size: '11"x14"', price: 6.49, image: "/product/bySize/14.webp" },
      { size: '12"x17"', price: 6.99, image: "/product/bySize/15.webp" },
    ],
  },
  {
    id: 2,
    title: "DTF Gang Sheet Transfers",
    basePrice: 11.0,
    description:
      "If you need a larger DTF gang sheet, adjust the quantity in your order to get more sheets. Add them to your cart and repeat the process until you have the desired number of sheets.",
    mainImage: "/product/gang/2.webp",
    sizes: [
      { size: "22.5 in x 12 in", price: 11, image: "/product/gang/2.webp" },
      { size: "22.5 in x 24 in", price: 17, image: "/product/gang/3.webp" },
      { size: "22.5 in x 36 in", price: 21, image: "/product/gang/4.webp" },
      { size: "22.5 in x 48 in", price: 26, image: "/product/gang/5.webp" },
      { size: "22.5 in x 60 in", price: 32, image: "/product/gang/6.webp" },
      { size: "22.5 in x 84 in", price: 43, image: "/product/gang/7.webp" },
      { size: "22.5 in x 96 in", price: 49, image: "/product/gang/8.webp" },
      { size: "22.5 in x 120 in", price: 58, image: "/product/gang/1.webp" },
    ],
  },
  {
    id: 3,
    title: "DTF Gang Sheet Transfers - Gang Sheet Builder",
    basePrice: 7.99,
    description:
      "Maximize your savings with our budget-friendly DTF Gang Sheets Builder, designed for your ready-to-print designs.",
    mainImage: "/product/custom/1.webp",
    sizes: [
      { size: "22.5 in x 12 in", price: 7.99, image: "/product/custom/1.webp" },
      { size: "22.5 in x 24 in", price: 13.99 },
      { size: "22.5 in x 36 in", price: 17.99 },
      { size: "22.5 in x 60 in", price: 28.99 },
      { size: "22.5 in x 84 in", price: 39.99 },
      { size: "22.5 in x 120 in", price: 59.99 },
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
    products?.find((p) => p.id === Number(id)) || products[0];

  // State for selected product
  const [selectedProduct, setSelectedProduct] = useState(getProductById(id));
  // State for selected size
  const [selectedSize, setSelectedSize] = useState(selectedProduct?.sizes[0]);

  const [expandedFeature, setExpandedFeature] = useState(null);

  // Update product when route changes
  useEffect(() => {
    const newProduct = getProductById(id);
    setSelectedProduct(newProduct);
    setSelectedSize(newProduct?.sizes[0]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={
              selectedSize?.image ||
              selectedProduct?.sizes[0]?.image ||
              selectedProduct?.mainImage
            }
            alt={selectedProduct?.title}
            className="w-full sticky top-16 rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{selectedProduct?.title}</h1>
          <p className="font-bold text-xl mt-4">
            $
            {selectedSize?.price?.toFixed(2) ||
              selectedSize[0]?.price?.toFixed(2) ||
              selectedProduct?.basePrice?.toFixed(2)}{" "}
            USD
          </p>
          <p className="mt-4">{selectedProduct?.description}</p>

          <label className="w-full bg-black text-white py-2 rounded-md my-5 flex items-center justify-center cursor-pointer">
            <span>
              Drag and drop your file or{" "}
              <span className="underline">Browse</span>
            </span>
            <input type="file" className="hidden" />
          </label>

          {/* Sizes */}
          <h2>Size:</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedProduct?.sizes?.map((size, index) => (
              <span
                key={index}
                className={`px-4 py-2  rounded-md cursor-pointer ${
                  selectedSize?.size === size?.size
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  setSelectedSize(size);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {size?.size}
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
              <a href="https://www.visa.com/" target="_blank">
                Buy with VISA
              </a>
            </div>
          </div>

          {/* Expandable Features Section */}
          <div className="mt-10 space-y-4">
            {features?.map((feature, index) => (
              <div
                key={index}
                className="border hover:bg-gray-100  rounded-lg p-4 shadow-md"
              >
                <button
                  onClick={() =>
                    setExpandedFeature(expandedFeature === index ? null : index)
                  }
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="font-semibold">{feature?.title}</span>
                  <span>
                    {expandedFeature === index ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </span>
                </button>
                {expandedFeature === index && (
                  <p className="mt-2 py-2 border-t ">{feature?.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">You may also like</h2>
        <div className="flex gap-2 md:gap-10">
          {products
            .filter((product) => product.id !== selectedProduct?.id)
            .map((item) => (
              <div
                key={item?.id}
                className="border rounded-lg p-4 shadow-md cursor-pointer w-80 hover:shadow-lg transition"
                onClick={() => {
                  navigate(`/products/${item.id}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  src={item?.mainImage}
                  alt={item?.title}
                  className="h-40 object-cover rounded-lg"
                />
                <h3 className="mt-2 font-semibold">{item?.title}</h3>
                <p className="text-gray-700">
                  ${item?.basePrice?.toFixed(2)} USD
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
