"use client";
import React, { useState } from "react";
import { sendContactForm } from "../../../lib/api";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const clearField = () => {
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
    setIsLoading(false);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    setSuccess(false);
    const values = {
      name,
      email,
      subject,
      message,
    };
    try {
      await sendContactForm(values);
      clearField();
      setError(false);
      setSuccess(true);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      setSuccess(false);
    }
  };
  return (
    <div className="container mx-auto mt-8 mb-12">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row mb-4 w-4/5 md:w-2/3 lg:w-1/2">
            <input
              className="text-[#8998AC] bg-[#040b1b] w-full md:w-1/2 md:mr-3 md:mb-0 mb-4 p-2 rounded-sm shadow"
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              className="text-[#8998AC] bg-[#040b1b] w-full md:w-1/2 md:mb-0 mb-4 p-2 rounded-sm shadow"
              type="email"
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4 w-4/5 md:w-2/3 lg:w-1/2">
            <input
              type="text"
              className="w-full p-2 text-[#8998AC] bg-[#040b1b]"
              placeholder="Subject"
              required
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
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
              value={message}
            ></textarea>
          </div>
          {error && (
            <div className="mb-4 w-4/5 md:w-2/3 lg:w-1/2">
              <p className="w-full p-2 text-white text-center rounded bg-red-400">
                Somthing went wrong !
              </p>
            </div>
          )}
          {success && (
            <div className="mb-4 w-4/5 md:w-2/3 lg:w-1/2">
              <p className="w-full p-2 text-white text-center rounded bg-green-400">
                Email sent Successfuly !
              </p>
            </div>
          )}

          <div>
            <button
              className={`px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base  hover:bg-white hover:text-[#0284C7] pill ${
                isLoading ? "bg-red-400" : "bg-[#0F172A]"
              }`}
              disabled={isLoading}
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
