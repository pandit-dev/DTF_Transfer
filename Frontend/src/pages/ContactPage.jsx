import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Contact Info */}
      <div className=" flex flex-wrap md:flex-nowrap  justify-center gap-6 w-full max-w-4xl p-4">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-1/2">
          <h2 className="font-bold text-lg">Call Now</h2>
          <a href="tel:+18009350579" className="text-black font-bold underline hover:text-blue-500">
            +1 (800) 935-0579
          </a>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-1/2">
          <h2 className="font-bold text-lg">Email Us</h2>
          <a
            href="mailto:orders@kingsdtftransfers.com"
            className="text-black font-bold underline hover:text-blue-500"
          >
            orders@kingsdtftransfers.com
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-white p-6 shadow-md rounded-lg mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Contact</h2>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-2 outline-none border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-1/2 p-2 outline-none border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-2 outline-none border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
          <textarea
            placeholder="Comment"
            className="w-full p-2 outline-none border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
