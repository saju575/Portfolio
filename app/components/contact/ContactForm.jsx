"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="container mx-auto mt-8 mb-12">
      <form>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row mb-4 w-4/5 md:w-2/3 lg:w-1/2">
            <input
              className="text-[#8998AC] bg-[#040b1b] w-full md:w-1/2 md:mr-3 md:mb-0 mb-4 p-2 rounded-sm shadow"
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="text-[#8998AC] bg-[#040b1b] w-full md:w-1/2 md:mb-0 mb-4 p-2 rounded-sm shadow"
              type="email"
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 w-4/5 md:w-2/3 lg:w-1/2">
            <input
              type="text"
              className="w-full p-2 text-[#8998AC] bg-[#040b1b]"
              placeholder="Subject"
              required
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-4 w-4/5 md:w-2/3 lg:w-1/2">
            <textarea
              className="w-full p-2 text-[#8998AC] bg-[#040b1b]"
              name="content"
              cols="30"
              rows="10"
              placeholder="Write what you want"
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button
              className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
              type="submit"
            >
              <span>
                <span>Submit</span>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
