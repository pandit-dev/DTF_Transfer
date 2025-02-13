import React from "react";

const Footer = () => {
  return (
    <>
      
      <div className="md:py-4 px-24 border-t border-b bg-gray-50 ">
        
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between md:my-10 my-4">
          <h2 className="text-lg font-bold mb-4 md:mb-0">
            Subscribe to our emails
          </h2>
          <div className="relative flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Email"
              className="p-2 outline-none w-64"
            />
            <button className="px-4  hover:bg-gray-300 transition">→</button>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-700 transition">
            ❤️ Follow on Shop
          </button>
        </div>
      </div>
      

      {/* Payment Methods & Copyright */}
      <div className="p-4 md:px-24  bg-gray-50 ">
        <div className=" flex flex-col md:flex-row items-center justify-between md:my-10 my-4">
          <p className="text-gray-600 text-sm">
            © 2025, Kings DTF Transfers Powered by Shopify
          </p>
          <div className="flex gap-5 mt-4 md:mt-0 ">
            <a
              href="https://www.amazon.in/amazonpay/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_Pay_logo.svg/266px-Amazon_Pay_logo.svg.png?20180630162337"
                alt="Amazon Pay"
                className="h-6 w-16 object-contain"
              />
            </a>
            <a
              href="https://www.apple.com/apple-pay/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/768px-Apple_Pay_logo.svg.png?20170518220303"
                alt="Apple Pay"
                className="h-6 w-16 object-contain"
              />
            </a>
            <a
              href="https://www.discover.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/191px-Discover_Card_logo.svg.png?20180125130308"
                alt="Discover"
                className="h-6 w-16 object-contain"
              />
            </a>
            <a
              href="https://www.mastercard.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="MasterCard"
                className="h-6 w-16 object-contain"
              />
            </a>
            <a
              href="https://www.visa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="VISA"
                className="h-6 w-16 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Footer;
