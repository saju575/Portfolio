import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="my-8">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl flex flex-col items-center uppercase font-semibold py-4">
          <span className="text-[#38BDF8] mb-2">Contact Me</span>
          <div className="w-12 bg-slate-800 h-1"></div>
        </h2>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
