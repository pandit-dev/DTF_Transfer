import React, { useEffect } from "react";
import Blogs from "../components/Blogs.jsx";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">News</h2>
      <Blogs />
    </div>
  );
};
export default BlogPage;
