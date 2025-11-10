import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3h1enti",
        "template_8bbx3j7",
        form.current,
        "YVG7_tm1BO8q4GZma"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="max-w-lg mx-auto my-12 p-8 bg-black/50 backdrop-blur-md rounded-2xl shadow-xl" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        Contact Me
      </h2>

      {success && (
        <p className="mb-4 text-center text-green-400 font-medium">{success}</p>
      )}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="p-4 rounded-xl border border-gray-600 bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="p-4 rounded-xl border border-gray-600 bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-4 rounded-xl border border-gray-600 bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition resize-none h-36"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
