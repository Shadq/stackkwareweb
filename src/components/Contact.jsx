import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1d4rid8",
        "template_19hcqa3",
        form.current,
        "_EsJktmkCslBo8Tt-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="bg-black mt-56 h-1000 font-newFont bg-stars flex flex-col items-center justify-center gap-10"
      id="contact"
    >
      <div className="flex justify-center text-center">
        <h1 className="text-5xl font-semibold bg-gradient-to-r from-teal-300 to-rose-900 bg-clip-text text-transparent">
          GET IN TOUCH WITH US
        </h1>
      </div>
      <div class="flex items-center justify-center ">
        <form className="w-64 md:w-80" ref={form} onSubmit={sendEmail}>
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              class="w-full rounded-lg bg-black border-2 border-zinc-600 py-3 px-6 text-base font-medium text-[#6B7280] focus:text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              class="w-full rounded-lg bg-black border-2 border-zinc-600 py-3 px-6 text-base font-medium text-[#6B7280] focus:text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="mb-3 block text-base font-medium text-white"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              class="w-full resize-none rounded-lg bg-black border-2 border-zinc-600 py-3 px-6 text-base font-medium text-[#6B7280]  outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              class="hover:shadow-form rounded-md bg-gradient-to-r from-red-400 to-indigo-600 py-3 px-8 text-white outline-none"
              onClick={sendEmail}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
