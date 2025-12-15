import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold">Sumit Sunil Patil</h3>

         <p>Email: sumitpatil7301@gmail.com</p>
         <p>Phone: +91 8454003385</p>

         <a
          href="https://linkedin.com/in/sumitsp1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300"
        >
          linkedin.com/in/sumitsp1
        </a>
        </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
