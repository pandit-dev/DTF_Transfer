import { useEffect } from "react";
import FAQ from "../components/FAQ.jsx";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section>
        <img
          className="w-full mb-10"
          src="/faq/faq_banner.webp"
          alt="raq_banner"
        />
      </section>
      <FAQ />
    </>
  );
};

export default FAQPage;
