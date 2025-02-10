import React from 'react'

const Blogs = () => {
    const blogs = [
        {
          id: 1,
          title: "Bulk DTF Gang Sheets and Wholesale Services for...",
          date: "January 27, 2025",
          description:
            "In the ever-growing world of custom printing, DTF (Direct-to-Film) printing has quickly gained popularity due to its versatility, vibrant colors, and durability...",
          image: "/blogs/blogs1.webp", // Replace with actual image URL
        },
        {
          id: 2,
          title: "Everything You Need to Know About Custom DTF Ga...",
          date: "January 27, 2025",
          description:
            "In the world of custom printing, DTF (Direct-to-Film) printing has become one of the most popular methods for creating high-quality, vibrant designs on apparel...",
          image: "/blogs/blogs2.webp",
        },
        {
          id: 3,
          title: "The Ultimate Guide to Custom DTF Transfers and ...",
          date: "January 27, 2025",
          description:
            "When it comes to high-quality printing, Custom DTF Transfers and Gang Sheet Printing have emerged as some of the most sought-after methods...",
          image: "/blogs/blogs3.webp",
        },
        {
          id: 4,
          title: "Same-Day and Custom DTF Gang Sheet Services Nea...",
          date: "January 27, 2025",
          description:
            "In today's fast-paced, on-demand economy, custom printing has become more crucial than ever. Whether you're a business owner looking to personalize apparel...",
          image: "/blogs/blogs4.webp",
        },
      ];
  return (
    <>
    <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
              <p className="text-gray-700 mt-2">{blog.description}</p>
              <a
                href="#"
                className="mt-3 inline-block text-blue-500 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blogs
