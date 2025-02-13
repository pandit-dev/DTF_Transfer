import React from "react";
import DTFPrintCollection from "../components/DTFPrintCollection.jsx";
import DTFOrderingSteps from "../components/DTFOrderingSteps.jsx";
import SatisfactionSection from "../components/SatisfactionSection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import DTFTransfersSection from "../components/DTFTransfersSection.jsx";
import Blogs from "../components/Blogs.jsx";
import FAQ from "../components/FAQ.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    {/* Hero Section */}
    <div className="bg-blue-50 min-h-screen flex flex-col md:flex-row items-center text-center md:text-left px-6 md:px-20 py-10">
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-7xl font-extrabold leading-tight text-black">
          Freshly Printed <br /> Designs, Fast And <br /> Flawless
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 mt-4">
          High-quality DTF prints delivered fast. Perfect <br /> for custom
          apparel and designs.
        </p>
        <div className="flex flex-col mt-6 space-y-4 md:space-y-6">
          <Link to={"/products/1"} className="bg-blue-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
            Order DTF Transfers by Size
          </Link>
          <Link to={"/products/2"} className="bg-blue-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
            Order DTF Gang Sheet
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src="/home/banner.png" alt="Banner" className="w-full  mx-auto" />
      </div>
    </div>

    <DTFPrintCollection />
    <DTFOrderingSteps />
    <SatisfactionSection />
    <Testimonials />
    <DTFTransfersSection />

    {/* FAQ Section */}
    <section className="bg-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <FAQ />
      </div>
    </section>

    {/* Blog Section */}
    <div className="bg-white py-12 px-6 text-center max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold">
        Explore Our Latest DTF Transfer Insights
      </h2>
      <p className="text-gray-600 mt-4 md:mt-6">
        Discover the cutting-edge trends, techniques, and innovations in DTF transfer technology.
      </p>
      <div className="mt-8">
        <Blogs />
      </div>
    </div>

    {/* Heat Pressing Section */}
    <section className="bg-blue-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src="/home/heat.jpg" alt="Heat Pressing" className="rounded-lg shadow-lg w-full" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Effortless Heat Pressing Techniques For DTF Transfers
          </h2>
          <p className="mt-4 text-gray-700 text-lg mb-6">
            Achieve perfect results with Kings DTF Transfers by setting your heat press to <span className="font-semibold">160°C</span> and applying firm pressure for <span className="font-semibold">15 seconds</span>.
          </p>
          <Link to={"/HeatPress"} className="bg-blue-500 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all">
            Pressing Instructions
          </Link>
        </div>
      </div>
    </section>

    {/* Join Us Section */}
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8 py-10 px-6 md:px-20">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="font-bold text-2xl md:text-3xl pb-6">Join Us in Crafting DTF Innovations</h2>
        <p>Collaborate with us to revolutionize DTF printing, creating vibrant designs that inspire and elevate your brand. Together, let's shape a brighter future of custom apparel and merchandise</p>
        </div>
        <div className="md:w-1/2">
        <img src="/home/join_us.webp" alt="join us" className="rounded-lg shadow-lg w-full" />
        </div>
      </section>
    </>
  );
};

export default Home;
