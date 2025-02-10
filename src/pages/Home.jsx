import React from "react";
import DTFPrintCollection from "../components/DTFPrintCollection";
import DTFOrderingSteps from "../components/DTFOrderingSteps";
import SatisfactionSection from "../components/SatisfactionSection";
import Testimonials from "../components/Testimonials";
import DTFTransfersSection from "../components/DTFTransfersSection";
import Blogs from "../components/Blogs";
import FAQ from "../components/faq";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-blue-50 min-h-screen flex flex-col items-center text-center">
        <section className=" text-left mt-10 flex">
          <div className="w-1/2 pl-32">
            <h2 className="text-7xl font-extrabold leading-tight text-black">
              Freshly Printed <br /> Designs, Fast And <br /> Flawless
            </h2>
            <p className="text-2xl text-gray-700 mt-4">
              High-quality DTF prints delivered fast. Perfect <br /> for custom
              apparel and designs.
            </p>
            <div className=" flex flex-col mt-6">
              <Link to={"/products/1"} className="bg-blue-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
                Order DTF Transfers by Size
              </Link>
              <Link to={"/products/2"} className="bg-blue-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 mt-8">
                Order DTF Gang Sheet
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/home/banner.png" alt="" />
          </div>
        </section>
      </div>

      <DTFPrintCollection />

      <DTFOrderingSteps />

      <SatisfactionSection />

      <Testimonials />

      <DTFTransfersSection />

      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <FAQ />
        </div>
      </section>

      <div className="bg-white py-12 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center">
          Explore Our Latest DTF Transfer Insights
        </h2>
        <p className="text-gray-600 text-center m-10 mb-8">
          Discover the cutting-edge trends, techniques, and innovations in DTF
          transfer technology
        </p>
        <Blogs />
      </div>

      <section className="bg-blue-50 py-12 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="/home/heat.jpg"
            alt="Heat Pressing"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Effortless Heat Pressing Techniques For DTF Transfers
            </h2>
            <p className="mt-4 text-gray-700 text-lg mb-10">
              Achieve perfect results with Kings DTF Transfers by setting your heat press to <span className="font-semibold">160°C</span> and applying firm pressure for{" "} <span className="font-semibold">15 seconds</span>.
            </p>

            {/* Button */}
            <Link to={"/HeatPress"} className=" bg-blue-500 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all">
              Pressing Instructions
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center gap-8 py-10 px-20">
        <div className="w-1/2">
        <h2 className="font-bold text-3xl pb-10">Join Us in Crafting DTF Innovations</h2>
        <p>Collaborate with us to revolutionize DTF printing, creating vibrant designs that inspire and elevate your brand. Together, let's shape a brighter future of custom apparel and merchandise</p>
        </div>
        <div className="w-1/2">
        <img src="/home/join_us.webp" alt="join us" />
        </div>
      </section>
    </>
  );
};

export default Home;
